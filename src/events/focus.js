export default (node) => {
  node.addEventListener('focus', (event) => {
    const { target: { value } } = event;
    node.classList.add('mm-input-touched');

    if (value) {
      node.classList.add('mm-input-not-empty');
    } else {
      node.classList.remove('mm-input-not-empty');
    }
  });
};
