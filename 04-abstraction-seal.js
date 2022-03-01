function isObject(element) {
  return typeof element == "object";
  // return true or false 
}

function isArray(element) {
  return Array.isArray(element);
  // return true or false 
}

function deepCopyewrw(element) {
  let copyElement;

  if (isObject(element)) {
   copyElement = {};
  } else if (isArray(element)) {
   copyElement = [];
  } else {
    return element;
  }

  for (key in element) {

    if (isObject(element[key])) {
     copyElement[key] = deepCopy(element[key]);
    } 
    else if (isArray(element[key])) {
     copyElement.push(element[key]);
    } 
    else {
     copyElement[key] = element[key];
    }    
  }

  return copyElement;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

// Abstracción con objetos literales y deep copy
Object.isSealed()
El método **Object.isSealed()** si el objeto está sellado.

// Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

Object.isFrozen()
// El método **Object.isFrozen()** determina si un objeto está congelado.

// Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

// Un objeto está congelado si y solo si no es extendible, todas sus propiedades son no-configurables, y todos los datos de sus propiedades no tienen capacidad de escritura.

// Código Clase

const carlos = deepCopy(studentBase);
// Object.defineProperty(carlos, "name", {
//     value: "Carlitos",
//     configurable: false,
// });
Object.seal(carlos); // Es lo mismo que lo de arriba pero mas easy
carlos.name = "Carlitos";

Object.isSealed(carlos); // Nos muestra con True o False si todas las propiedades estan selladas
Object.isFrozen(carlos); // Nos muestra con True o False si todas las propiedades estan congeladas