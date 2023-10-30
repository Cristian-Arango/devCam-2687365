const express=require('express')
const BootcampModel=require('../models/bootcampModels')
const router= express.Router()




//uri del proyecto

router.get('/',async (request,response) =>{
    const bootcamp=await BootcampModel.find()
    response.json(
       {
       succes:true,
       data:bootcamp
       }
    )
})


router.get('/:id',async (request,response) =>{
 const bootcamp=await BootcampModel.findById(request.params.id)
    response.json(

       {
       succes:true,
        data:bootcamp
    }
   ) 
})

router.post('/',async (request,response) =>{
    const newbootcamp=await BootcampModel.create(request.body)
   response.json(
       {
       succes:true,
        data:newbootcamp
       }
   ) 
}) 


router.delete('/:id', async(request,response) =>{
    const dropbootcamp=await BootcampModel.deleteOne(BootcampModel.findById(request.params.id))

   response.json(
       {
       succes:true,
       data:dropbootcamp,
       msg:`Aqui se editara un bootcamps con el id  ${request.params.id}`
       }
   ) 


   router.put('/:id', async(request,response) =>{
    
    response.json(
        {
        succes:true,
        msg:`Aqui se editara un bootcamps con el id  ${request.params.id}`
        }
    ) 
 })  
})  

module.exports=router