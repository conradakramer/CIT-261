
window.addEventListener('keydown',onKeyPress);
window.addEventListener('keyup',onKeyUp);
//const elements = document.querySelectorAll("keys");
console.log(keys);


function onKeyPress(e){
   const num = e.keyCode
   //console.log(num);
   const key = document.querySelectorAll(`[data-key ='${num}']`);
   console.log(key);
   key[1].currentTime = 0;
   key[1].play();
   key[0].style.transform = 'translateY(10px)';
   key[0].classList.add("playing");
};

function onKeyUp(e){
    const num = e.keyCode
    const key = document.querySelectorAll(`[data-key ='${num}']`);
    key[0].style.transform = 'translateY(-10px)';
    key[0].classList.remove("playing");
};