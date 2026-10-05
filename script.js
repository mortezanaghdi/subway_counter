// document.getElementById("counter_id").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 27
// let humanDogRation = 7;
// let myDogAge = myAge * humanDogRation
// console.log(myDogAge)

let count = 0
let saveEl = document.getElementById("save-el")
let counter = document.getElementById("counter_id")

function increment() {
    count = count + 1
    counter.textContent = count
    return count
}

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    console.log(count)
    count = 0
    counter.textContent = 0
}
