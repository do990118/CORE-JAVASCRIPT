function handler() {
  console.log('클릭 이벤트 발생!');
}

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent('.first', 'click', handler);

// first.addEventListener('click',handler);

getNode('.deleteEvent').addEventListener('click', remove);
