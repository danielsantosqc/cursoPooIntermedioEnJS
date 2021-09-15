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

console.log(Object.getOwnPropertyDescriptors(daniel));
