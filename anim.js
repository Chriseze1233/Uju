function animationScroll(index) {
    windowHeight = window.innerHeight / 1.3;
    windowHeight2 = window.innerHeight / 10;
    const scale = document.querySelectorAll('.scale');
    const animHor = document.querySelectorAll('.anim-hor');
    const animHor2 = document.querySelectorAll('.anim-hor-2');
    const animVar = document.querySelectorAll('.anim-var');
    const animVar_2 = document.querySelectorAll('.anim-var-2');

    for (i = 0; i < scale.length; i++) {
        const scaleTop = scale[i].getBoundingClientRect().top;
        const scaleBottom = scale[i].getBoundingClientRect().bottom;
        if (scaleTop > windowHeight || scaleBottom < windowHeight2) {
            scale[i].classList.remove('scale-anim');
            scale[i].classList.remove('anim-scroll')
        } else {
            scale[i].classList.add('scale-anim');
            scale[i].classList.add('anim-scroll');
        }
    }


    for (i = 0; i < animVar_2.length; i++) {
        const animVar_2Top = animVar_2[i].getBoundingClientRect().top;
        const animVar_2Bottom = animVar_2[i].getBoundingClientRect().bottom;
        if (animVar_2Top > windowHeight || animVar_2Bottom < windowHeight2) {
            animVar_2[i].classList.remove('anim-scroll')
            animVar_2[i].classList.remove('anim-var-2-trans')
        } else {
            animVar_2[i].classList.add('anim-scroll')
            animVar_2[i].classList.add('anim-var-2-trans')
        }
    }
    

    for (i = 0; i < animVar.length; i++) {
        const animVarTop = animVar[i].getBoundingClientRect().top;
        const animVarBottom = animVar[i].getBoundingClientRect().bottom;
        if (animVarTop > windowHeight || animVarBottom < windowHeight2) {
            animVar[i].classList.remove('anim-scroll')
            animVar[i].classList.remove('anim-var-trans')
        } else {
            animVar[i].classList.add('anim-scroll')
            animVar[i].classList.add('anim-var-trans')
        }
    }
    

    for (i = 0; i < animHor.length; i++) {
        const animHorTop = animHor[i].getBoundingClientRect().top;
        const animHorBottom = animHor[i].getBoundingClientRect().bottom;
        if (animHorTop > windowHeight || animHorBottom < windowHeight2) {
            animHor[i].classList.remove('anim-scroll')
            animHor[i].classList.remove('anim-hor-trans')
        } else {
            animHor[i].classList.add('anim-scroll')
            animHor[i].classList.add('anim-hor-trans')
        }
    }

    for (i = 0; i < animHor2.length; i++) {
        const animHor2Top = animHor2[i].getBoundingClientRect().top;
        const animHor2Bottom = animHor2[i].getBoundingClientRect().bottom;
        if (animHor2Top > windowHeight || animHor2Bottom < windowHeight2) {
            animHor2[i].classList.remove('anim-scroll')
            animHor2[i].classList.remove('anim-hor-2-trans')
        } else {
            animHor2[i].classList.add('anim-scroll')
            animHor2[i].classList.add('anim-hor-2-trans')
        }
    }
}

animationScroll()

window.onscroll = animationScroll