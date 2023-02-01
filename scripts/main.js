let countEl = document.getElementById("count-el");
let previousEl = document.getElementById("previous-entry");
let count = 0;

function increment() {
    count++;
    countEl.innerHTML = count;
}

function save() {
    let saveStr = count + " - ";
    previousEl.innerHTML += saveStr;
    count = 0;
    countEl.innerHTML = count;
}
