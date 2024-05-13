let time = 2000,
    quantimg = 0
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImame(){

    images[quantimg].classList.remove("selected")
    quantimg++
    if (quantimg >= max) {
        quantimg = 0
    }
    images[quantimg].classList.add("selected")
}

function Inicar(){
    setInterval(() => {
        nextImame()
    }, time)
}

window.addEventListener("load", Inicar)