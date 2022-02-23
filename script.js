//animação scroll
window.sr =  ScrollReveal({reset : true})

sr.reveal(".aparecer", {
    rotate : {x:100 , y:100 , z: 0},
    duration: 1500
})

sr.reveal(".rotate", {
    rotate : {x:0 , y:80, z:0},
    duration : 2000
})

//logica da ceta para cima
const ceta = document.getElementById("ceta")

window.onscroll = function () {
    subir(ceta)
}


function subir (variavel){
    if(document.documentElement.scrollTop > 250){
        variavel.style.display = "block"
    } 
    else{
        variavel.style.display = "none"
    }

}

ceta.addEventListener("click", function () {
    document.documentElement.scrollTop = 0
})


//logica do menu bars

const bars = document.querySelector(".bars")

bars.addEventListener("click" ,function () {
    document.querySelector(".primeiro").classList.toggle("secundario")
    document.querySelector(".bars").classList.toggle("bars2")


})