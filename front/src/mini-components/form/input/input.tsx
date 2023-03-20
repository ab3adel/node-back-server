
import TextField from '@mui/material/TextField'
import InputAdorment from '@mui/material/InputAdornment'
import { useTranslation } from 'react-i18next'
import {RemoveRedEye,VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import './input.scss'
interface iProps {
    name:string,
    label:string,
    error?:string,
    touched?:boolean,
    handleBlur:(e:React.FocusEvent)=>void,
    handleChange:(e:React.ChangeEvent)=>void,
    value:any,
    setFieldValue?:Function

    
}
export const TextInput =({value,error,handleBlur,handleChange,touched,name,label}:iProps)=>{
const {i18n}=useTranslation()
return (
    <TextField 
    value={value}
    onChange={handleChange}
    onBlur={handleBlur}
    name={name}
    error={Boolean(error) &&touched}
    helperText={Boolean(error) && touched?
      error:''}
    fullWidth={true}
    label={label}

    
  />
)
}
export const PasswordInput =({handleBlur,handleChange,label,name,value,error,touched}:iProps)=>{
    const {i18n}=useTranslation()
    const [showPassword,setShowPassword]=useState(false)
    return (
        <TextField 
        dir={i18n.language==='en'?'ltr':'rtl'}
             label={label}
            
        fullWidth={true}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            type={showPassword?'text':'password'}
            name={name}
            error={Boolean(error) && touched}
            helperText={Boolean(error) && touched?
                error:''}
            InputProps={
                i18n.language==='en'?
                {
                endAdornment:
                    <InputAdorment position='start' 
                    onClick={()=>setShowPassword(!showPassword)} 
                  >
                        {
                            showPassword?
                            <VisibilityOff   sx={{cursor:'pointer'}}/>:
                            <RemoveRedEye   sx={{cursor:'pointer'}}/>
                        }
                        
                    </InputAdorment>
                
            }:{
                startAdornment:
                    <InputAdorment position='start' 
                    onClick={()=>setShowPassword(!showPassword)} 
                  >
                        {
                            showPassword?
                            <VisibilityOff   sx={{cursor:'pointer'}}/>:
                            <RemoveRedEye   sx={{cursor:'pointer'}}/>
                        }
                        
                    </InputAdorment>
                
            }
        }

            />
    )

}
interface iCounter {increase:Function,decrease:Function}

export const InputWithControl=({value,setFieldValue,increase,decrease}:Partial<iProps & iCounter>)=>{

const handleIncrease=()=>{
 if(increase)   increase()
}
const handleDecrease=()=>{
    if(decrease) decrease()
}

    return (
        <div className="inputwIthControls">
            <button onClick={handleIncrease}>+</button>
            <input type="text" 
           value={value}

            />
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}