const startBtn = document.querySelector('.start-btn'),
stopBtn = document.querySelector('.stop-btn'),
resetBtn = document.querySelector('.reset-btn'),
secondsText = document.querySelector('.seconds'),
tensText = document.querySelector('.tens');

let seconds = 00, tens = 00;


function startTimer() {
  tens++;
  if (tens <= 9) {
    tensText.textContent = '0' + tens;
  } else {
    tensText.textContent = tens;
  }
  
  if (tens >= 99) {
    seconds++;
    if (seconds <= 9) {
      secondsText.textContent = '0' + seconds;
    } else {
      secondsText.textContent = seconds;
    }
    tens = 0;
  }
  
}



function stopTimer() {
  clearInterval(myInterval);
}

startBtn.addEventListener('click', () => {
  myInterval = setInterval(startTimer, 10)
});
stopBtn.addEventListener('click', () => stopTimer())
resetBtn.addEventListener('click', () => {
  clearInterval(myInterval);
  tens = '00';
  seconds = '00';
  tensText.textContent = tens;
  secondsText.textContent = seconds;
})
