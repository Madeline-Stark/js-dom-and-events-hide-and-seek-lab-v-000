function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // pulls a .target out of #nested
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(i, 10) + 1;
  }
}

function deepestChild() {
  const insideDivs = document.querySelectorAll('#grand-node div div div div');
  for (let i = 0; i < insideDivs.length; i++) {
      return insideDivs[i];  // .innerHTML wasn't working b/c wanted the object
  };
}
