const boxs = document.querySelector('.boxs');

boxs.addEventListener('click', allClicks);

function allClicks(event) {
    action[event.target.dataset.action](event);
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

function FindByAttributeValue(attribute, value, element_type)    {
    element_type = element_type || "*";
    let all = document.getElementsByTagName(element_type);
    for (let i = 0; i < all.length; i++)       {
      if (all[i].getAttribute(attribute) == value) { return all[i]; }
    }
  }

function setCounterSt(id, value) {
    localStorage.setItem(id, value);
}

function clickCounters(event) {
    boxParent = event.target.closest('.box');
    id = boxParent.dataset.id;
    counter = boxParent.querySelector('.counter');
    lastValue = parseInt(localStorage.getItem(id));
    value = lastValue + 1;
    setCounterSt(id, value);
    counter.innerText = value;
}

function clearCounters(event) {
    boxParent = event.target.closest('.box');
    id = boxParent.dataset.id;
    counter = boxParent.querySelector('.counter');
    setCounterSt(id, 0);
    counter.innerText = 0;
}

function setCounter(event) {
    id = prompt('введите id блока');
    value = prompt('значение counter');
    setCounterSt(id, value);
    FindByAttributeValue('data-id', id, 'div').querySelector('.counter').innerText = value;
}

action = {
    click: clickCounters,
    clear: clearCounters,
    set: setCounter
}

creatLocalStorage();
