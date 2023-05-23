// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('HI');
// logText(true);


// -----------

function logText<T>(text: T):T{
    console.log(text);
    return text;
}

logText('HI')
logText<string>('HI')


// -----------

interface Email {
    value: string;
    selected: boolean;
}

interface ProductNum {
    value: number;
    selected: boolean;
}
interface Dropdown <T> {
    value: T;
    selected: boolean;
}

const obj1: Dropdown<string> = {
    value: 'abc', 
    selected: false
}
const obj2: Dropdown<number> = {
    value: 123, 
    selected: false
}

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function(text){
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hello', 'world']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name : string; 
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('abc');
getShoppingItemOption('name');
getShoppingItemOption('price');