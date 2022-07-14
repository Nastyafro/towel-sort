
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let Arr = [];
  matrix.forEach((el, i) => {
    if(i%2 == 0 || i == 0) {
      Arr.push(el);
    } else {
      Arr.push(el.reverse());
    }
  })
  
  let newArr = [];
  Arr.map((el) => {
    newArr = newArr.concat(el);
  })
  return newArr;
}
