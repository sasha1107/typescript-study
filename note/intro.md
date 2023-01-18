# 타입스크립트를 써야 하는 이유

- 에러의 사전 방지
- 코드 가이드 및 자동 완성 -> 개발 생산성 향상

<br>

# 자바스크립트를 타입 스크립트 처럼 쓰는 방법 (JS Doc)

```js
// @ts-check
/**
 * 
 * @param {number} a
 * @param {number} b
 */

function sum(a,b) {
    return a + b;
}
sum(10, 20);
```

<br>

# 타입 스크립트 시작

## 설치
```
npm i typescript -g
```

## .ts 파일 컴파일
```
tsc 컴파일할ts파일.ts
```