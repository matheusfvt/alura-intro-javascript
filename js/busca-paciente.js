var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
  console.log("buscando pacientes..");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pa1cientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector('#erro-ajax');
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel');
      var resposta = xhr.responseText;
      console.log(resposta);
      console.log(typeof resposta);

      var pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove('invisivel');
    }
  });

  xhr.send();
});
