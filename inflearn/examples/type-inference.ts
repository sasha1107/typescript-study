// 타입 추론 기본

var a = '10';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2

// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}
var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

var detailedItem: DetailedDropdown<string> = {
    value: 'abc',
    title: 'def',
    description: 'ghi',
    tag: 'jkl'
}

var detailedItem2: DetailedDropdown<number> = {
    value: 123,
    title: 'def',
    description: 'ghi',
    tag: 456
}

// 가장 적절한 타입 (Best Common Type)
// -> 가장 근접한 타입을 추론한다.
    // 유니온 타입으로 지정됨
var arr = [1,2,3];
var arr2 = [1,2, true];
var arr3 = [1,2, true, 'a'];
var arr4 = [1,2, true, null];
