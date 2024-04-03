let courses = ["Medicine", "Pharmacy", "Engineering", "Teaching"];
// console.log(courses);
// 
console.log(courses[courses.length-1]);

courses[1] = "Biochemist";

console.log(courses);

courses.push("Scientist")

console.log(courses)

courses.unshift("Dentist")

console.log(courses)

// courses.pop("Dentist")

// console.log(courses)

// courses.pop()

// console.log(courses)

courses.shift();

console.log(courses);

courses.pop();

console.log(courses);

courses.splice(2,3);

console.log(courses);