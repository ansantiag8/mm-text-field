export default (node) => {
  node.addEventListener('blur', (event) => {
    const { target: { value, parentNode } } = event;

    if (parentNode.getAttribute('required') !== null && !value) {
      node.classList.add('mm-input-error');
      node.classList.remove('mm-input-not-empty');
    } else {
      node.classList.add('mm-input-not-empty');
    }
  });
};
