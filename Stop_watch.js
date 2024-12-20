let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapList.innerHTML = '';
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    millisecondsDisplay.textContent = String(milliseconds / 10).padStart(2, '0');
}

function recordLap() {
    const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds / 10).padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
document.getElementById('lap-btn').addEventListener('click', recordLap);
