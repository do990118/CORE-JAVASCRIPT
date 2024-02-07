function inserBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforebegin', text);
}

function inserFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterbegin', text);
}

function inserLast(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforeend', text);
}

function inserAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterend', text);
}
