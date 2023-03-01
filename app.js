function updateTime() {
    const thisMoment = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const currentTime = thisMoment.toLocaleDateString('da-DK', options);
    document.getElementById('current-time').innerText = currentTime;
}

setInterval(updateTime, 1000);