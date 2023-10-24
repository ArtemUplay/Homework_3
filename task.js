const createTasks = async () => {
  // 1. Микро и рендер задачи.

  const firstTask = async () => {
    const promiseOne = new Promise((resolve) => {
      resolve('then из первой задачи');
    });

    promiseOne.then((value) => {
      console.log(value);
    });

    await promiseOne;

    document.body.style.backgroundColor = 'yellow';
  };

  await firstTask();

  // 2. Микрозадача и микрозадача.

  const secondTask = async () => {
    const promiseTwo = new Promise((resolve) => {
      resolve('then из второй задачи');
    });

    promiseTwo.then((value) => {
      console.log(value);
    });

    promiseTwo.then((value) => {
      console.log(`Второй ${value}`);
    });
  };

  await secondTask();

  // 3. Микрозадача и рендер страницы

  const thirdTask = async () => {
    const promiseThree = new Promise((resolve) => {
      resolve('then из третьей задачи');
    });

    promiseThree.then((message) => {
      console.log(message);
    });

    await promiseThree;

    const title = document.querySelector('.title');
    title.textContent = 'Привет, JavaScript!';
  };

  await thirdTask();
};

createTasks();
