/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

function getNode(node, context = document) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
  }
  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (typeof node !== 'string') {
    throw new Error('getNodes 함수의 인수는 문자 타입 이어야 합니다.');
  }

  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }

  return context.querySelectorAll(node);
}

const spanList = document.querySelectorAll('span');

// console.log(first);
// console.log(spanList)

/* 문서 대상 확인 */
// - matches
// - contains

// console.log(first.matches('span'));

console.log(getNode('h1').contains(getNode('.second')));
