
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