# Google Search Console 제출 준비 안내

이 사이트는 Google Search Console에 URL 접두어 방식으로 등록하고, sitemap 제출과 주요 URL 색인 요청을 진행할 준비가 되어 있습니다.

## 등록 정보

- 등록할 사이트 URL: [https://etf-dividend-calculator.vercel.app/](https://etf-dividend-calculator.vercel.app/)
- 제출할 sitemap: [https://etf-dividend-calculator.vercel.app/sitemap.xml](https://etf-dividend-calculator.vercel.app/sitemap.xml)
- 권장 속성 유형: URL 접두어

## URL 접두어 방식 등록 안내

1. [Google Search Console](https://search.google.com/search-console/about)에 접속합니다.
2. Google 계정으로 로그인합니다.
3. 속성 추가 화면에서 `URL 접두어`를 선택합니다.
4. 사이트 URL에 `https://etf-dividend-calculator.vercel.app/`를 입력합니다.
5. `계속`을 눌러 소유권 확인 단계로 이동합니다.

URL 접두어 속성은 입력한 URL로 시작하는 주소만 포함합니다. `https://`와 마지막 `/`까지 포함해 등록하세요.

## HTML 메타태그 인증 방식 안내

1. 소유권 확인 화면에서 `HTML 태그` 인증 방식을 선택합니다.
2. Search Console이 제공하는 메타태그를 복사합니다.
3. 복사한 태그를 사이트 홈 페이지인 `index.html`의 `<head>` 안에 추가합니다.
4. 변경 사항을 commit, push한 뒤 Vercel 배포가 완료될 때까지 기다립니다.
5. 배포 후 브라우저에서 [https://etf-dividend-calculator.vercel.app/](https://etf-dividend-calculator.vercel.app/) 페이지 소스를 열고 `google-site-verification` 태그가 보이는지 확인합니다.
6. Search Console로 돌아가 `확인`을 누릅니다.

예시 형식:

```html
<meta name="google-site-verification" content="Search Console에서 제공한 고유 코드">
```

주의: 위 예시는 형식 안내용입니다. 실제 인증 태그는 Google 계정별로 다르므로 Search Console에서 제공한 값을 그대로 사용해야 합니다.

## sitemap 제출 위치 안내

1. 소유권 확인이 완료된 Search Console 속성으로 들어갑니다.
2. 왼쪽 메뉴에서 `색인 생성` > `Sitemaps`로 이동합니다.
3. 새 sitemap 추가 입력칸에 `sitemap.xml`을 입력합니다.
4. `제출`을 누릅니다.
5. 제출 후 상태가 `성공`으로 표시되는지 확인합니다.

제출 대상 sitemap 전체 주소:

```text
https://etf-dividend-calculator.vercel.app/sitemap.xml
```

## URL 검사 후 색인 생성 요청 방법

1. Search Console 상단의 URL 검사 입력창에 색인 요청할 전체 URL을 붙여넣습니다.
2. 검사가 끝나면 `실제 URL 테스트`를 실행합니다.
3. 테스트 결과에서 페이지가 색인 생성 가능하다고 표시되면 `색인 생성 요청`을 누릅니다.
4. 홈 URL을 먼저 요청한 뒤 FAQ와 주요 가이드 URL을 순서대로 요청합니다.
5. 요청 후 바로 검색 결과에 노출되지 않을 수 있으므로 3~7일 뒤 색인 상태를 다시 확인합니다.

## 색인 요청 추천 URL 목록

- [https://etf-dividend-calculator.vercel.app/](https://etf-dividend-calculator.vercel.app/)
- [https://etf-dividend-calculator.vercel.app/faq.html](https://etf-dividend-calculator.vercel.app/faq.html)
- [https://etf-dividend-calculator.vercel.app/etf-dividend-guide.html](https://etf-dividend-calculator.vercel.app/etf-dividend-guide.html)
- [https://etf-dividend-calculator.vercel.app/dividend-tax-guide.html](https://etf-dividend-calculator.vercel.app/dividend-tax-guide.html)
- [https://etf-dividend-calculator.vercel.app/monthly-dividend-etf.html](https://etf-dividend-calculator.vercel.app/monthly-dividend-etf.html)
- [https://etf-dividend-calculator.vercel.app/usage.html](https://etf-dividend-calculator.vercel.app/usage.html)
- [https://etf-dividend-calculator.vercel.app/notice.html](https://etf-dividend-calculator.vercel.app/notice.html)
- [https://etf-dividend-calculator.vercel.app/privacy.html](https://etf-dividend-calculator.vercel.app/privacy.html)
- [https://etf-dividend-calculator.vercel.app/contact.html](https://etf-dividend-calculator.vercel.app/contact.html)

## Search Console 등록용 체크리스트

□ Google Search Console 접속
□ URL 접두어로 사이트 등록
□ 소유권 확인
□ sitemap.xml 제출
□ 홈 URL 색인 요청
□ FAQ URL 색인 요청
□ 가이드 3개 URL 색인 요청
□ 3~7일 후 색인 상태 확인

## 제출 전 최종 확인 항목

- sitemap.xml 200 응답
- robots.txt 200 응답
- sitemap 내부 모든 URL 200 응답
- robots.txt에 Sitemap 경로 존재
- 주요 HTML 페이지에 canonical 존재
- 주요 HTML 페이지에 meta description 존재
- contact.html에 iframe 없음
- 한글 깨짐 없음

## 공식 참고 문서

- [Search Console에 속성 추가](https://support.google.com/webmasters/answer/34592)
- [사이트 소유권 확인](https://support.google.com/webmasters/answer/9008080)
- [Sitemaps 보고서](https://support.google.com/webmasters/answer/7451001)
- [URL 검사 도구](https://support.google.com/webmasters/answer/9012289)
