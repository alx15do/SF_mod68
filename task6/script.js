const el1 = document.querySelector('.trafficLight1');
const el2 = document.querySelector('.trafficLight2');
const el3 = document.querySelector('.trafficLight3');

function makeGreen() {
    el1.style.background = ('green');
    el2.style.background = ('black');
    el3.style.background = ('black');

    el1.removeEventListener('click', makeGreen);
    el2.removeEventListener('click', makeGreen);
    el3.removeEventListener('click', makeGreen);
    el1.removeEventListener('click', makeRed);
    el2.removeEventListener('click', makeRed);
    el3.removeEventListener('click', makeRed);

    el1.addEventListener('click', makeYellow);
    el2.addEventListener('click', makeYellow);
    el3.addEventListener('click', makeYellow);
}

el1.addEventListener('click', makeGreen);


function makeYellow() {
    el2.style.background = ('yellow');
    el1.style.background = ('black');
    el3.style.background = ('black');

    el1.removeEventListener('click', makeYellow);
    el2.removeEventListener('click', makeYellow);
    el3.removeEventListener('click', makeYellow);

    el1.removeEventListener('click', makeGreen);
    el2.removeEventListener('click', makeGreen);
    el3.removeEventListener('click', makeGreen);

    el1.addEventListener('click', makeRed);
    el2.addEventListener('click', makeRed);
    el3.addEventListener('click', makeRed);
}

el2.addEventListener('click', makeGreen);


function makeRed() {
    el3.style.background = ('red');
    el1.style.background = ('black');
    el2.style.background = ('black');

    el1.removeEventListener('click', makeRed);
    el2.removeEventListener('click', makeRed);
    el3.removeEventListener('click', makeRed);

    el1.removeEventListener('click', makeYellow);
    el2.removeEventListener('click', makeYellow);
    el3.removeEventListener('click', makeYellow);

    el1.addEventListener('click', makeGreen);  
    el2.addEventListener('click', makeGreen);  
    el3.addEventListener('click', makeGreen);  
  
}

el3.addEventListener('click', makeGreen);

