console.log("This is the starting of my code");
process.nextTick(()=>{
    console.log("This is process.nextTick operation");
})
setTimeout(()=>{
  console.log("This is First Timeout operation");
},2000);
console.log("This is the end of my code");