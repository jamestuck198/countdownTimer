const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countDown(){
    const newDate = document.getElementById('newDatePick').value;
    const newYearsDate = new Date(newDate);
    const date = new Date();

    const totalSeconds = (newYearsDate - date) /1000;// convert seconds to milliseconds
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

function start(){
    setInterval(countDown);
}
