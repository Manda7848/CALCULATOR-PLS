// import express from 'express';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import bodyParser from 'body-parser';

// const app = express()

// app.use(bodyParser.urlencoded({extended:true}))

// const port = 9000

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + "/server.html")
// })

// app.post('/', (req,res) => {
//     var num1 = Number(req.body.digi1)
//     var num2 = Number(req.body.digi2)

//     const add = num1 + num2
//     const product = num1 * num2
//     const div = num1 / num2
//     const sub = num1 - num2

//     res.send(`<style> @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
//    body {font-family: "Orbitron", sans-serif; font-weight: "900"; }  </style>
//    The numbers you inputted are ${num1} and ${num2} <br> <br> The result of adding the numbers is ${add} <br> <br> The result of multiplying the numbers is ${product} <br> <br> The result of dividing the numbers is ${div} <br> <br> The result of subtracting the numbers is ${sub}`)
   
    
//     console.log(req.body)
// })


// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`)
// })



// import express from 'express';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import bodyParser from 'body-parser';


// const express = require('express');
// const app = express();


// const port = 9000;

// app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json());

// app.get('/add',(req,res)=>{
//     const{a,b}
//    = req.query
//    const result = parseFloat(a) + parseFloat(b)
//    res.json({result})
// }
// )



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + "/server.html")
// });

// app.post('/', (req,res) => {
//     var num1 = Number(req.body.digi1)
//     var num2 = Number(req.body.digi2)

//     const add = num1 + num2
//     const product = num1 * num2
//     const div = num1 / num2
//     const sub = num1 - num2

//     res.send(`<style> @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
//    body {font-family: "Orbitron", sans-serif; font-weight: "900"; }  </style>
//    The numbers you inputted are ${num1} and ${num2} <br> <br> The result of adding the numbers is ${add} <br> <br> The result of multiplying the numbers is ${product} <br> <br> The result of dividing the numbers is ${div} <br> <br> The result of subtracting the numbers is ${sub}`)
   
    
//     console.log(req.body)
// })


// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`)
// })

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 9000;

// Parse URL-encoded bodies (form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Get current directory to reference server.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/server.html"); // Ensure server.html is in the same directory
});

// Handle form data POST request
app.post('/', (req, res) => {
    console.log("Form Data Received:", req.body); // Should log { digi1: 'value', digi2: 'value' }

    const num1 = Number(req.body.digi1);
    const num2 = Number(req.body.digi2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send("Invalid input. Please enter valid numbers.");
    }

    const add = num1 + num2;
    const product = num1 * num2;
    const div = num1 / num2;
    const sub = num1 - num2;

    res.send(`
       <style> @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
  body {font-family: "Orbitron", sans-serif; font-weight: "900"; }  </style>
   The numbers you inputted are ${num1} and ${num2} <br> <br> The result of adding the numbers is ${add} <br> <br> The result of multiplying the numbers is ${product} <br> <br> The result of dividing the numbers is ${div} <br> <br> The result of subtracting the numbers is ${sub}
    `);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
