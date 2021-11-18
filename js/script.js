
// burgerMenu ('.burger-menu');
let button = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
const header = document.querySelector('.header');

let y=0;

window.addEventListener('scroll', function () {
 
  if (window.scrollY > 800 ) {

     header.classList.add("changeColor")
    
  } else {
  
    if (header.classList.contains("changeColor")) {
       
      header.classList.remove("changeColor")

    }

  }

});



button.addEventListener('click', function () {

  button.classList.toggle('active');
  menu.classList.toggle('active__menu');       
  

  if (button.classList.contains('active')) {

    body.style.overflow = 'hidden';

  } else {

    body.style.overflow = 'visible';

  }
});




const collapse = document.querySelectorAll('.collapse');
const collapseControl = document.querySelectorAll('[data-arrow]');
const hidden = document.querySelectorAll('[data-block]');


const arrowTwo = document.querySelectorAll('.arrow-type__two');
const hiddenTwo = document.querySelectorAll('.hidden-block-2');

const arrowThree = document.querySelectorAll('.arrow-type__three');
const hiddenThree = document.querySelectorAll('.hidden-block-3');

window.addEventListener ("resize", function() {
arrowTwo.forEach((btn) => {
  if ( window.innerWidth < 340 ) {
    btn.classList.add("arrow-activ");
  } else {
    btn.classList.remove("arrow-activ");
  }
});
});

arrowTwo.forEach(( btn, i ) => {
  btn.addEventListener('click',() => {
   

    hiddenTwo[i].classList.toggle('hidden-active');
    if(hiddenTwo[i].classList.contains('hidden-active')){
      btn.style.transform='rotateZ(180deg)'
    }else{
      btn.style.transform='rotateZ(0deg)'

    }
  });  
});

arrowThree.forEach(( btn, i ) => {
  btn.addEventListener('click',() => {
   

    hiddenThree[i].classList.toggle('hidden-active');
    if(hiddenThree[i].classList.contains('hidden-active')){
      btn.style.transform='rotateZ(180deg)'
    }else{
      btn.style.transform='rotateZ(0deg)'

    }
  });  
});


collapseControl.forEach((btn,i ) => {
  if ( window.innerWidth < 340 ) {
    btn.classList.add("arrow-activ");
    hidden[i].classList.add('hidden-active')
 
  } else {
    btn.classList.remove("arrow-activ");
    hidden[i].classList.remove('hidden-active')
  }
});


window.addEventListener ("resize", function() {

collapseControl.forEach((btn,i ) => {
  if ( window.innerWidth < 340 ) {
    btn.classList.add("arrow-activ");
    hidden[i].classList.add('hidden-active')

  } else {
    btn.classList.remove("arrow-activ");
    hidden[i].classList.remove('hidden-active')
    
  }

});
});

  
collapseControl.forEach(( btn, i ) => {
  btn.addEventListener('click',(e) => {
   
    e.preventDefault();

    hidden[i].classList.toggle('hidden-active');
    if(hidden[i].classList.contains('hidden-active')){
      btn.style.transform='rotateZ(0deg)'
    }else{
      btn.style.transform='rotateZ(180deg)'

    }

  });  

});


const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let buttonMiddle = document.querySelectorAll('.button-middle');
let group = document.querySelectorAll('.group');



buttonMiddle.forEach(( btn ) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});


group.forEach(( btn ) => {
  btn.addEventListener('click',() => {
    btn.classList.toggle('active');
  });
});