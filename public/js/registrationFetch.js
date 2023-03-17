const button = document.getElementById('registration');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lasttName');
const country = document.getElementById('country');
const email = document.getElementById('email');
const password = document.getElementById('password');
const body = document.querySelector('body');
// const registrationAllDiv = document.getElementById('registrationAllDiv');

button.addEventListener('click', async (event) => {
  event.preventDefault();
  //   console.log(firstName.value, lasttName.value, country.value, email.value, password.value);
  const responce = await fetch('/registration', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      country: country.value,
      email: email.value,
      password: password.value,
    }),
  });
  const json = await responce.json();
  if (json === 'Fill in all fields') {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerText = json;
    // alert(json);
    body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  if (json === 'Registration completed successfully') {
    const div = document.createElement('div');
    div.innerText = json;
    div.className = 'alert';
    // alert(json);
    body.appendChild(div);
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  }
  if (json === 'User already registered') {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  }
});
