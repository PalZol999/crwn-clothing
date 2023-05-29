import { initializeApp } from 'firebase/app'
import {
    getAuth, 
    signInWithPopup,
    signInWithRedirect, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
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

  const googleProvider= new GoogleAuthProvider()

  googleProvider.setCustomParameters({
    prompt: "select_account",

  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect=  () => signInWithRedirect(auth, googleProvider)

  export const db= getFirestore()
 

  export const createUserDocumentFromAuth= async (
    userAuth, 
    additionalInformration = {}
    ) => {
        const userDocRef = doc(db, 'users', userAuth.uid )
     

        const userSnapshot = await getDoc(userDocRef)
       

       if (!userSnapshot.exists()) {
            const {displayName, email}= userAuth
            const createAt= new Date()  

            try {
                await setDoc(userDocRef, 
                    {displayName, 
                    email,
                    createAt,
                     ...additionalInformration})

            }catch(err){
                console.log(err.message)

            }
        }

       return userDocRef

  }
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password ) return 
    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password ) return 
    return await signInWithEmailAndPassword(auth, email, password)

}