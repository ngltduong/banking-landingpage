const btnhamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click', function(){
    console.log("clicked hamburger");
    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('notscroll');
        header.classList.remove('open'); 
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{ //Open Hamburger Menu
        header.classList.add('open');
        body.classList.add('notscroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
})

