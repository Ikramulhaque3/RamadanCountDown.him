const sound = new Audio('audio1.mp3');
    sound.play();

const endDate = document.getElementById('end-date').innerHTML;

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");



const clock = () => {
    

    const endingDate = new Date(endDate);
    const nowDate = new Date();

    const diff = (endingDate - nowDate) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

   
}



setInterval(() => {
    clock();
}, 1000);