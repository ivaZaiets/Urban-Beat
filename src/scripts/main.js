'use strict';
/* eslint-disable */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
});

const elementsWrapper = (style) => {
  const elements = document.querySelectorAll(style);

  return elements.forEach(el => {
    observer.observe(el);
  });
};

elementsWrapper('.hidden-left');
elementsWrapper('.hidden');
