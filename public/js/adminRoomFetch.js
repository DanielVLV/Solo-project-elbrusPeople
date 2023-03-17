const adminAllDiv = document.getElementById('adminAllDiv');
const body = document.querySelector('body');

adminAllDiv.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.dataset.id) {
    const responce = await fetch('/adminRoom', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        id: event.target.dataset.id,
      }),
    });
    const json = await responce.json();
    event.target.parentNode.remove();
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerText = json;
    body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }
});
