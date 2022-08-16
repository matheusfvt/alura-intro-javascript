var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (el) {
    el.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        el.target.parentNode.remove();
    }, 500);
});
