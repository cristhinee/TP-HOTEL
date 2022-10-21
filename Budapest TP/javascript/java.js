 // La siguiente funcion valida el elemento input
 function validarUserName() {

    // El input que queremos validar
    const input = document.getElementById('userName');
    //El div con el mensaje de advertencia:
    const message = document.getElementById('messageUserName');
    input.willValidate = false;
    // El tamaño maximo para nuestro input
    const maximo = 11;
    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    return validar(input, message,pattern, maximo);
  }

  function validarUserLastName() {

    // El input que queremos validar
    const input = document.getElementById('userLastName');
    //El div con el mensaje de advertencia:
    const message = document.getElementById('messageUserLastName');
    input.willValidate = false;
    // El tamaño maximo para nuestro input
    const maximo = 11;
    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    return validar(input, message,pattern, maximo);
  }

  function validaruserEmail() {

    // El input que queremos validar
    const input = document.getElementById('userEmail');
    //El div con el mensaje de advertencia:
    const message = document.getElementById('messageuserEmail');
    input.willValidate = false;
    // El tamaño maximo para nuestro input
    const maximo = 35;
    // El pattern que vamos a comprobar
    const pattern = new RegExp("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"); 

    return validar(input, message,pattern, maximo);
  }

  function validarUserCountry() {

    // El input que queremos validar
    const input = document.getElementById('userCountry');
    //El div con el mensaje de advertencia:
    const message = document.getElementById('messageUserCountry');
    input.willValidate = false;
    // El tamaño maximo para nuestro input
    const maximo = 15;
    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    return validar(input, message,pattern, maximo);
  }

  function validarUserCity() {

    // El input que queremos validar
    const input = document.getElementById('userCity');
    //El div con el mensaje de advertencia:
    const message = document.getElementById('messageUserCity');
    input.willValidate = false;
    // El tamaño maximo para nuestro input
    const maximo = 20 ;
    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    return validar(input, message,pattern, maximo);
  }

  function validarUserAddress() {

    // El input que queremos validar
    const input = document.getElementById('userAddress');
    //El div con el mensaje de advertencia:
    const message = document.getElementById('messageUserAddress');
    input.willValidate = false;
    // El tamaño maximo para nuestro input
    const maximo = 50;
    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    return validar(input, message,pattern, maximo);
  }



  
  function validar(input, message, pattern, maximo) {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    // Primera validacion, si input esta vacio entonces no es valido
    if(!input.value) {
      isValid = false;
    } else {
      // Segunda validacion, si input es mayor que 35
      if(input.value.length > maximo) {
        isValid = false;
      } else {
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if(!pattern.test(input.value)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
      }
    }

    //Ahora coloreamos el borde de nuestro input
    if(!isValid) {
      // rojo: no es valido
      input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: si es valido
      input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
      // ocultamos mensaje;
      message.hidden = true;
    }

    // devolvemos el valor de isValid
    return isValid;
  }

  

