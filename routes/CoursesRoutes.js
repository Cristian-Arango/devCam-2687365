const express=require('express')
const router2= express.Router()




//uri del proyecto

router2.get('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:"Estos son los cursos "
       }
   )
})


router2.get('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui esta el Curso con el id ${request.params.id} `
       }
   ) 
})

router2.post('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se creara un Curso`
       }
   ) 
}) 


router2.put('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se editara un Curso con el id  ${request.params.id}`
       }
   ) 
})  

router2.delete('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se eliminara un Curso con el id  ${request.params.id}`
       }
   ) 
})  

module.exports=router2