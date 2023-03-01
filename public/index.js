let nodeCountdownDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + (5 - new Date().getDay()), 8, 30, 0);

if (nodeCountdownDate < new Date()) {
    nodeCountdownDate.setDate(nodeCountdownDate.getDate() + 7);
};

const countdownElement = document.getElementById('countdown');
setInterval(() => {
    const timeRemaining = nodeCountdownDate.getTime() - new Date().getTime();

    if(timeRemaining < 0) {
        countdownElement.innerText = "NODE.js session started!";
        return;
    }


    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const secondsRemaining = Math.floor((timeRemaining / (1000) % 60));

    countdownElement.innerText = `${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes and ${secondsRemaining} seconds remaining until next node.js session :D`;
}, 1000);


function updateTime() {
    const thisMoment = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' 
    ,weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',};
    const currentTime = thisMoment.toLocaleDateString('da-DK', options);
    document.getElementById('current-time').innerText = currentTime;
}

setInterval(updateTime, 1000);