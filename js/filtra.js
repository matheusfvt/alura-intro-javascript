var campoFiltro = document.querySelector("#filtra-paciente");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    console.log("digitou algo!");

    if (campoFiltro.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(campoFiltro.value, "i");

            // FAZER SEM REGEX
            // var comparavel = nome.substr(0, this.value.length);
            // var comparavelMinusculo = comparavel.toLowerCase();
            // var valorDigitadoMinusculo = this.value.toLowerCase();

            // if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
            //     paciente.classList.add("invisivel");
            // } else {
            //     paciente.classList.remove("invisivel");
            // }

            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
