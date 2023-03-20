import './auth.scss'
import Grid from '@mui/material/Grid'
import {Signin} from '../../components/signin'
import {SignUp} from '../../components/signup'
import { useState } from 'react'
import { LanguageSwitcher } from '../../mini-components/language-switcher/language-switcher'
const Auth =()=>{
const [showSignUp,setShowSignup] =useState(false)

    return (
        <Grid container padding={2} className="auth">
          
            <Grid item container md={7} xs={12}
            className="authform">
                 <div className='language'>

                    <LanguageSwitcher />
                </div>

                {
                    showSignUp?
                    <SignUp setShowSignUp={setShowSignup}/>:
                    <Signin setShowSignUp={setShowSignup} />
                }
            </Grid>
            
        </Grid>
    )
}
export default Auth;