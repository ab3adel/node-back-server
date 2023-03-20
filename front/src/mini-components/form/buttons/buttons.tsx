import Button from '@mui/material/Button'
import Spinner from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import './buttons.scss'

interface iButton {title:string,fun:Function,loading?:boolean,disabled?:boolean,children?:any}
export const DoButton =({title,fun,loading,disabled,children}:iButton)=>{


    return (
        <Button 
        disabled={disabled || loading}
        className="doButton"
        onClick={()=>fun()}
        sx={{
            background:'var(--primary)',
            color:'white',
            minWidth:'80px',
            width:'fit-content',
          

            '&:hover' : {
                background:'var(--primary)',
                opacity:0.7
            },
            '& .MuiBox-root': {
                display:'flex',
            }
        }}
       
        >
            {
                loading?
                <Spinner size={20}/>:
                <Box >

                    <Typography mx={1}  >{title}</Typography>
                    {children}
                </Box>


            }
        </Button>
    )
}
export const DoButtonSecondary =({title,fun,loading,disabled,children}:iButton)=>{


    return (
        <Button 
        disabled={disabled || loading}
        className="doButton"
        sx={{
            background:'var(--secondary)',
            color:'white',
            minWidth:'80px',
            
            '&:hover' : {
                background:'var(--secondary)',
                opacity:0.7
            },
            
        }}
       
        >
            {
                loading?
                <Spinner size={20}/>:
                <Box >

                    <Typography mx={1}  >{title}</Typography>
                    {children}
                </Box>


            }
        </Button>
    )
}
export const CancelButton =({title,fun,loading,disabled,children}:iButton)=>{


    return (
        <Button 
        onClick={()=>fun()}
        disabled={disabled || loading}
        className="cancelButton" 
        sx={{
            background:'white',
            color:'var(--error)',
            border:'1px solid var(--error)',
            minWidth:'80px',
            '&:hover' : {
                background:'var(--error)',
                color:'white'
            }
        }}
        >
            {
                loading?
                <Spinner size={20}/>:
                <Box >

                    <Typography mx={1}  >{title}</Typography>
                    {children}
                </Box>


            }
        </Button>
    )
}
