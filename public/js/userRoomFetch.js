const button = document.getElementById('UserRoomregistration');
const firstName = document.getElementById('UserRoomfirstName');
const lastName = document.getElementById('UserRoomlasttName');
const avatar = document.getElementById('URLAvatar');
const country = document.getElementById('UserRoomcountry');
const body = document.querySelector('body');

const userAllDiv = document.getElementById('userAllDiv');

button.addEventListener('click', async (event) => {
  event.preventDefault();
  const responce = await fetch('/profile', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      id: button.dataset.id,
      firstName: firstName.value,
      lastName: lastName.value,
      avatar: avatar.value,
      country: country.value,
    }),
  });
  const json = await responce.json();
  if (json === 'Fill in all fields FREAK') {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      firstName.value = '';
      lastName.value = '';
      avatar.value = '';
      country.value = '';
      div.remove();
    }, 2000);
  } else {
    const div = document.createElement('div');
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      firstName.value = '';
      lastName.value = '';
      avatar.value = '';
      country.value = '';
      div.remove();
    }, 2000);
  }
});

userAllDiv.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('UserRoomregistration').click();
  }
});
