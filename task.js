const createTasks = async () => {
  // 1. Микро и рендер задачи.

  setTimeout(() => {
    const promiseOne = new Promise((resolve) => {
      resolve('then из первой задачи');
    });

    promiseOne.then((value) => {
      console.log(value);
    });

    document.body.style.backgroundColor = 'yellow';
  }, 0);

  // 2. Микрозадача и микрозадача.
  setTimeout(() => {
    const promiseTwo = new Promise((resolve) => {
      resolve('then из второй задачи');
    });

    promiseTwo.then((value) => {
      console.log(value);
    });

    promiseTwo.then((value) => {
      console.log(`Второй ${value}`);
    });
  }, 1000);

  // 3. Микрозадача и рендер страницы

  setTimeout(() => {
    const promiseThree = new Promise((resolve) => {
      resolve('then из третьей задачи');
    });

    promiseThree.then((message) => {
      console.log(message);
    });

    const title = document.querySelector('.title');
    title.textContent = 'Привет, JavaScript!';
  }, 2000);
};

createTasks();
