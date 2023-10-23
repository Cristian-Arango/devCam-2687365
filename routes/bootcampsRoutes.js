const express=require('express')
const router= express.Router()




//uri del proyecto

router.get('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:"Holiwis"
       }
   )
})


router.get('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui esta el bootcamp con el id ${request.params.id} `
       }
   ) 
})

router.post('/', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se creara un bootcamps`
       }
   ) 
}) 


router.put('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se editara un bootcamps con el id  ${request.params.id}`
       }
   ) 
})  

router.delete('/:id', (request,response) =>{
   response.json(
       {
       succes:true,
       msg:`Aqui se eliminara un bootcamps con el id  ${request.params.id}`
       }
   ) 
})  

module.exports=router