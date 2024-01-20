let randomNumber1 = Math.floor(Math.random() * 6) + 1

let p1 = document.querySelector(".img1")
p1.setAttribute("src",`./dice${randomNumber1}.png`)

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let p2 = document.querySelector(".img2")
p2.setAttribute("src",`./dice${randomNumber2}.png`)

let title = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    title.innerHTML = "Player 1 Wins!"
} else if(randomNumber1 < randomNumber2){
    title.textContent = "Player 2 Wins!"
}else{
    title.textContent = "It's A Draw!"
}

let button = document.querySelector(".btn")

button.addEventListener('click', () =>{
    location.reload();
})
