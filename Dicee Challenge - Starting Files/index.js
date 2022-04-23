var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
// console.log(randomNumber1)

var randomImage1 = document.querySelectorAll("img")[0].setAttribute("src","/images/dice" + randomNumber1 + ".png")




var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;



var randomImage2 = document.querySelectorAll("img")[1].setAttribute("src","/images/dice" + randomNumber2 + ".png")

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS!"
    document.querySelector("h1").classList.add("changedFont")
    
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!"
    document.querySelector("h1").classList.add("changedFont")
} else {
    document.querySelector("h1").innerHTML = "DRAW!"
}