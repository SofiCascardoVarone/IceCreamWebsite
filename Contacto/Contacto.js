
const onSubmit= (formulario) => { 
    console.log( "El usuario " + formulario.target.nombre.value + " con el email " + formulario.target.email.value + " con el telefono "+ formulario.target.telefono.value + " y el asunto " + formulario.target.asunto.value +  " quiere hablar sobre el asunto " + formulario.target.mensaje.value)
    formulario.preventDefault();
  };

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

