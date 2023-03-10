// *Написать функцию которая выполнит быструю сортировку массива чисел

const arr = [105, 200, 75, 1, 234, 8, 90, 2, -3, 9, 72, 11, 24, 0, 37];

const sort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const index = Math.floor(Math.random() * array.length);
  const currentItem = array[index];

  const biggerValues = [];
  const lowerValues = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      continue;
    }

    if (array[i] > currentItem) {
      biggerValues.push(array[i]);
    } else {
      lowerValues.push(array[i]);
    }
  }

  return [
    ...sort(lowerValues),
    currentItem,
    ...sort(biggerValues)
  ]
}

console.log(sort(arr));