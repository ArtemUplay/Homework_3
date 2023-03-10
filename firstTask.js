// Сделать функцию, которая будет позволять вызывать себя последовательно для
// суммирования и / или при выводе и / или математической операции вернет конечный
// результат fucn(2)(3)(5) = 10

function func(firstValue) {
  return function (secondValue) {
    return function (thirdValue) {
      return firstValue + secondValue + thirdValue;
    }
  }
}

console.log(func(2)(3)(5));