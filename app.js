<<<<<<< HEAD
// import express from "express";
// import 'dotenv/config.js';
// import bookRoutes from "./routers/BookRoutes.js";

// const app = express();

// // app.use(express.json());

// // const port = 3000;

// app.use(express.json());

// try{
//     app.listen(process.env.PORT || 3000, () =>{
//     console.log(`Listening to port ${process.env.PORT || 3000}...`);
//     });
// }catch(e){
//     console.log(e);
// }

// // app.get('/Trishia', async(request, response) =>{
// //     response.status(200).json({message: "Hello, I'm Trishia!"})
// // });


=======
>>>>>>> parent of c0e8948 (tapos na po)
import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

try{
    app.listen(port, () =>{
    console.log('Listening to port 3000...')
    });
}catch(e){
    console.log(e);
}

app.get('/Trishia', async(request, response) =>{
    response.status(200).json({message: "Hello, I'm Trishia!"})
});