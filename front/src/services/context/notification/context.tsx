import {createContext} from 'react'
import {AlertColor} from '@mui/material'

export interface iAlert {open:boolean,action:AlertColor,message:string}
 const notificationContext= createContext<{setAlert:any,alert:iAlert}>({setAlert:(arg:iAlert)=>{}
 ,alert:{message:'',open:false,action:'success'}})
 export default notificationContext;