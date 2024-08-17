
let peso = document.querySelector("#inputPeso");
let altura = document.querySelector("#inputAltura");
const button = document.querySelector("#botao");
let imc = document.getElementById("imc");
const textoPadrao = document.querySelector(".texto-padrao");
const alertaPadrao = document.querySelector(".alerta-padrao");
const alertaInfo = document.querySelector(".alerta-info");
const alertaSucesso = document.querySelector(".alerta-sucesso");
const alertaAtencao = document.querySelector(".alerta-atencao");
const alertaUrgente = document.querySelector(".alerta-urgente");

peso.value = "";
altura.value = "";

button.addEventListener("click", fractionDigits => {
    let valorPeso = Number(peso.value);
    let valorAltura = Number(altura.value);
    console.log('Valor de peso alterado - ' + valorPeso);
    console.log('Valor de altura alterado - ' + valorAltura);

    //console.log(((valorPeso / valorAltura ** 2)*10000).toFixed(1));

    imc.innerHTML = ((valorPeso / valorAltura ** 2)*10000).toFixed(1);
    textoPadrao.classList.add('d-none');
    alertaAtencao.classList.remove('d-none');
});