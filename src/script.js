const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});

    window.addEventListener('load',()=>{
        setTimeout(()=>{
        console.log("loading function");
        const loader = document.querySelector('.loader');
        const nav = document.querySelector('.header');
        loader.classList.add('loading-hidden');
        nav.classList.remove('loading-hidden');

        // loader.addEventListener('transitioned', ()=>{
        //     document.body.removeChild(".loader");
        // });
        },1500);
    });





