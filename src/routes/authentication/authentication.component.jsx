import { useState } from 'react'
import {getRedirectResult} from 'firebase/auth'
import './authentication.styles.scss'

import { 
  
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
  } from '../../utils/firebase/firebase.utils'


import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'


const Authentication = () => {
   
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef= await createUserDocumentFromAuth(user)
    }

   
return (
    <div className='authentication-container'>
    

        <SignInForm />
        <SignUpForm />
     

       
    </div>
)

}

export default Authentication