const arr=[1,2,3,4,5];

console.log(arr.filter(a=>a>3))


console.log(arr.map(a=>a*2));


console.log(arr.reduce(((curr,prev)=>prev+curr),0))



console.log(arr.map(a=>a*2).reduce(((curr,prev)=>prev*curr),1))


console.log(arr.map(a=>a*2).filter(a=>a>3))