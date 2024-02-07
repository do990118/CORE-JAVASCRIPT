// 1. input value 값 가져오기

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');

// 2. 두 수의 합 더하기

function handleInput() {
  console.log('this.value');
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);