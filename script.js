const calculatorForm = document.getElementById("calculatorForm");
const canvas = document.getElementById("dividendChart");
const ctx = canvas ? canvas.getContext("2d") : null;
const recalculateBox = document.getElementById("recalculateBox");
const recalculateButton = document.getElementById("recalculateButton");

function formatWon(value) {
  return Math.round(value).toLocaleString("ko-KR") + "원";
}

function formatPercent(value) {
  return value.toFixed(1).replace(".0", "") + "%";
}

function getNumber(id) {
  const element = document.getElementById(id);
  return element ? Number(element.value) : 0;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.innerText = value;
  }
}

function drawDividendChart(years, yearlyNet) {
  if (!canvas || !ctx) {
    return;
  }

  const width = canvas.width;
  const height = canvas.height;
  const padding = 42;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const maxValue = Math.max(yearlyNet * years, 1);
  const visibleYears = Math.min(years, 20);
  const barGap = 8;
  const barWidth = Math.max(10, (chartWidth - barGap * (visibleYears - 1)) / visibleYears);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#dce3eb";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  ctx.fillStyle = "#657080";
  ctx.font = "14px Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(formatWon(maxValue), padding, 24);

  for (let i = 1; i <= visibleYears; i += 1) {
    const actualYear = years > 20 ? Math.round((i / visibleYears) * years) : i;
    const cumulative = yearlyNet * actualYear;
    const barHeight = (cumulative / maxValue) * chartHeight;
    const x = padding + (i - 1) * (barWidth + barGap);
    const y = height - padding - barHeight;

    const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
    gradient.addColorStop(0, "#1062ff");
    gradient.addColorStop(1, "#098b63");

    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth, barHeight);

    if (i === 1 || i === visibleYears || actualYear % 5 === 0) {
      ctx.fillStyle = "#657080";
      ctx.font = "12px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(actualYear + "년", x + barWidth / 2, height - 16);
    }
  }
}

function calculate(showRecalculate = true) {
  const etfNameInput = document.getElementById("etfName");
  const etfName = etfNameInput && etfNameInput.value.trim() ? etfNameInput.value.trim() : "선택한 ETF";
  const amount = getNumber("amount");
  const yieldRate = getNumber("yieldRate");
  const taxRate = getNumber("taxRate");
  const periodYears = Math.floor(getNumber("periodYears"));

  if (amount <= 0 || yieldRate <= 0 || periodYears <= 0) {
    alert("투자금, 배당률, 투자 기간을 입력해주세요.");
    return;
  }

  const yearGross = amount * (yieldRate / 100);
  const monthGross = yearGross / 12;
  const tax = yearGross * (taxRate / 100);
  const yearNet = yearGross - tax;
  const monthNet = yearNet / 12;
  const periodGross = yearGross * periodYears;
  const periodNet = yearNet * periodYears;
  const periodTax = periodGross - periodNet;
  const totalReturnRate = (periodNet / amount) * 100;

  setText("summaryTitle", etfName + " 계산 결과");
  setText("summarySubtitle", periodYears + "년 기준");
  setText("yearGross", formatWon(yearGross));
  setText("monthGross", formatWon(monthGross));
  setText("yearNet", formatWon(yearNet));
  setText("monthNet", formatWon(monthNet));
  setText("periodNet", formatWon(periodNet));
  setText("totalReturnRate", formatPercent(totalReturnRate));
  setText("finalValue", formatWon(periodTax));
  setText("recover", "가격·환율 제외");
  setText("chartCaption", "세전 " + formatWon(periodGross) + " / 세후 " + formatWon(periodNet));

  drawDividendChart(periodYears, yearNet);

  if (showRecalculate && recalculateBox) {
    recalculateBox.hidden = false;
  }
}

function setLastUpdated() {
  const targets = document.querySelectorAll("[data-last-updated]");
  if (!targets.length) {
    return;
  }

  const date = new Date(document.lastModified);
  const isValidDate = !Number.isNaN(date.getTime());
  const formatted = isValidDate
    ? date.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })
    : "2026. 06. 11.";

  targets.forEach((target) => {
    target.textContent = formatted;
  });
}

if (calculatorForm) {
  calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    calculate();
  });

  calculate(false);
}

if (recalculateButton) {
  recalculateButton.addEventListener("click", function () {
    const firstInput = document.getElementById("amount");
    if (firstInput) {
      firstInput.focus();
      firstInput.select();
    }

    if (calculatorForm) {
      calculatorForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

setLastUpdated();
