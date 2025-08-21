const formulario = document.querySelector(".formulario");
const campos = document.querySelectorAll(".input_formulario");
const span = document.querySelectorAll(".span_formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let validarFormulario = true;

  campos.forEach((campo, index) => {
    if (campo.value.trim() === "") {
      campo.classList.add("erro");
      span[index].classList.add("erro");
    } else {
      campo.classList.remove("erro");
      span[index].classList.remove("erro");
    }
  });

  if (validarFormulario) {
    formulario.classList.add("certo");
  } else {
    formulario.classList.remove("certo");
  }
});
