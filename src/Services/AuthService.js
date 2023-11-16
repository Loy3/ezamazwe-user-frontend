
// Imports from the firebase config file
import { db, auth, storage } from './firebaseConfig';
import { addDoc, collection, doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification
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


// Sign up function
export const SignupFunction = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);
        alert('User signed up');
        return user; // Return the user data

    } catch (error) {
        alert("Error signing up");
        console.error('Error signing up:', error.message);
        throw new Error(error.message); // Throw an error to be caught by the calling component
    }
};

// Profile setup function
export const ProfileSetupFunction = async (userId, firstName, lastName, userEmail, phoneNum, image) => {
    console.log("User id:", userId);

    try {
       await UploadImageFunction(image).then(async (result) => {
            const docRef = await setDoc(doc(db, 'users', userId), {
                user_id: userId,
                firstName: firstName,
                lastName: lastName,
                email: userEmail,
                phoneNum: phoneNum,
                image: result,
                role: "user",
                subscription: "unsuscribed",
            });
            console.log('Profile setup successfully:', docRef);
            alert("Profile setup successfully");
        })

    } catch (error) {
        console.error('Error creating profile:', error.message);
    }
}

// Upload image function
export const UploadImageFunction = async (imageUpload) => {
    let imageURL = '';
    let imageName = imageUpload.name + v4();
    try {
        const imageRef = ref(storage, `users/${imageName}`);
        await uploadBytes(imageRef, imageUpload);
        imageURL = await getDownloadURL(imageRef);
        alert('Image has been uploaded.');

        const image = {
            imageURL: imageURL,
            imageName: imageName
        }
        return image;
    } catch (error) {
        console.error("Error uploading image:", error);
        alert('Error uploading image!');
    }
}