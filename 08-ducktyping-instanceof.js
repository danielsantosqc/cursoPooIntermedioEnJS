// el ejemplo a seguir aunque la sintaxis sea diferente, es lo mismo 
// solo lo puse en parentesis para diferenciar graficamente en el navegador
// que es un atributo private
// se puede observar el ejemplo en los getters y setters de la funcion -createStudent-
// (_name: name) == ("_name": name)
//  ("_learningPaths": learningPaths) == _learningPaths: learningPaths

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
  name = requiredParam("name"),
  courses = [],
}){
 const private = {
   "_name": name,
   "_courses": courses,
 };

 const public = {
  //name
  get name(){
    return private._name;
  },
  set name(newName){
    if(newName.length != 0){
      private._name = newName;
    }else{
      console.warn("Tu nombre deve tener al menos 1 caracter")
    }
  },
  // courses
  get courses(){
    return private._courses;
  },
 };

 return public;

}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) 
{
  const private = {
    _name: name,
    "_learningPaths": learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    // users 
    get name(){
      return private._name;
    },
    set name(newName){
      if(newName.length != 0){
        private._name = newName;
      }else{
        console.warn("Tu nombre deve tener al menos 1 caracter")
      }
    },

    // learningPaths 
    get learningPaths(){
      return private["_learningPaths"];
    },
    set learningPaths(newLP){
      !newLP.name
      if(newName.length != 0){
        private._name = newName;
      }else{
        console.warn("Tu nombre deve tener al menos 1 caracter")
      }
    },
  };


  return public;
}

// const juan = createStudent();
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });