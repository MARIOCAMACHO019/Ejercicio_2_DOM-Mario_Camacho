document.body.appendChild(document.createElement('div'));

const d1 = document.createElement('div');
d1.appendChild(document.createElement('p'));
document.body.appendChild(d1);

const d2 = document.createElement('div');
for (let i = 0; i < 6; i++) {
  d2.appendChild(document.createElement('p'));
}
document.body.appendChild(d2);

const pTexto = document.createElement('p');
pTexto.textContent = 'Soy dinámico!';
document.body.appendChild(pTexto);

document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

document.querySelectorAll('.fn-remove-me').forEach(el => el.remove());

const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
document.body.insertBefore(pMedio, document.querySelectorAll('div')[1]);

document.querySelectorAll('.fn-insert-here').forEach(div => {
  const pDentro = document.createElement('p');
  pDentro.textContent = 'Voy dentro!';
  div.appendChild(pDentro);
});