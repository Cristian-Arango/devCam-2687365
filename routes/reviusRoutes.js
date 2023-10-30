const express=require('express')
const router3= express.Router()


router3.get('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:"Estas son las Reviws"
       }
   )
})


router3.get('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui esta el reviw con el id ${request.params.id} `
       }
   ) 
})

router3.post('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se creara un reviw`
       }
   ) 
}) 


router3.put('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se editara un reviw con el id  ${request.params.id}`
       }
   ) 
})  

router3.delete('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se eliminara un reviw con el id  ${request.params.id}`
       }
   ) 
})  

module.exports=router3