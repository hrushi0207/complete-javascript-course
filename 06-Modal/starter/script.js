'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_button = document.querySelector('.close-modal');
const open_modals = document.querySelectorAll('.show-modal');

for (let i = 0; i < open_modals.length; i++) {
  //   console.log(open_modals[i]);
  open_modals[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const hidding_pop_ups = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

close_button.addEventListener('click', hidding_pop_ups);
overlay.addEventListener('click', hidding_pop_ups);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    console.log(`escape was pressed`);
    hidding_pop_ups();
  }
});
