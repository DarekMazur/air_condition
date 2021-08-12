export const renderElement = (tag, className, target, content, alt) => {
  const newElement = document.createElement(tag);

  if (className.length > 0) {
    className.forEach((singleClass) => newElement.classList.add(singleClass));
  }

  if (tag === 'img' && content) {
    newElement.src = content;
    newElement.alt = alt;
  } else if (tag === 'a' && content) {
    newElement.href = content;
    newElement.target = '_blank';
  } else if (content) {
    newElement.innerHTML = content;
  }
  target.appendChild(newElement);
};
