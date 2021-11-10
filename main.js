const daniel = {
    name: "danielito",
    age : 18,
    approveCourses: ["Curso 1"],

    addCourse(newCourse){
        console.log("This", this);
        console.log("This.approveCourse", this.approveCourses);
        this.approveCourses.push(newCourse);
    }
};
// console.log("keys");
// console.log(Object.keys(daniel));
// console.log("getOwnPropertyNames");
// console.log(Object.getOwnPropertyNames(daniel));
// console.log("entries");
// console.log(Object.entries(daniel));



Object.defineProperty(daniel, "navigator", {
    value: "Chrome",
    enumerable:false,
    writable: true,
    configurable: true
});

Object.defineProperty(daniel, "editor", {
    value: "VSCode",
    enumerable:true,
    writable: false,
    configurable: true
});

Object.defineProperty(daniel, "terminal", {
    value: "WSL",
    enumerable:true,
    writable: true,
    configurable: false
});

Object.defineProperty(daniel, "puebaNASA", {
    value: "extraterrestes",
    enumerable:false,
    writable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptors(daniel));

