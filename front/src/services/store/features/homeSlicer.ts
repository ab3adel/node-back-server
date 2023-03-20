import {createSlice} from '@reduxjs/toolkit'
import product from '../../../assets/images/product.jpg'
export interface iProduct {image:string,id:number,price:number
    ,productName:string,quantity:number,liked:boolean}

    export interface iSavedProduct  extends iProduct {count:number,saved:boolean}
    export interface iInitial {
        all_pages:iProduct[][],current_page:iProduct[] |null,
        likes:number[],savedProducts:iSavedProduct[][],saved:number[],
        page:number
    }

let initials:iInitial={
    all_pages:[
        [
        {image:product,id:1,price:200,productName:'car1',quantity:10,liked:false},
        {image:product,id:2,price:200,productName:'car2',quantity:7,liked:false},
        {image:product,id:3,price:200,productName:'car4',quantity:8,liked:false},
        {image:product,id:4,price:200,productName:'car5',quantity:6,liked:false},
        {image:product,id:5,price:200,productName:'car6',quantity:5,liked:false},
        {image:product,id:6,price:200,productName:'car7',quantity:3,liked:false},
    ],
        [
            {image:product,id:7,price:200,productName:'car8',quantity:10,liked:false},
            {image:product,id:8,price:200,productName:'car9',quantity:7,liked:false},
            {image:product,id:9,price:200,productName:'car10',quantity:8,liked:false},
            {image:product,id:10,price:200,productName:'car11',quantity:6,liked:false},
            {image:product,id:11,price:200,productName:'car12',quantity:51,liked:false},
            {image:product,id:12,price:200,productName:'car13',quantity:3,liked:false},
        ]
    ]
    ,current_page:[]
    ,likes:[],saved:[],savedProducts:[],page:1

}
export const homeSlicer=createSlice({
    name:'Products',
    initialState:initials,
    reducers:{
        setProducts:(state,action)=>{
            state.all_pages.push(action.payload)
        },
        getProducts:(state,action)=>{
            let current_page=state.all_pages.filter((ele:any,index:number)=>index+1 === action.payload)[0]
            if (current_page) {
                state.current_page=current_page
            }
            else {
                state.current_page=null
            }
        },
        setLike:(state,action)=>{
            console.log(action)
            if(!state.likes.includes(action.payload)) {
                state.current_page?.forEach(ele=>{
                    if(ele.id === action.payload) {
                        ele.liked=true
                    }
                })
                state.likes.push(action.payload)
                
            }
        },
        setUnlike:(state,action)=>{
            if(state.likes.includes(action.payload)) {
                let newLikes=state.likes.filter(ele=>ele!==action.payload)
                state.current_page?.forEach(ele=>{
                    if(ele.id === action.payload) {
                        ele.liked=false
                    }
                })
                state.likes=newLikes
            }
        },
        addToCart:(state,action)=>{
            if (!state.saved.includes(action.payload.id)) {

                let entered=false
                state.saved.push(action.payload.id)
                state.savedProducts.map (ele=>{
                    if (ele.length <=10) {
                        ele.push({...action.payload})
                        entered=true
                    }
                })
                if (!entered) {
                    state.savedProducts.push([{...action.payload}])
                }
            }
           
        },
        
        addOne:(state,action)=>{

                let product= state.savedProducts[state.page-1]
                .filter(ele=>ele.id ===action.payload)[0]
        
                if (product && product.count +1 <= product.quantity) {
                    product.count +=1
                }
            
            
        },
        subOne:(state,action)=>{

                let product= state.savedProducts[state.page-1]
                .filter(ele=>ele.id ===action.payload)[0]
                if (product && product.count -1 >=0) {
                    product.count -=1
                }
            
        },
        setCurrentPage:(state,action)=>{
            state.page=action.payload
        },
        removeFromCart:(state,action)=>{
          state.savedProducts[state.page-1]= state.savedProducts[state.page-1].filter(ele=>ele.id !==action.payload)
          state.saved=state.saved.filter(ele=> ele !== action.payload)
        }
        
    }
})
export const {getProducts,setLike,setProducts
    ,setUnlike,addOne,addToCart,subOne,
    setCurrentPage
}=homeSlicer.actions
export default homeSlicer.reducer