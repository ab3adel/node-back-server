import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { useTranslation } from 'react-i18next'
import {AlertColor} from '@mui/material'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import { CancelButton, DoButton } from '../form/buttons/buttons'

interface iProps {message:string,title:string,action:AlertColor
    ,open:boolean,setOpen:Function,ok:Function}
export const MyDialog=({message,action,title,open,setOpen,ok}:iProps)=>{
    const {t,i18n}=useTranslation()
    const handleClose=(event:{},reason:'backdropClick'|'escapeKeyDown')=>{
        if(reason==='escapeKeyDown' || reason=== 'backdropClick')return
        setOpen(false)
    }
    return (
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>
            <Alert
          
            severity={action}
           
            >
                {title}
                </Alert>
          </DialogTitle>
          <DialogContent>
             {message}
          </DialogContent>
          <DialogActions
          
          >
            <Box
            mx={1}>

                <DoButton
                title={t('ok')}
                fun={ok}
                
                />
            </Box>
            <Box >

                <CancelButton 
                title={t("cancel")}
                fun={()=>setOpen(false)}
                />
            </Box>

     
          </DialogActions>
        </Dialog>
      );
    }
    
