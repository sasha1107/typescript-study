// 인터페이스 정의
interface Menu {
    name: string;
    price: number;
    onsale: boolean;
}

const americano: Menu = {
    name: '아메리카노',
    price: 4000, 
    onsale: true
}

const lemonade: Menu = {
    name: "레몬에이드",
    price: 4500,
    onsale: false
}

function Order(menu: Menu){
    console.log(menu);
}
// Order("cafelatte");