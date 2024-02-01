/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments); // 순환 || 반복시켜서 합 구하기

  let sum = 0;

  // for(let i = 0; i <arguments.length; i++){
  //     // console.log(arguments[i]);
  //     sum += arguments[i];

  //     return sum;
  // }

  // for(let value of arguments){
  //     sum += value;
  // }

  // Array.prototype.forEach.call(arguments, function(item){
  //     sum += item;
  // })

  //   const arr = Array.prototype.slice.call(arguments);
  //   const arr = Array.from(arguments);
  // arr.forEach(function(item){
  //     sum += item;
  // })
  // console.log(arr);
  // const arr = [...arguments];

  const arr = [...arguments];

  arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  sum = arr.reduce((acc, cur) => acc + cur);

  return sum;
};

const result = calculateTotal(10, 20, 30, 40, 50, 60, 70, 80);

//   console.log(result);

//   const data = [
//     {
//       name:'tiger',
//       age:30,
//     },
//     {
//       name:'kindtiger',
//       age:20,
//     },
//     {
//       name:'seonbeom',
//       age:41,
//     }
//   ]

//   const tag = data.map((d)=>{
//     return `<li> 이름 : ${d.name}</li>`
//   })

//   tag.forEach((i)=>{
//     document.body.insertAdjacentHTML('beforeend',i)
//   })

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callback = function (state, success, fail) {
  if (state) {
    return success();
  } else {
    return fail();
  }
};

callback(
  true,
  function () {
    return '성공';
  },
  function () {
    return '실패';
  }
);

function movePage(url, success, fail) {
  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }

  url.includes('www') ? success(url) : fail();
}

// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);

    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function () {
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const MASTER = (function () {
  //캡슐화
  let uuid = 'asdfasdfasdf';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})('a');

console.log(MASTER);
