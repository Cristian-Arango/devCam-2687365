const express = require('express')
const dotenv=require('dotenv')
const colors=require('colors')
const conectarDb=require('./config/db')


const bootcampsRoutes=require('./routes/bootcampsRoutes')
const CousersRout=require('./routes/CoursesRoutes')
const rsviusRoute=require('./routes/reviusRoutes')
const userroute=require('./routes/userRoutes')


dotenv.config(
    { path: './config/.env'}
)

//vinvular rutas


conectarDb()
//Construir el objeto app
const app=express()
app.use(express.json())


app.use('/bootcamps',bootcampsRoutes)
app.use('/courses',CousersRout)
app.use('/revius',rsviusRoute)
app.use('/users',userroute)



//configurar variables de entorno


//tomar variable de puerto del entorno 
const puerto= process.env.PUERTO

//servidor 
app.listen(puerto, function(){
    console.log(`servidor ejecutando .. ${puerto}`.bgRed)
})