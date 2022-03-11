function requiredParam(param) {
  throw new Error(param + " es obligatorio");
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
    "_name": name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    // readName() {
    //   return private["_name"];
    // },
    // changeName(newName) {
    //   private["_name"] = newName;
    // },

    //sustituye readName y changeName
    get name(){
      // return private["_name"];
      return private._name;
    },
    set name(newName){
      if(newName.length != 0){
        // private["_name"] = newName;
        private._name = newName;
      }else{
        console.warn("Tu nombre deve tener al menos 1 caracter")
      }
    },
  };

  // Object.defineProperty(public, "readName", {
  //   writable: false,
  //   configurable: false,
  // });
  // Object.defineProperty(public, "changeName", {
  //   writable: false,
  //   configurable: false,
  // });

  return public;
}

// const juan = createStudent();
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });