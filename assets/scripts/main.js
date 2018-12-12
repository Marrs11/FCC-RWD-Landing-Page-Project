/*===========================================================================
SMOOTH SCROLL
* ===========================================================================*/

/*function smoothScroll(target, duration) {
    let scrollTarget = document.querySelector(target);
    let targetPosition = scrollTarget.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

let homeSection = document.querySelector('.home-section');
let featuresSection = document.querySelector('.features-section');
let techSpecsSection = document.querySelector('.techSpecs-section');
let showcaseSection = document.querySelector('.showcase-section');

homeSection.addEventListener('click',function () {
    smoothScroll('.homeSection', 3000);
});

featuresSection.addEventListener('click',function () {
    smoothScroll('.featuresSection', 3000);
});*/

/*===========================================================================
DYNAMIC YEAR IN THE FOOTER COPYRIGHT NOTICE
* ===========================================================================*/

function dynamicFooterYear(){
    let d = new Date().getFullYear();
    document.getElementById('copyright-year').innerHTML = d;
}

dynamicFooterYear();

/*===========================================================================

* ===========================================================================*/