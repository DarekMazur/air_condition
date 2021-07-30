export const renderElement = (tag, className, target, content) => {
  const newElement = document.createElement(tag);

  if (className.length > 0) {
    className.forEach((singleClass) => newElement.classList.add(singleClass));
  }

  if (tag === 'img' && content) {
    newElement.src = content;
  } else if (content) {
    newElement.innerHTML = content;
  }
  target.appendChild(newElement);
};
