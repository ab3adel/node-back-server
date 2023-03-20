
import Snackbar from '@mui/material/Snackbar'
import { Alert ,AlertColor} from '@mui/material'
import { SnackbarCloseReason } from '@mui/base'
import { SyntheticEvent } from 'react'
interface iProps {setOpen:Function,open:boolean,action:AlertColor,message:string}

export const Notification =({open,setOpen,action,message}:iProps)=>{

const handleClose=(event:Event | SyntheticEvent<any,Event>,reason:SnackbarCloseReason)=>{
  if (reason === 'clickaway' || reason==='escapeKeyDown') return
setOpen()
}
    return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={()=>setOpen()} severity={action} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
      )
}