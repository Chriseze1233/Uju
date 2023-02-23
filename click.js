const frBtn = document.querySelector('#frward');
const bktn = document.querySelector('#bkward');
const body = document.querySelector('.h-hero');
let count = 0;


function changeBk(){
    body.style.backgroundImage = `linear-gradient(var(--color-gradient-two), var(--color-gradient-two)), url(${srcs[count]})`;
}


bktn.addEventListener('click', () => {
    count--;

 if(count < 0) {
    count = srcs.length -1;
 }
 changeBk();

})

frBtn.addEventListener('click', () => {
    count++;
    if(count > srcs.length -1) {
        count = 0;
    }
    changeBk();
})
window.onload = changeBk();
