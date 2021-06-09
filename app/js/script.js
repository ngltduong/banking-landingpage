const btnhamburger = document.querySelector('#btnHamburger');

btnhamburger.addEventListener('click', function(){
    console.log("clicked hamburger");
    if(btnhamburger.classList.contains('open')){
        btnhamburger.classList.remove('open');
    }
    else{
        btnhamburger.classList.add('open');
    }
})

