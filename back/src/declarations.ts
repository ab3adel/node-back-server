import {Document} from 'mongoose'
export interface iOption {model:any}
export interface iParams {page?:any,query?:any, limit?:any,id?:string,locale?:any}
export interface iProduct {
    id?:string
    product_name?:string ,
    price?:number,
    image?:any,
    quantity?:string,
    filename?:string

}
export interface iUser {

    username:string,
     password:string ,
     email:string
  
}
export interface InstitutionDocument extends Document {}