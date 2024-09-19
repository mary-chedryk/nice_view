const openModalBtn = document.querySelector("[data-action='open-modal-contact']");
const closeModalBtn = document.querySelector("[data-action='close-modal-contact']");
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

// console.log('openModalBtn:>>', openModalBtn);
// console.log('closeModalBtn:>>', closeModalBtn);

openModalBtn.addEventListener('click', () => {
  body.classList.toggle('show-modal');
});
closeModalBtn.addEventListener('click', () => {
  body.classList.remove('show-modal');
});
backdrop.addEventListener('click', () => {
  if (event.target === BACKDROP) {
    body.classList.remove('show-modal');
  }
});