const main = document.querySelector(".main");
const range = main.querySelector('form').querySelector('.range');
const number = main.querySelector('form').querySelector('.number');

function changeRange(val) {
    range.value = val;
}

function changeNumber(val) {
    number.value = val;
}

function changePillarRed(main_value) {
    if(main_value < 20) {
        return main_value * 0.02;
    } else if (20 <= main_value < 50) {
        return main_value * 0.04
    } else if (50 <= main_value < 75) {
        return main_value * 0.05
    } else if (75 <= main_value <= 100) {
        return main_value * 0.06
    }
}

function changePillar(val) {
    const pillar = document.querySelector('.pillar');
    pillar.querySelector('.green').style.height = `${val}%`
    pillar.querySelector('.red').style.height = `${changePillarRed(val)}%`
}


range.addEventListener("mouseup", rangeEvent);
number.addEventListener("mouseup", numberEvent);

function rangeEvent(event) {
    let main_value = range.value;
    changeNumber(main_value);
    changePillar(main_value);
}

function numberEvent(event) {
    let main_value = number.value;
    changeRange(main_value);
    changePillar(main_value);
}



