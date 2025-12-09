// const user={
//  username:"hitesh",
//  price:1000, 

//  welcomeMessage:function(){
//     console.log(`${this.username},welcome to website`);
//  }

// }
// user.welcomeMessage()

///one loop  basically nested loop for understood
for(let i=0;i<10;i++){
   console.log(`Outer loop value is ${i}`)
for (let j=0;j<10;j++){
   console.log(`Inner loop value is${j} and inner loop ${i}`);
}
}