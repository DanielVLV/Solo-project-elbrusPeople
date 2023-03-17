const button = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const body = document.querySelector('body');
const loginAllDiv = document.getElementById('loginAllDiv');

button.addEventListener('click', async (event) => {
  event.preventDefault();
  const responce = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  const json = await responce.json();
  if (json === 'Incorrect password') {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      email.value = '';
      password.value = '';
      div.remove();
    }, 2000);
  }
  if (json === 'Welcome to the club buddy') {
    const div = document.createElement('div');
    div.className = 'alert baddy';
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }
  if (json === 'User is not found') {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      email.value = '';
      password.value = '';
      div.remove();
      // window.location.href = '/registration';
    }, 2000);
  }
});

loginAllDiv.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('loginBtn').click();
  }
});
