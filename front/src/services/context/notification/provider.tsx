import { useState } from "react";
import notificationContext,{iAlert} from "./context";


export const NotificationProvider =({children}:{children:any})=>{
    const [alert,setAlert]=useState<iAlert>({open:false,message:'',action:'error'})
    return (
        <notificationContext.Provider
        value={{alert,setAlert}}>
            {children}
        </notificationContext.Provider>
    )
}