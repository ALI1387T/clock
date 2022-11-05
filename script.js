const hours = document.querySelector(".hours")
const minute = document.querySelector(".minute")
const secend = document.querySelector(".secend")
const digitalClock = document.querySelector(".digitalClock")
const darkModeButton = document.querySelector("#darkMode")
let darkMode = false

setInterval(() => {
    let time = new Date()
    time.getSeconds() == 0 ? secend.style.transition = "transform 0s linear" : false
    time.getMinutes() == 0 ? minute.style.transition = "transform 0s linear" : false
    secend.style.transform = `rotate(${360 / 60 * time.getSeconds()}deg)`
    minute.style.transform = `rotate(${360 / 60 / 60 * (time.getMinutes() * 60 + time.getSeconds())}deg)`
    hours.style.transform = `rotate(${360 / 12 * time.getHours()}deg)`
    digitalClock.innerHTML = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}`
    time.getSeconds() == 1 ? secend.style.transition = "transform 1s linear" : false
    time.getMinutes() == 1 ? minute.style.transition = "transform 1s linear" : false
}, 1000);

darkModeButton.addEventListener("click", () => {
    if (darkMode) {
        darkModeButton.className = "fa-solid fa-moon"
        darkModeButton.innerHTML = ""
        darkModeButton.style.backgroundColor = "black"
        document.querySelector("body").style.backgroundColor = "white"
        document.querySelector(".clock").style.border = "5px solid black"
        document.querySelector(".centerPoint").style.backgroundColor = "black"
        document.querySelector(".hours").style.backgroundColor = "black"
        document.querySelector(".minute").style.backgroundColor = "black"
        document.querySelector(".digitalClock").style.color = "black"
        Array.from(document.querySelectorAll(".dash")).forEach(element => {
            element.style.backgroundColor = "black"
        });
    } else {
        darkModeButton.className = ""
        darkModeButton.innerHTML = '<img src="images/sun.svg">'
        darkModeButton.style.backgroundColor = "white"
        document.querySelector("body").style.backgroundColor = "#121212"
        document.querySelector(".clock").style.border = "5px solid white"
        document.querySelector(".centerPoint").style.backgroundColor = "white"
        document.querySelector(".hours").style.backgroundColor = "white"
        document.querySelector(".minute").style.backgroundColor = "white"
        document.querySelector(".digitalClock").style.color = "white"
        Array.from(document.querySelectorAll(".dash")).forEach(element => {
            element.style.backgroundColor = "white"
        });
    }
    darkMode = !darkMode
})