import { initializeApp } from 'firebase/app'
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc, setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvQSEGgsN7z9Lq0NkBVlb7WkwtOJ2NPCg",
    authDomain: "crwn-clothing-db-6988d.firebaseapp.com",
    projectId: "crwn-clothing-db-6988d",
    storageBucket: "crwn-clothing-db-6988d.appspot.com",
    messagingSenderId: "971633854486",
    appId: "1:971633854486:web:ffee50acc103c3be5e8d37"
  };
  
 
  const firebaseapp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: "select_account",

  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db= getFirestore()

  export const createUserDocumentFromAuth= async (userAuth) => {
        const userDocRef = doc(db, 'users', userAuth.uid )
     

        const userSnapshot = await getDoc(userDocRef)
       

       if (!userSnapshot.exists()) {
            const {displayName, email}= userAuth
            const createAt= new Date()  

            try {
                await setDoc(userDocRef, {displayName, email, createAt})

            }catch(err){
                console.log(err.message)

            }
        }

       return userDocRef

  }
