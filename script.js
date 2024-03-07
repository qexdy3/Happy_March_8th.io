const titleLove = document.querySelector(".title-love");

offsetButtonLove = true;

window.addEventListener('click', function(event) {
    if (event.target.id == "button-title" || event.target.id == "button-title2") {
        titleLove.style.left = "200px";
        titleLove.style.opacity = '0';
        setTimeout(() => {
            titleLove.style.left = "0px";
            titleLove.style.zIndex = '-999';
            setTimeout(() => {
                const victorinaLove = document.querySelector(".victorina-love");
                victorinaLove.style.position = 'relative';  
                victorinaLove.style.opacity = "1";
                victorinaLove.style.zIndex = "1"
            }, 500);
        }, 500);
    }
    if (event.target.id == "input1") {
        const buttonLoveSlide = document.querySelector('.button-love-slide')
        const imgCat = document.querySelector(".img-cat");
        imgCat.style.backgroundImage = "url('res/2062789.512.png')";
        buttonLoveSlide.style.bottom = "0px"
        offsetButtonLove = true;
    }
    if (event.target.id == "input2") {
        const buttonLoveSlide = document.querySelector('.button-love-slide')
        
        
        buttonLoveSlide.style.bottom = "62px"
        offsetButtonLove = false;
    }

    if (event.target.id == "button-love-yes" && offsetButtonLove == true) {
        const buttonsLove = document.querySelector('.buttons-love');
        buttonsLove.style.opacity = "0";
        buttonsLove.style.top = "100px";
        const textVictorina = document.querySelector('#text-victorina');
        textVictorina.innerText = "| Увааааа, ты мой котенок)))"
        const imgCat = document.querySelector(".img-cat");
        imgCat.style.backgroundImage = "url('res/2063097.png')";   
    }
    if (event.target.id == "button-love-no" && offsetButtonLove == false) {
        const buttonsLove = document.querySelector('.buttons-love');
        buttonsLove.style.opacity = "0";
        buttonsLove.style.top = "100px";
        const textVictorina = document.querySelector('#text-victorina');
        textVictorina.innerText = "| Вредина) -_-"
        const imgCat = document.querySelector(".img-cat");
        imgCat.style.backgroundImage = "url('res/2062822.512.png')";    
    }
})




