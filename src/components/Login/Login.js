import React, { useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { initializeApp } from '@firebase/app';
import { userContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [loggedInUser , setLoggedInUser] = useContext(userContext)

       const navigate = useNavigate()
       const location = useLocation()
       const from = location.state?.from?.pathname || '/'
       
    

    const hendleGoogleSigIn =()=>{
    const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const {displayName, email} = result.user;
            const logedInUser = {name:displayName , email}
            setLoggedInUser(logedInUser)
            navigate(from, {replace: true});
            
           
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={hendleGoogleSigIn}>Google SigIn</button>
        </div>
    );
};

export default Login;