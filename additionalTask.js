// Собственная реализация функции map
Array.prototype.myMap = function (cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const result = cb(this[i], i, this);

    newArray.push(result);
  }

  return newArray;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

const doubledNumbersArray = arr.myMap((num) => num * 2);
console.log(doubledNumbersArray);
