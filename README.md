# React 기본 세팅하기

# 기본세팅

## TailwindCSS

    - CSS 프레임워크로 tailwindcss사용
    - xs, sm => 모바일
    - md, lg => 태블릿, 데스크탑
    - xl, xxl => 데스크탑

## router-dom

    - V6로 사용

## axios

    - api ^^

## craco

    - 절대경로를 위해 사용
    - "../../pages/Home" => @pages/Home으로 사용
    - craco.config.js와 jsconfig.json에서 폴더 추가 가능(가능한 건드리지 말것! 추가해야하면 알려주세요)

## react-icons

    - icon 사용할떄 참고할 것

# 팀 규칙을 대충 적어봤습니다.

## powershell & linux 말고 git bash 사용할 것

    - 그래야 오류가 적다

## 최소 1일 1커밋 할 것.

    - 숙제

### 일단 이정도로 세팅함. 추가는 알아서

1. Feat - 새로운 기능 추가
2. Fix - 버그 수정
3. Docs - 문서 추가 및 수정
4. Chore - 빌드 업무 수정, 패키지 매니저 수정 (소스 코드 변경 X)
5. Design - CSS 등 사용자 UI 디자인 변경
6. Remove - 파일을 삭제하는 작업만 수행한 경우
7. Rename - 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
8. Refactor - 소스 코드 리팩토링

- 최대한 위와같은 형식을 사용해서 커밋할 것.

## 페이지 구조

1. 페이지들은 pages
2. 개별 컴포넌트는 components
3. 커스텀훅은 hooks, 기타 함수는 utils
4. API선언과 관련된 것들은 api
5. 이미지 파일등은 assets
6. app.js와 index.js는 웬만하면 건들지 말것.
7. .env에는 토큰값이나 api키등을 담는다.(gitignore되어있음. 이유는 알아서 찾아보시길)
8. 각 컴포넌트는 컴포넌트 폴더 아래 index.jsx사용.
9. 새로운 모듈등을 깔게되면 최소한 커밋 이름으로라도 알려주자.

## 브랜치는 기능별로 팔것(ex> login, post등등)

## 추가로 더 있으면 개인연락을 하거나 위키를 이용하도록 합시다.

# 알아들었으면 끄덕여
