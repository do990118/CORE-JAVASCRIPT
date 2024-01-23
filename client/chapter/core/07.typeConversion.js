/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

// const YEAR = 2024;
// console.log(String(YEAR)); // 명시적 형 변환
// console.log(YEAR + '') // 암시적 형 변환

// undefined, null

// let days = null;
// let weekend;

// console.log(days + '');
// console.log(weekend + '');

// boolean

// let isClicked = false;

// console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
// console.log( Number(friend));

// null

// let money = null;
// console.log(Number(money));

// boolean

// let cutie = true;
// console.log(Number(cutie));

// string

// let num = '250';
// // console.log(Number(num));
// console.log(num * 1);
// console.log(num / 1);
// console.log(+ num)

// numeric string

// const width = '105.3px'

// console.log(Number(width));
// console.log(parseInt(width));
// console.log(parseFloat(width));

//parseInt와 parseFloat는 숫자 앞에 문자가 오면 변환이 안 되고 숫자 중간에 문자가 오면 문자 바로 앞까지만 변환된다

/* 데이터 → 불리언 ---------------------------------------------------------- */

// console.log(Boolean(friend)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('0')); // true

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// const value = +prompt('값을 입력해 주세요');
// const value = prompt('값을 입력해 주세요') * 1;
const value = prompt('값을 입력해 주세요') / 1;

console.log(value + 50);
// console.log(Number(value) + 50);
// console.log((value * 1) + 50);
// console.log((value / 1) + 50);
// console.log((+value) + 50);
