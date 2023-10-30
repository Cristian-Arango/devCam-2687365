const express = require('express')
const dotenv=require('dotenv')
const colors=require('colors')


const bootcampsRoutes=require('./routes/bootcampsRoutes')
const CousersRout=require('./routes/CoursesRoutes')
const rsviusRoute=require('./routes/reviusRoutes')
const userroute=require('./routes/userRoutes')




//vinvular rutas



//Construir el objeto app
const app=express()


app.use('/bootcamps',bootcampsRoutes)
app.use('/courses',CousersRout)
app.use('/revius',rsviusRoute)
app.use('/users',userroute)



//configurar variables de entorno
dotenv.config(
    { path: './config/.env'}
)

//tomar variable de puerto del entorno 
const puerto= process.env.PUERTO

//servidor 
app.listen(puerto, function(){
    console.log(`servidor ejecutando .. ${puerto}`.bgBlue)
})