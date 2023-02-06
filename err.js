setTimeout(()=>{
    try{
    console.log("Hacking wifi....please wait ");
    console.log(Susmit);
    }
    catch(e){console.log(e);
}},2000)
// try{
// console.log(Susmit);
// }
// catch(e){
//     console.log("Balle Balle")
//     // Instead of dying the script can do something reasonaable
// }
// setTimeout(()=>{
//     console.log("Fetching username and password...please wait");
//     // console.log(Susmit);
// },2000)

// setTimeout(()=>{
//     console.log("Hacking your facebook Id...please wait")
// },3000)

// setTimeout(()=>{
//     console.log("Username and password fetched");
// },4000);

// First try is executed
// No Error => Catch will be ignored else catch will be executed
// Try catch works synchronously
// If an exception happens in scheduled code like in setTimeout then try catch won't catch it


// Error Object: -- custom Error
// 2 properties
// a)name
// b)message

// Throw new Error("")

// Finally Clause:
// always executes

try{
    let a = 0;
    console.log(program);
    console.log("Program ran succsfully")
}
catch(err){
    console.log("This is an error");
    console.log(p)
}
finally{
    console.log("I am a good boy");
    // Close the file
    // Exit the loop
    // Write to the log file
    // If there is a return in try then finally is executed just before the control is returned to the outer block
}