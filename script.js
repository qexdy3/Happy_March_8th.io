const titleLove = document.querySelector(".title-love");
const titleLoveOutside = document.querySelector(".title-love-outside")
const victorinaLoveOutside = document.querySelector(".victorina-love-outside")
offsetButtonLove = true;

window.addEventListener('click', function(event) {
    if (event.target.id == "button-title" || event.target.id == "button-title2") {
        titleLove.style.left = "200px";
        titleLove.style.opacity = '0';
        setTimeout(() => {
            titleLoveOutside.style.height = '0vh'
            victorinaLoveOutside.style.height = "100vh";
            titleLove.style.zIndex = '-999';
            setTimeout(() => {
                victorinaLoveOutside.innerHTML = ` 
                <div class="victorina-love">
                <div class="img-cat">
                </div>
                <div class="victorina-love-inner">
                    <h1 style="font-size: 26px;margin-bottom: 20px;" id="text-victorina">| Понравилась открытка?</h1>
                    <div class="buttons-love">
                        <div id="radios">
                            <label for="input1"></label>
                            <input  id="input1" name="radio" type="radio" />
                            <label for="input2"></label>
                            <input  id="input2" name="radio" type="radio" />
                            <span id="slider"></span>
                        </div>
                        <div class="button-love">
                            <div class="button-love-slide">
                                <h1 id="button-love-yes">Конечно</h1>
                                <h1 id="button-love-no">Нет</h1>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>`
                const victorinaLove = document.querySelector(".victorina-love");
                titleLove.style.left = "0px";
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




