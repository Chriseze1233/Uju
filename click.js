const frBtn = document.querySelector('#frward');
const bktn = document.querySelector('#bkward');
const body = document.querySelector('.h-hero');
let count = 0;
let intervalID;


function changeBk(){
    body.style.backgroundImage = `linear-gradient(var(--color-gradient-two), var(--color-gradient-two)), url(${srcs[count]})`;
}


function addCount() {
    if(intervalID){clearInterval(intervalID)}
    intervalID =  setInterval(() => {
        count++
        if(count > srcs.length -1) {
            count = 0;
        }
        changeBk()
    }, 6000)
}

addCount()

bktn.addEventListener('click', () => {
    count--;
 if(count < 0) {
    count = srcs.length -1;
 }
 changeBk();
 addCount()
})

frBtn.addEventListener('click', () => {
    count++;
    if(count > srcs.length -1) {
        count = 0;
    }
    changeBk();
    addCount()
})

window.onload = changeBk();
