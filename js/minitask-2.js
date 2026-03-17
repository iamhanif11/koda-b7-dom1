const redLight = document.getElementById("red-light");
const yellowLight = document.getElementById("yellow-light");
const greenLight = document.getElementById("green-light");

function delay(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function trafficLight() {

        redLight.style.backgroundColor = 'red';

        await delay(3000);
        redLight.style.backgroundColor = 'rgb(63, 63, 63)';
        yellowLight.style.backgroundColor = 'yellow';

        await delay(2000);
        yellowLight.style.backgroundColor = 'rgb(63, 63, 63)';
        greenLight.style.backgroundColor = 'green';

        await delay(3000);
        greenLight.style.backgroundColor = 'rgb(63, 63, 63)';
        redLight.style.backgroundColor = 'red';

}

trafficLight();