const mongoose =require('mongoose')


//Definir un modelo exclusivo para mogo
const bootcampSchema = new mongoose.Schema({


name: {
    type:String,
    unique:true,
    required :[true, "El bootcamp esta repetido "],
    maxlenght:[20, "el nombre tiene que tener 20 characters"]
    }, 
phone: {
    type:Number,
    required :[true, "El bootcamp esta repetido "],
    maxlenght:[10, "el telefono solo puede tener 10 characters"]
    }, 
address: {
    type:String,
    required :[true, "Direccion Requerida"],
    },
topics: {
    type:[String],
    enum:["AI",
        "Backend",
        "Frontend",
        "Devops"]
    },
averageRating:Number,
createdAt: {
    type:Date,
    required :[true, "debe ingresar fecha"],
    } 

})

const Bootcamp=mongoose.model('Bootcamp', bootcampSchema)
module.exports=Bootcamp