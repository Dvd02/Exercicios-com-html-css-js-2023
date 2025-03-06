
document.getElementById("gira").addEventListener("click",function(){
    console.log(document.getElementById("gira").innerHTML)
    if ( document.getElementById("gira").innerHTML == "-") {
        document.querySelectorAll(".barra-de-navegacao li").forEach((elemento)=>{
            elemento.style.display = "block"
        })
        document.getElementById("gira").innerHTML = "|"
    } else {
        document.querySelectorAll(".barra-de-navegacao li").forEach((elemento)=>{
            elemento.style.display = "inline-block"
            document.getElementById("gira").innerHTML = "-"
        })
    }
})


document.getElementById("barra-de-navegacao").addEventListener("click",function(){
    document.querySelectorAll(".selecionado").forEach((elemento)=>{
        elemento.classList.remove("selecionado")
    })
})

document.querySelectorAll(".dropdown").forEach((elemento)=>{
    elemento.addEventListener("click",function(){
        setTimeout(()=>{
            elemento.classList.add("selecionado")
        },10)
    })
})