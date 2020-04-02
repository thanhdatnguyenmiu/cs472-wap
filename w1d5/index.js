const createTimer = () => {
    setTime = setTimeout(displayTime, 1000);
};

const displayTime = () => {
    let time = new Date();
    document.getElementById("timer").innerHTML = time;
    createTimer();
};

window.onload = displayTime;