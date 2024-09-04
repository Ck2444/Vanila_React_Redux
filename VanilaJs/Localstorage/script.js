const form = document.querySelector('form');
const header = document.querySelector('header');
const root = document.querySelector('#root');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const usersContainer = document.createElement('div');
usersContainer.classList.add('user-container');
root.append(usersContainer);

const buttonTheme = document.querySelector('#change-theme');

const currentTheme = localStorage.getItem('theme');

const userFromStorage = JSON.parse(localStorage.getItem('userData'));

if (userFromStorage) {
  nameInput.value = userFromStorage.name;
  ageInput.value = userFromStorage.age;
}

if (currentTheme) {
  document.body.classList.add(currentTheme);
}

buttonTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  console.log(document.body.classList);
  localStorage.setItem('theme', document.body.classList);
});

const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
console.log(userArray);

const showUsers = (arr) => {
  usersContainer.innerHTML = '';
  arr.forEach((user) => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    const userName = document.createElement('h2');
    userName.innerText = user.name;
    const userAge = document.createElement('p');
    userAge.innerText = user.age;
    userCard.append(userName, userAge);
    usersContainer.append(userCard);
  });
};

showUsers(userArray);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = {
    name: nameInput.value,
    age: ageInput.value,
  };
  localStorage.setItem('userData', JSON.stringify(user));

  userArray.push(user);
  localStorage.setItem('userArray', JSON.stringify(userArray));
  showUsers(userArray);
  nameInput.value = '';
  ageInput.value = '';
});
