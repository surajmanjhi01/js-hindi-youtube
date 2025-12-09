
// function sayMyName(){
// console.log("H");
// console.log("i");
// console.log("L");
// }

// // sayMyName()
// function CalculateCartprice(...num1){   //...==>is called RestOperator.Dont get confused b/w rest and Sperad operator both look same
//     return num1
// }
// console.log(CalculateCartprice(3,4,5,200))
//Handling object in Function
const user={
    username:"Manjhi",
    price:566    
}
function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
 handleObject(user)