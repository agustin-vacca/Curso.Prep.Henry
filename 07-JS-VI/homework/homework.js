// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.substring(1); // Podemos usar el slice(1) en vez del substring, que toma un String desde el primer parametro hasta el segundo
}                                                       // En case de no asignar segundo parametro, lo toma hasta el final

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var acu = 0;
  for (let i = 0; i < numeros.length; i++){
    acu += numeros[i];
  }
  cb(acu);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (let i = 0; i < array.length; i++){
    cb(array[i]);
  }
  //Para hacerlo con forEarch es: 
  // array.forEarch(function(a){    Siempre se le pasa una funcion, es decir, lo que va a hacer y "a" seria el nombre que le asignamos a array[i]
  //    cb(a)                       Esto es lo mismo que decir, cb(array[i]) con un for haciendo 1 por 1.
  // });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var arr = [];
  for (let i = 0; i < array.length; i++){
    arr[i] = cb(array[i]);
  }
  return arr;
  //Para hacerlo con map es:                       A diferencia de forEarch, este returna todos los elementos del array, mientras que 
  // var arrmap = array.map(function(a){           forEarch lo que hace es aplicar la funcion en toda la matriz pero sin devolverla.
  //    return cb(a)
  // });
  // return arrmap;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var arr = [];
  var cont = 0;
  for(let i = 0; i < array.length; i++){
    var aux = array[i];
    if (aux[0] === "a"){
      arr[cont] = aux;
      cont++;
    }
  }
  return arr; 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
