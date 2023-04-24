
//checkbox limitadogit a
let contador = [0, 0, 0]; 
let maxi = 3;
function validar(check, grupo) {
   if (check.checked==true){
       contador[grupo]++;
       if (contador[grupo]>maxi) {
          check.checked=false; 
          contador[grupo]--;
       }
   } else {    
       contador[grupo]--;
   }
}

//sumar 1kg
let cantidad1kg = document.getElementById("cantidad1kg");
let totalprecio = document.getElementById("kiloprecio");

cantidad1kg.addEventListener("input",function(){
  let numero = cantidad1kg.value;
  let calculo = numero * 2400;
  totalprecio.textContent = calculo;
});

//1/2kg
let cantidadmedio = document.getElementById("cantidadmedio");
let medioprecio = document.getElementById("medioprecio");
cantidadmedio.addEventListener("input",function(){
  let numero = cantidadmedio.value;
  let calculo = numero * 1500;
  medioprecio.textContent = calculo;
});

//cuarto

let cantidadcuarto = document.getElementById("cantidadcuarto");
let cuartoprecio = document.getElementById("cuartoprecio");
cantidadcuarto.addEventListener("input",function(){
  let numero = cantidadcuarto.value;
  let calculo = numero * 1050;
  cuartoprecio.textContent = calculo;
});

//total torta
let containertorta = document.getElementById('containertorta');
let seleccion = containertorta.querySelectorAll('input[type="checkbox"]');
let totaltorta = document.getElementById('totaltorta');
let suma = 0;
containertorta.addEventListener('change', function() {
  suma = 0;
  seleccion.forEach(function(checkbox) {
    if (checkbox.checked) {
      suma = suma + parseInt(checkbox.value);
    }
  });
  totaltorta.textContent = suma;
});

//listo
function enviar(event){
    event.preventDefault();
    let mensaje = document.getElementById("mensaje")
    mensaje.innerHTML= "Su pedido fue enviado!"
  }

  
  //validacion de campos
function validarCampos() {
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
}

validarCampos()