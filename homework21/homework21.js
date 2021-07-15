const boxs = document.querySelector('.boxs');

boxs.addEventListener('click', allClicks);

function allClicks(event) {
    event.target.addEventListener("click", action[event.target.dataset.action]);
    console.log(event.target)
}

function creatLocalStorage() {
    boxList = boxs.querySelectorAll(".box");
    for(someBox of boxList) {
        if(!localStorage.getItem(someBox.dataset.id)){
            localStorage.setItem(someBox.dataset.id, 0);
            someBox.querySelector('.counter').innerText = 0;
        } else {
            someBox.querySelector('.counter').innerText = localStorage.getItem(someBox.dataset.id);
        }
    }

    
}

function setCounter(id, value) {
    localStorage.setItem(id, value);
}

function clickCounters(event) {
    boxParent = this.closest('.box');
    id = boxParent.dataset.id;
    counter = boxParent.querySelector('.counter');
    lastValue = parseInt(localStorage.getItem(id));
    value = lastValue + 1;
    setCounter(id, value);
    counter.innerText = value;
}

function clearCounters(event) {
    boxParent = this.closest('.box');
    id = boxParent.dataset.id;
    counter = boxParent.querySelector('.counter');
    setCounter(id, 0);
    counter.innerText = 0;
}

function setCounter(event) {
    id = prompt('введите id блока');
    value = prompt('значение counter');
    console.log(this.closest('.boxs').querySelector('.box[data-id=' + id + ']'))
}

action = {
    click: clickCounters,
    clear: clearCounters,
    set: setCounter
}

creatLocalStorage();
