// let n = 5;
// for (let n = 5; n <= 40; n+=5){
//   console.log(n)
// }
// if (n % 5 == 0){
//     console.log("Numbers are divisible by five")
// }
// function add_eight_numbers(a,b,c,d,e,f,g,h){
//     let add = a + b + c + d + e + f + g + h;
//     console.log("Sum", add);
// }
// add_eight_numbers(5,10,15,20,25,30,35,40)

let n = 5
let sum = 0;
for (let i=1;i<=n;i++){
  if(i%3 === 0 || i % 5 === 0){
    sum +=i;
  }
}
console.log(sum)