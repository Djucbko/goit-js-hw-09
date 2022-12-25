const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', changeBackgroundColorStart);
btnStop.addEventListener('click', changeBackgroundColorStop);

btnStop.setAttribute('disabled', true);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


let timerId = null;

function changeBackgroundColorStart() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
};

function changeBackgroundColorStop() {
    clearInterval(timerId);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
};
