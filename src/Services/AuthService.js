
// Imports from the firebase config file
import { db, auth, storage } from './firebaseConfig';
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, list, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";  //Import v4 from the uuid library and use it to randomise characters 
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';


// Upload image function
export const UploadImageFunction = async (imageUpload) => {

    let imageURL = '';

    try {
        const imageRef = ref(storage, `users/${imageUpload.name + v4()}`);

        // Upload image
        await uploadBytes(imageRef, imageUpload);

        // Get the image URL
        imageURL = await getDownloadURL(imageRef);

        alert('Image has been uploaded.');

        return imageURL;

    } catch (error) {
        console.error("Error uploading image:", error);
        alert('Error uploading image!');
        throw error; // Re-throw the error to propagate it if needed
    }

}

// Sign up function
export const SignupFunction = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);

        if (user) {
            try {
                const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/email-verification`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: user.email, uid: user.uid }),
                    });
                const response = await apiUrl.json();

                // Handle the response here
                console.log('Server Response:', response);

            } catch (error) {
                console.error('Error during email verification:', error);
            }
        }

        return user; // Return the user data

    } catch (error) {
        alert("Error signing up");
        console.error('Error signing up:', error.message);
        throw new Error(error.message); // Throw an error to be caught by the calling component
    }
};

// Check verification function
export const CheckVerificationFunction = async (email) => {

    try {
        const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/check-email-verification`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email  }),
            });
        const response = await apiUrl.json();

        // Handle the response here
        console.log('Server Verification Response:', response);

        // Show a success message or perform additional actions based on the response
        if (response.message) {
            console.log('Email for verification sent.');
            alert("Email for verification sent.");
        } else {
            console.error('Failed to send email for verification:', response.error);
            alert('Unable to send verification email.');
        }

    } catch (error) {
        console.log("Error sending verification email:", error);
    }
}


// Sign in function
export const SigninFunction = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        alert('Successfully logged in.')
        const user = userCredential.user;
        console.log("Successfully logged in.", user);
        return user; // Return the user data

    } catch (error) {     //Handle login error
        console.log("Failed to sign in:", error);
        alert('Wrong username/password entered. Re-enter username and password.');
    };
}


// Profile setup function
export const ProfileSetupFunction = async (userId, firstName, lastName, userEmail, phoneNum, imageURL) => {
    console.log("User id:", userId);

    try {
        const docRef = await setDoc(doc(db, 'users', userId), {
            user_id: userId,
            firstName: firstName,
            lastName: lastName,
            email: userEmail,
            phoneNum: phoneNum,
            imageURL: imageURL,
            role: "user",
            subscription: "unsubscribed",
        });
        console.log('Profile setup successfully:');
        alert("Profile setup successfully");

    } catch (error) {
        console.error('Error creating profile:', error.message);
        alert("Error creating profile");
    }
}


// Profile view function
export const GetUserDataFunction = async (userId) => {

    let user = null;

    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            user = docSnap.data();
            console.log("User data:", docSnap.data());
        } else {
            alert('Error', 'User data not found.');
        }

        return user;

    } catch (error) {
        console.log('Failed to fetch user data', error);
        alert('Error', 'Unable to fetch account information!');
    }
};

// Profile update function
export const ProfileUpdateFunction = async (userId, firstName, lastName, userEmail, phoneNum, imageURL) => {
    console.log("User id:", userId);

    try {

        const userInfo = {
            user_id: userId,
            firstName: firstName,
            lastName: lastName,
            email: userEmail,
            phoneNum: phoneNum,
            imageURL: imageURL,
            role: "user",
            subscription: "unsuscribed",
        };

        await setDoc(doc(db, 'users', userId), userInfo);

        console.log('Profile updated successfully:');
        alert('Profile updated successfully');

    } catch (error) {
        console.error('Error updating profile:', error.message);
    }
};

// Reset password function
export const ResetPasswordFunction = async (user, currentPassword, newPassword) => {
    console.log("User currently logged in:", user);

    try {
        // Re-authenticate the user with their current password
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);

        // If re-authentication is successful, update the password
        await updatePassword(user, newPassword);

        console.log('Password reset successful:', user);
        alert('Password reset successful.');

    } catch (error) {
        console.error('Error resetting password:', error.message);

        // Handle specific error cases, such as incorrect current password
        if (error.code === 'auth/wrong-password') {
            alert('Incorrect current password. Please try again.');
        } else {
            alert('Error resetting password. Please make sure you are logged in.');
        }

        throw error; // Re-throw the error to propagate it if needed
    }
};

// Password complexity validation function
export const isPasswordValid = (newPassword) => {

    // Define password complexity rules
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    // Check if the password meets all complexity rules
    return (
        newPassword.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialCharacter
    );
};

// Forgot password function
export const ForgotPasswordFunction = async (email) => {
    console.log("Forgot password", email);
    try {
        const url = 'https://edutech-app-eecfd.web.app/';
        const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/reset-password`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, url: url }),
            });
        const response = await apiUrl.json();

        alert("Email for password reset has been sent")
        // Handle the response here
        console.log('Server Response:', response);
    } catch (error) {
        console.log("Error resetting password", error);
    }

}
