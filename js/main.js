const hourText = document.querySelector('.hour');
const minText = document.querySelector('.minute');
const secText = document.querySelector('.second');
const tenText = document.querySelector('.ten');
const timerBtn = document.querySelector('.start-timer i');
const watch = document.querySelector('.watch');
const resetBtn = document.querySelector('.reset');
const time = document.querySelector('.time');

let hour = 0;
let min = 0;
let sec = 0;
let ten = 0;
let myInterval;

setInterval(() => {
  if (min < 1) {
    minText.style.display = 'none';
  }

  if (hour < 1) {
    hourText.style.display = 'none';
  }
  
  if (min > 0) {
    secText.textContent = (sec < 10)? `0${sec}`:sec;
  }
}, 10)


const startTimer = () => {
  if (timerBtn.classList.contains('start')) {
    timerBtn.className = 'fa-solid fa-pause';
    myInterval = setInterval(() => {
      ten++;
      tenText.textContent = ten;

      if (min < 1) {
        minText.style.display = 'none';
      }

      if (hour < 1) {
        hourText.style.display = 'none';
      }

      if (ten == 60) {
        sec++;
        secText.textContent = sec;
        ten = 0;
      }

      if (sec == 60) {
        sec = 0;
        min++;
        minText.style.display = 'inline-block';
        minText.textContent = min + ' :';
        secText.textContent = (sec < 10)? `0${sec}`:sec;
      }
      
      if (min == 60) {
        min = 0;
        hour++;
        hourText.style.display = 'inline-block';
        hourText.textContent = hour + ' :';
      }


    }, 10)
  } else if (timerBtn.classList.contains('end')) {
    timerBtn.className = 'fa-solid fa-play start';
    time.classList.remove('fade');
    startTimer();
  } else {
    time.classList.add('fade');
    clearInterval(myInterval);
    timerBtn.className = 'fa-solid fa-play end';
  }
}

watch.addEventListener('click', startTimer);
timerBtn.addEventListener('click', startTimer);

resetBtn.addEventListener('click', () => {
  hour = 0;
  min = 0;
  sec = 0;
  ten = 0;
  minText.textContent = min;
  secText.textContent = sec;
  tenText.textContent = ten;
  hourText.textContent = hour;
  clearInterval(myInterval);
  if (timerBtn.classList.contains('fa-pause')) {
    timerBtn.className = 'fa-solid fa-play start';
  }
})
