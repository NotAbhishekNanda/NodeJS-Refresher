// Error Handling in Node JS

// Try-Catch-Finally

// First try is executed
// No Error => Catch will be ignored else catch will be executed
// Try catch works synchronously
// If an exception happens in scheduled code like in setTimeout then try catch won't catch it


// Error Object:
// 2 properties
// a)name
// b)message

// Throw new Error("") -- custom Error

// Finally Clause:
// always executes

// Finally use case
//  - Close the file
//  - Exit the loop
//  - Write to the log file
//  - If there is a return in try then finally is executed just before the control is returned to the outer block