// Atributos y métodos privados en prototipos

// ------deepCopy--- init here 
function typeOfElement (element){
  switch (Object.prototype.toString.call(element)){
    case "[object Object]":
      return "object";
    case "object Array ":
      return "array";
    default:
      return "It's probably primitive data."
  }
}

function deepCopy(element) {
  let elementType = typeOfElement(element);
  if(elementType !== "array" && elementType !== "object") return element;
  
  let copyOfElement;
  if(elementType === "object") copyOfElement = {};
  if(elementType === "array") copyOfElement = [];

  for(let item in element){
    copyOfElement[item] = deepCopy(element[item])
  }

  return copyOfElement;
}
// --------------end here---------------- 


function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({
  name = requiredParam("name"),
  courses = [],
}){
  this.name = name;
  this.courses = courses;

}

function Student({
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
  
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses,
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  }

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, "learningPaths",{
    get (){
      return private._learningPaths;
    },
    set(newLp){
      if(newLp instanceof LearningPath) {
        private._learningPaths.push(newLp);
      }
      else{
        console.warn(newLp, 'no es una instancia del Prototipo LearningPath');
      }     
    },
  });

  
  if(Array.isArray(learningPaths)){
    this._learningPaths = [];
    for (let iteratorLearnigPath of learningPaths) {
      this.learningPaths = iteratorLearnigPath;
    }
  }else{
    console.warn("LearningPath is not an array/ no es un array");
    return;
  }  
}




const escuelaWeb = new LearningPath({name : "Escuela de WebDev"});
const escuelaWeb2 ={name : "Escuela de WebDev falso"};
const escuelaData = new LearningPath({name: "Escuela de Data"});

const juan = new Student({ 
  email: "juanito@frijoles.co", 
  name: "Juanito",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    {
      name: "escuela del impostor",
      courses: [],
    },
    escuelita = 878,
  ],
});