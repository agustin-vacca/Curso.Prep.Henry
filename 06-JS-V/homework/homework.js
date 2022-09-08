// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario{              // De esta manera se establece una clase, usando el keyboard class y dandole un nombre en Mayusc.
    constructor(opciones){    // Aca realizamos el constructor, estableciendo los argumentos que utilizara. 
      //opciones tiene la particularidad de ser un objeto, por lo tanto esta compuesto de la siguiente manera opciones = {usuario, nombre, email, password}
      this.usuario = opciones.usuario; //Por eso, asignamos los valores del constructor accediendo al objeto y sus parametros.
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
      // Tambien puede declararse el metodo saludar aca dentro.
      }
    }
  Usuario.prototype.saludar = function(){
    return `Hola, mi nombre es ${this.nombre}`; //  Con estas comillas podemos escribir todo el String de una y agregar valores ``
                                                //  ${this.etc} y de esta manera llamamos al valor asignado en nuestra variable this.etc
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function (){ //El argumento Constructor, funciona como si fuera cualq clase que entre por parametro
    return "Hello World!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'm e n e m'.reverse() => menem
  //      0 1 2 3 4 5 (length) por eso es - 1
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function (){
    var aux = '';
    for(let i = this.length - 1; i >= 0; i--){
      aux += this[i];
    }
    return aux;
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this. apellido = apellido; 
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function(){
        `Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Edad : ${this.edad}
        Domicilio: ${this.domicilio} `
      }
    }
  
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var crea = new Persona (nombre,apellido,edad,dir);
  return crea;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
    return `${this.nombre}, ${this.edad} años`
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
