// var a=()=>{
//     console.log("a callback function");
// }

// function b(){
//     console.log(`a normal function calling a callback function`);
   
// }


// b(a());




// var sum=(a,b)=>{

//     return a+b;
// }


// function mul(c){
// return c*5;
// }

// console.log(mul(sum(5,5)));

let prom=new Promise((res,rej)=>{

 rej();
})

prom.then(()=>console.log("Promise succeeded")).catch(()=>console.log("Promise failed"))
















