const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const fale = document.querySelector(".fale-conosco")
const servicos = document.querySelector(".servicos")
const primeiro = document.querySelector ("p1")

function mostrarForm(){
    form.style.left= "50%"
    form.style.transform= "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left= "-300px"
    form.style.transform= "translateX(0)"
    mascara.style.visibility = "hidden"
}

function faleConosco(){
    form.style.left= "50%"
    form.style.transform= "translateX(-50%)"
    mascara.style.visibility = "visible"
}

