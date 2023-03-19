let year = new Date().getFullYear();
let dDay = `April 16, ${year}`;
const time = new Date().getTime();

let btn_close = document.querySelector('.btn-close')
let mainCont = document.querySelector('.birthday')
function getDays() {

    //global Variables
    const min = 60 * 1000;
    const hr = 60 * 60 * 1000;
    const _1Day = 24 * 60 * 60 * 1000;

    //let year = new Date().getFullYear();
    let futureDate = new Date(dDay).getTime();
    let rDays = Math.floor(futureDate - time);
    console.log(rDays);
    console.log(futureDate)
    console.log(dDay)
    //let mainDay = rDays  min;
    let days = Math.floor(rDays / _1Day);
    let hrs = Math.floor((rDays % _1Day) / hr)
    let Mins = Math.floor((rDays % hr) / min);
    let sec = Math.floor((rDays % min) / 1000)
    //console.log(Mins);

    //Functions
    function addZero(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item
    }
    //DOM
    let container = document.querySelector('.bith');
    let countdown = document.getElementById('countdown');
    //countdown.innerHTML = `${addZero(days)}:${addZero(hrs)}:${addZero(Mins)}:${addZero(sec)}`;

    let daysR = document.getElementById('rday').innerHTML = `${days}Day(s)`;

    //console.log(rDays + hr)
    //console.log(_1Day)

    //Consitions
    if (rDays <= 0 && rDays > -_1Day) {
        container.innerHTML = `<h1 class="bWish">Happy Birthday to Our Amiable C.E.O. <span class="r">Rachel Malachi</span></h1>
        <p class="par">We Love You!!!</p>
        <p class="par">Would you like to Celebrate with us please contact this email <a href="mailto:richyfashionworld339@gmail.com">@ContactUs</a></p> `;
    } else if (rDays <= -_1Day) {
        let oneYear = 1000 * 60 * 60 * 24 * 365
        futureDate += oneYear

        console.log(rDays)
        console.log(dDay)
        console.log(futureDate)
        console.log(oneYear)
    } else if (rDays) {
        countdown.innerHTML =
        `<div class="box-dates">
        ${addZero(days)}
        <div class="dayT">
        Day(s)
        </div>
        </div>
        <div class="box-dates">

        ${addZero(hrs) }

        <div class="dayT">
        Hr(s)
        </div>
        </div>
        <div class="box-dates">
        ${addZero(Mins)}
        <div class="dayT">
        Min(s)
        </div>
        </div>
        <div class="box-dates">
        ${addZero(sec)}
        <div class="dayT">
        Sec(s)
        </div>
        </div>`
    }else {
        return getDays()
    }
    /* if(time > futureDate && time <= (futureDate - _1Day)) {
        container.innerHTML = "Happy BirthDay";
        console.log('hey')
    }
    else if(time > futureDate - _1Day) {
        let oneYear = 1000 * 60 * 60 * 24 * 365
        //futureDate += oneYear;
        console.log("hi")
    }
    console.log('rdays' + rDays)
    console.log("dDay" +dDay)
    console.log("futureDate"+futureDate)
    console.log("Time" + time)
    console.log("Future - day" + (futureDate - _1Day))*/
}



window.setTimeout(() => mainCont.classList.add("show"), 2000);
btn_close.addEventListener('click', () => {
    mainCont.classList.remove('show')
})
setInterval(getDays, 1000);