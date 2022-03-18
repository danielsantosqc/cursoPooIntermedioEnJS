// instanceof

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
  this.approvedCourses = [],
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  }
  
  if(Array.isArray(learningPaths)){
    this.learningPaths = [];
    for (let iteratorLearnigPath of learningPaths) {
      console.log(iteratorLearnigPath, );
      console.log(iteratorLearnigPath instanceof LearningPath );
      if(iteratorLearnigPath instanceof LearningPath) {
        this.learningPaths.push(iteratorLearnigPath)
      }
      // else{
      //   console.log('no es una instancia del LearningPaths');
      // } 
    }
  }else{
    console.log("LearningPath is not an array/ no es un array");
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