const deliteUserBtn = document.getElementById('deliteUser');
const body = document.querySelector('body');

deliteUserBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const responce = await fetch('/adminRoom', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      id: deliteUserBtn.dataset.id,
    }),
  });
  const json = await responce.json();
  deliteUserBtn.parentNode.remove();
  const div = document.createElement('div');
  div.innerText = json;
  body.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 2000);
});
