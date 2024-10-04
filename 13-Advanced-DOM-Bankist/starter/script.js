'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////






// selecting elements
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)


const header = document.querySelector('.header')

const allSections = document.querySelectorAll('.section')
console.log(allSections)

console.log(document.getElementById('section--1'))

const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

document.getElementsByClassName('btn')









// Creating and inserting Elements
//insertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML = 'We use cookie for improved funtionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'


header.prepend(message)
header.append(message)


// header.before(message)
// header.after(message)



console.log(header)










// Deleting elements

document.querySelector('.btn--close-cookie').addEventListener('click',function(e){
  e.preventDefault()
  message.remove()
  // message.parentElement.removeChild(message)
  console.log(header)
})









// styles
message.style.backgroundColor = '#37383d'
message.style.width = '120'

console.log(message.style.color)
console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).width)

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 +'px'
console.log(message.style.height)


document.documentElement.style.setProperty('--color-primary','orangered')









// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)

logo.alt = 'description image logo'

// Non-Standard
console.log(logo.designer)        //undefined

console.log(logo.getAttribute('designer'))
console.log(logo.getAttribute('src'))       //relative path link

logo.setAttribute('company', 'bankist')



const link = document.querySelector('.nav__link--btn')
console.log(link.href)
console.log(link.getAttribute('href'))



// Data Attributes
console.log(logo.dataset.versionInteger)







// CLASES
logo.classList.add('c','g')
logo.classList.remove('c','g')
logo.classList.toggle('c')
logo.classList.contains('c')



