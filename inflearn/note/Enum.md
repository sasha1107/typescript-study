# 이넘 (Enums)

특정 값들의 집합을 의미하는 자료형

## 숫자형 이넘

- 초기값을 지정해주지 않으면 숫자형 이넘(0, 1, 2, ..)으로 지정되며 0부터 차례로 1씩 증가합니다.
    ```ts
    enum Shoes {
        Nike, 
        Adidas
    }

    const myShoes = Shoes.Nike;
    console.log(myShoes); // 0
    ```
- 숫자형 이넘을 선언할 때 초기 값을 주면 초기 값부터 차례로 1씩 증가합니다.

## 문자형 이넘

```ts
enum Shoes {
    Nike = "나이키", 
    Adidas = "아디다스"
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 나이키
```