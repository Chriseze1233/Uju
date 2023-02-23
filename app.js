let srcs=  [
    './images/pic1.jpg',
    './images/pic2.jpg',
    './images/pic3.jpg',
    './images/img.jpg',
    './images/img2.jpg',
    './images/img3.jpg',
    './images/img4.jpg',
    './images/img5.jpg',
    './images/img6.jpg',
];


const btn_faqs = document.querySelectorAll('.open-btn');
const ans = document.querySelectorAll('.ans');
const vidPlay = document.querySelectorAll('.vid-play');
const vid = document.querySelectorAll('.vid');
const navBar = document.querySelector('.navBar');
const nav = document.querySelector('.nav');
const preLoader = document.querySelector('.preloadler');
const header = document.querySelector('.header');

btn_faqs.forEach((btn_faq, index) => {
    btn_faq.addEventListener('click', () => {
        // ans[index].style.
        let ansHP = ans[index].querySelector('.ans-p').getBoundingClientRect().height;
        let ansH = ans[index].getBoundingClientRect().height;
        if(ansH === 0) {
            ans[index].style.height = `${ansHP}px`;
            ansH == `${ansHP}px`; 
        }
        else {
            ans[index].style.height = 0;
            ansH = 0;
        }
        console.log(ansH)
    })
})

vidPlay.forEach((play, index) => {
    play.addEventListener('click',() => {
        let vidCont = document.querySelectorAll('.vid-play');
        if(vid[index].play() == true) {
            play.classList.add('active');
            vid[index].play() == false;
            vidCont[index].innerHTML = `<i class="fas fa-play id="play"></i>`;
        }
        else {
            play.classList.remove('active');
            vid[index].play() == true;
            vidCont[index].innerHTML = `<i class="fas fa-pause" id="pause"></i>`;
        }
    })
})


navBar.addEventListener('click', () =>{
    nav.classList.toggle('active');
})

window.addEventListener('load', () => {
    preLoader.classList.add('hide');
})

window.addEventListener('scroll', () => {
    let scrolY = window.scrollY;
    if(scrolY > 100) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
})