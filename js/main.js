/**************  slideScroll ******************/

$(document).ready(function() {
	$('#pagepiling').pagepiling();
});


/**************  menuSlide ******************/
const menuBtn = document.querySelector('.menu__btn'),
    menuNav = document.querySelector('.menu__nav');

    menuBtn.addEventListener('click', function(e){
        e.preventDefault(); 
        if(menuBtn.classList.contains('menu__btn-active')){
            menuBtn.classList.remove('menu__btn-active');
            menuNav.classList.remove('menu__nav_active');
        } else {
            menuBtn.classList.add('menu__btn-active');
            menuNav.classList.add('menu__nav_active');
        }


    });

    
/**************  btnReadMore ******************/

const readMoreBtn = document.querySelector('.header__more'),
    header = document.querySelector('.header'),
    studio = document.querySelector('.studio');
    

    readMoreBtn.addEventListener('click', function(e){
        e.preventDefault();
        header.classList.add('pp-easing');
        header.classList.remove('active');
        header.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.style.transform = 'translate3d(0px, 0px, 0px)';   
        studio.classList.add('active');    
    });

/**************  Menu ******************/    
const aboutBtn = document.querySelector('.aboutBtn'),
    portfolioBtn = document.querySelector('.portfolioBtn'),
    contactBtn = document.querySelector('.contactBtn'),
    portfolioSection = document.querySelector('.portfolio'),
    contactSection = document.querySelector('.contact'),
    formBtn = document.querySelector('.form-btn');

    aboutBtn.addEventListener('click', function(e){
        e.preventDefault();
        header.classList.add('pp-easing');
        header.classList.remove('active');
        header.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.style.transform = 'translate3d(0px, 0px, 0px)';   
        studio.classList.add('active');    
    });
    portfolioBtn.addEventListener('click', function(e){
        e.preventDefault();
        header.classList.add('pp-easing');
        header.classList.remove('active');
        header.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.classList.remove('active');
        portfolioSection.style.transform = 'translate3d(0px, 0px, 0px)';   
        portfolioSection.classList.add('active');    
    });

    contactBtn.addEventListener('click', function(e){
        e.preventDefault();
        header.classList.add('pp-easing');
        header.classList.remove('active');
        header.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.classList.remove('active');
        portfolioSection.style.transform = 'translate3d(0px, -100%, 0px)';   
        portfolioSection.classList.remove('active');
        contactSection.style.transform = 'translate3d(0px, 0px, 0px)';   
        contactSection.classList.add('active');      
    });

    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        studio.style.transform = 'translate3d(0px, -100%, 0px)';
        studio.classList.remove('active');
        portfolioSection.style.transform = 'translate3d(0px, -100%, 0px)';   
        portfolioSection.classList.remove('active');
        contactSection.style.transform = 'translate3d(0px, 0px, 0px)';   
        contactSection.classList.add('active'); 

    })