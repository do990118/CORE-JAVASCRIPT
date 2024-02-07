/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className); // getter
// first.className = 'fff' // setter
// first.className = '' // 전체 삭제

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// first.classList.add('hello');
// first.classList.remove('hello');
// first.classList.contains('hello');

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// first.style.cssText = `
// display: flex;
// margin: 10px;
// border: 1px dotted red;
// `;

// first.style.background = 'orange'; // setter

// getComputedStyle(first)['backgroundColor']; // getter

// function getCss(node, prop) {
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }
//   if (!(prop in document.body.style)) {
//     throw new SyntaxError(
//       'getCss 함수의 두 번째 인수는 유효한 CSS 속성이 아닙니다'
//     );
//   }
//   return getComputedStyle(node)[prop];
// }

// getCss('.first', 'fontSize');

// function setCss(node, prop, value) {
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }
//   if (!(prop in document.body.style)) {
//     throw new SyntaxError(
//       'getCss 함수의 두 번째 인수는 유효한 CSS 속성이 아닙니다'
//     );
//   }
//   if (!value) {
//     throw new Error('setCss 함수의 세 번째 인수는 필수 입력값입니다');
//   }
//   node.style[prop] = value;
// }

// setCss('.first', 'fontSize', '30px');

// function css(node, prop, value) {
//   !value ? getCss(node, prop) : setCss(node, prop, value);
// }

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// function addClass(node, className) {
//   if(typeof node == 'string'){
//     node = getNode(node);
//   }
//  if(typeof className !== 'string'){
//   throw new TypeError('addClass 함수의 두 번째 인수는 문자형이어야 합니다')
//  }
//   node.classList.add(className);
// }
// addClass('.first', 'second');

// function removeClass(node, className) {
//   if(typeof node == 'string'){
//     node = getNode(node);
//   }
//  if(typeof className !== 'string'){
//   throw new TypeError('addClass 함수의 두 번째 인수는 문자형이어야     합니다')
//  }
//   node.classList.remove(className);
// }
// removeClass('.first', 'first');

// function addClass(node,className){

//   if(typeof node === 'string') node = getNode(node)
//   if(typeof className !== 'string') throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//   node.classList.add(className)
// }

// function removeClass(node,className){
//   if(typeof node === 'string') node = getNode(node)

//   if(!className) {
//     node.className = '';
//     return;
//   }

//   if(typeof className !== 'string') throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

//   node.classList.remove(className);
// }

// function toggleClass(node,className){
//   if(typeof node === 'string') node = getNode(node)
//   if(typeof className !== 'string') throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//   return node.classList.toggle(className)
// }
