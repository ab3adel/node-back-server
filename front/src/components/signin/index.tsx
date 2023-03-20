import Grid from '@mui/material/Grid'
import { TextInput,PasswordInput } from '../../mini-components/form/input/input'
import './signin.scss'
import {useFormik} from 'formik'
import { useTranslation } from 'react-i18next'
import {signInValidationSchema} from './validation'

import { useState } from 'react'
import { CancelButton, DoButton } from '../../mini-components/form/buttons/buttons'
interface iProps {setShowSignUp:Function}
export const Signin =({setShowSignUp}:iProps)=>{
    const {t,i18n}=useTranslation()
  
const formik=useFormik({
    initialValues:{
        username:'',
        password:''
    },
    onSubmit:()=>{},
    validationSchema:signInValidationSchema(i18n.language)

})

    return (
        <Grid item container rowGap={2} xs={12} padding={4}
        className="signin"
        >
            <Grid item container xs={12}
            justifyContent="center">
                <h2
                className='title'>
                    {t('signin')}
                </h2>
            </Grid>
            <Grid item container xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={8} xs={12}>

                <TextInput 
                  value={formik.values.username}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  name='username'
                  error={formik.errors.username}
                  label={t('username')}
                  touched={formik.touched.username}
                  
                />
            </Grid>
            </Grid>
            <Grid item  container xs={12}
              justifyContent="center"
              alignItems="center">
                <Grid item md={8} xs={12}>
                    <PasswordInput
                    value={formik.values.password}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    name="password"
                    label={t('password')}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    />
                </Grid>

            </Grid>
            <Grid item container xs={12}
             justifyContent="center"
            >
                 <Grid item md={5} xs={6}
                 display="flex"
                 justifyContent={'center'}
                 alignItems="center"
             >
                    <DoButton
                     title={t('signin')}
                     fun={()=>{}}
                     />
                 </Grid>
                 {/* <Grid item md={5} xs={6}
                  display="flex"
                  justifyContent={'center'}
                  alignItems="center"
                 >
                    <CancelButton
                     title={t('cancel')}
                     fun={()=>{}}
                     />
                 </Grid> */}
            </Grid>
            <Grid item xs={12} justifyContent='center'
            display={'flex'}>
            <div onClick={()=>setShowSignUp(true)}
            className="linkedText"
            >
                {t('dont_have_account')}
            </div>
            </Grid>
        </Grid>
    )
}