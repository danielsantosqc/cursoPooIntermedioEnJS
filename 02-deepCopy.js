
// OBJECT EXAMPLE-------------
const obj = {
    name: "Daniel",
    lastName: "Santos",
    personalinformation: {
       date: "11-11-2222",
       phone: 1122334455, 
    },
    editA() {
        this.name = "DANIEL";
    },
    unascosas:[1,2,3,{a:"holaa", b:"lalalsl", c:23},5,6]
}; 
// ------------------

// -------------init here 
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
// --------------end here 


const cositas = [2,3,4,5,[2,{id:1,nombre:"daniel", numeros:[1,23,3,4]},4,4],7,43,3];

function deepCopy(subject) {
  let copy;

  if (Array.isArray(subject)) {
    copy = [];
  } else if (typeof subject === "object") {
    copy = {};
  } else {
    return subject;
  }

  for (key in subject) {
    copy[key] = deepCopy(subject[key]);
  }

  return copy;
}
// example test
const copyObj = deepCopy(obj);