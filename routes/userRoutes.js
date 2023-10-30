const express=require('express')
const router4= express.Router()


router4.get('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:"Estos son los user "
       }
   )
})

router4.get('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui esta el user con el id ${request.params.id} `
       }
   ) 
})

router4.post('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se creara un user`
       }
   ) 
}) 


router4.put('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se editara un user con el id  ${request.params.id}`
       }
   ) 
})  

router4.delete('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se eliminara un user con el id  ${request.params.id}`
       }
   ) 
})  

module.exports=router4