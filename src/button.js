const makeButton = buttonName => {
  const button = document.createElement('button');
  button.innerText = buttonName;
  return button;
}

module.exports = makeButton