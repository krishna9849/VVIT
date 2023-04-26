// console.log("Task 1");

// setTimeout(()=>{
//     console.log("Task 2")
// } , 0)

// console.log("Task 3");


// const http = require('http'); 
// const url= require('url');


//  var adr=`http://127.0.0.1:9000/?user=Krishna`;
//  var q = url.parse(adr, true);
// var qdata = q.query;

// http.createServer((req,res)=>{
//     console.log("Server runinng on port 9000")
//     res.write(`Hello ${qdata.user}`);
//     res.end();
// }).listen(9000);



function callBack(){
    console.log("I am a Callback ")
}

setTimeout(()=>{
    console.log("I am new call back")
} , 0);
setTimeout(callBack , 0);


let promise=new Promise((resolve, reject) => {
    resolve();
})

promise.then(()=>console.log("I am resolved promise")).catch(()=>console.log("I am rejected promise"))


console.log("I am normal api");



// Node.js is a popular JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build server-side applications using JavaScript, which is traditionally used for client-side scripting in web browsers. Node.js provides a non-blocking, event-driven model, which makes it highly scalable and efficient for building real-time, data-intensive applications.

// To get started with Node.js, you will need to install it on your computer. You can download the latest version of Node.js from the official website (https://nodejs.org). Once installed, you can use the node command in your terminal to run JavaScript code on the server.

// In addition to the node command, Node.js comes with two other command-line tools: npm and npx. These tools are used for managing Node.js packages and executing scripts.

// npm (short for Node Package Manager) is a package manager for Node.js packages. It allows you to easily install, manage, and share packages (i.e. libraries, frameworks, and tools) with other developers. npm is installed automatically when you install Node.js. You can use the npm command to install packages, update packages, and publish your own packages.

// npx (short for Node Package eXecute) is a command-line tool that comes bundled with npm starting from version 5.2.0. It allows you to execute packages (i.e. command-line tools) without installing them globally on your system. This is useful for running scripts or tools that you don't need to use frequently, or that you only need to use once. npx is installed automatically when you install npm.

// The main difference between npm and npx is that npm is used for installing and managing packages, while npx is used for executing packages without installing them globally. When you install a package using npm, it is installed globally on your system and can be used from anywhere. When you execute a package using npx, it is downloaded and executed temporarily, and is not installed globally on your system.

// In summary, Node.js is a powerful JavaScript runtime for building server-side applications. npm is a package manager for managing Node.js packages, while npx is a command-line tool for executing packages without installing them globally.







