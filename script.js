const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears ='31 dec 2020';

function countDown(){
    const newYearsDate = new Date(newYears);
    const date = new Date();

    const totalSeconds = (newYearsDate - date) /1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}


countDown();

setInterval(countDown,1000);