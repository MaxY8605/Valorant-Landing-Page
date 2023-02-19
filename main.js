window.onscroll = function() {
    const EFFECT = document.querySelector("#logo");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {

        if(window.scrollY === 0) {
            EFFECT.style.opacity='1';
            EFFECT.style.transition= '0.2s ease-in';
        }

        else if(window.scrollY >= 90) {
            EFFECT.style.opacity = '0';
            EFFECT.style.transition ='0.5s ease-out';
        }
    }
    scrollEffect();
}