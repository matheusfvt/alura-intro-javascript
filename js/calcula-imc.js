var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    pacientes = document.querySelectorAll(".paciente");
    var nome = pacientes[i].querySelector(".info-nome").textContent;
    var peso = parseFloat(pacientes[i].querySelector(".info-peso").textContent);
    var altura = parseFloat(pacientes[i].querySelector(".info-altura").textContent);
    var imc = pacientes[i].querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (pesoEhValido && alturaEhValida) {
        imc.textContent = calculaImc(peso, altura);
    } else {
        pacientes[i].style.backgroundColor = "lightcoral";
    }
    pesoValido = true;
    alturaValida = true;
}

function validaPeso(peso) {
    if (peso > 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = (peso / (altura * altura)).toFixed(2);

    return imc;
}
