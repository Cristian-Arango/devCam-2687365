const mongoose =require('mongoose')
const dotenv=require('dotenv')
const colors=require('colors')

dotenv.config({
    path:'./config/.env'
})


//funcion de conexion 

const conectarDb= async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MONGO DB CONECTADO...😒😒".bgBlue)
    }

module.exports= conectarDb