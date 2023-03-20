import { iProduct,iOption,iParams,iUser} from '../declarations'
import { Students } from '../services/products.service'

import {Request,Response} from 'express'
import getStudentModel from '../models/products.model'
let student = new Students({model:getStudentModel()})

export async function getProducts (req:Request,res:Response) {


    let {page,page_count,locale}=req.query
    if (!locale) {
        res.send(400).json({success:false,message:"you must send locale "})
    }
    let records =await student.getAllProducts({page,limit:page_count,locale:locale?locale:'en'})
    if (records) {
        res.status(200).json({success:true,data:records})
    }
    else {

        res.status(400).json({success:false,message:'page number is required'})
    }

}

export async function createOneProduct (req:Request,res:Response) {

    let obj:iProduct=req.body
   
    
    if (obj) {
        let result = await student.createOne(obj)
        res.json({data:result})
    }
    else {

        res.status(400).json({success:false})
    }

}

