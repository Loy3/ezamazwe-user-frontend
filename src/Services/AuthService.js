
// Imports from the firebase config file
import { db, auth, storage } from './firebaseConfig';
import { addDoc, collection, doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, list, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid"; 



// Sign in function
export const SigninFunction = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        alert('Successfully logged in.')
        
        const user = userCredential.user;
        console.log("Successfully logged in.", user);
        return user;

    } catch (error) {     //Handle login error
        console.log("Failed to sign in:", error);
        alert('Incorrect email address or password. Re-enter the email address and password.');

    };

}