

const express = require("express");

const multer  = require('multer');

const { cleanData } = require("./controllers/clean-data");


const storage = multer.memoryStorage();
const upload = multer({ storage });

const app = express();


//FRONT END
app.use("/",express.static("./public"))

//ARCHIVOS
app.use("/assets",express.static("./assets"))

//SERVICIOS
app.post("/clean-data",upload.single('file'),cleanData)


app.listen(8080,()=>{
  console.log("Servidor Corriendo en el puerto",8080)
})