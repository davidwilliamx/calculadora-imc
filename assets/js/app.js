let peso = document.querySelector("#inputPeso");
let altura = document.querySelector("#inputAltura");
const botaoCalcular = document.querySelector("#botaoCalcular");
const botaoResetar = document.querySelector("#botaoReset");
let imc = document.getElementById("imc");

function calcularIMC(peso, altura) {
    let valorPeso = Number(peso.value);
    let valorAltura = Number(altura.value);
    const isNumberUndefined = valorPeso === undefined || valorAltura === undefined;
    const isNotNumber = isNaN(valorPeso) || isNaN(valorAltura);
    const isNumberZero = valorPeso < 0 || valorAltura < 0;
    const isNumberMax = valorPeso >= 300 || valorAltura >= 3.0;

    if (isNumberUndefined) {
        return "Vazio - Não foram informados valores como parametros";
    } else if (isNotNumber) {
        return "Não é um número - Números devem ser informados como parametros";
    } else if (isNumberZero) {
        return "Valor Negativo - Números negativos não são válidos";
    } else if (isNumberMax) {
        return "Valor máximo atingido - Números informados estão fora do limite";
    } else {
        return Number((valorPeso / valorAltura ** 2).toFixed(2));
    }
}

function resetar() {
    peso.value = "";
    altura.value = "";
}

botaoResetar.addEventListener("click", () => {
    resetar();
});

botaoCalcular.addEventListener("click", () => {

    imc.innerHTML = ((valorPeso / valorAltura ** 2) * 10000).toFixed(1);
    textoPadrao.classList.add('d-none');
    alertaAtencao.classList.remove('d-none');
});