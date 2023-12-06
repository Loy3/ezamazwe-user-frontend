
// Imports from the firebase config file
import { db, auth, storage } from './firebaseConfig';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
// import { addDoc, collection, doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
// import {
//     createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification
// } from 'firebase/auth';
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword
} from 'firebase/auth';
// import { getStorage, ref, uploadBytes, list, getDownloadURL } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
// import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';


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
export const CheckVerificationFunction = async (email) => {
    console.log(email);
    try {
        const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/email-verification`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });
        const response = await apiUrl.json();

        // Handle the response here
        // console.log('Server Verification Response:', response);

        // Show a success message or perform additional actions based on the response
        // console.log(response.message);
        if (response.message) {
            // console.log('Email verification initiated successfully.');
            alert("Email verification initiated successfully.")
        } else {
            console.error('Email verification failed:', response.error);
            alert('Email verification failed.');
        }

    } catch (error) {
        console.log("Error checking verification:", error);
    }

}

// Profile setup function
export const ProfileSetupFunction = async (userId, firstName, lastName, userEmail, phoneNum, image) => {
    // console.log("User id:", userId);

    try {
        await UploadImageFunction(image).then(async (result) => {
            // console.log("sssssss",result);
            const docRef = await setDoc(doc(db, 'users', userId), {
                user_id: userId,
                firstName: firstName,
                lastName: lastName,
                email: userEmail,
                phoneNum: phoneNum,
                image: result,
                role: "user",
                subscription: "unsubscribed",
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
    // const minLength = 8;
    // const hasUppercase = /[A-Z]/.test(newPassword);
    // const hasLowercase = /[a-z]/.test(newPassword);
    // const hasNumber = /\d/.test(newPassword);
    // const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    // return (
    //     newPassword.length >= minLength &&
    //     hasUppercase &&
    //     hasLowercase &&
    //     hasNumber &&
    //     hasSpecialCharacter
    // );
    var message = "";
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialChar = /[!@#$%^&*]/g;

    if (!newPassword.match(lowerCase)) {
        message = "Password should contains at least 1 or more lowercase letter(s)!";
    } else if (!newPassword.match(upperCase)) {
        message = "Password should contain at least 1 or more uppercase letter(s)!";
    } else if (!newPassword.match(numbers)) {
        message = "Password should contains numbers also!";
    } else if (newPassword.length < 8) {
        message = "Password length should be more than 8.";
    } else if (!newPassword.match(specialChar)) {
        message = "Password should contain at least 1 special character (e.g. !@#$%^&*).";
    } else {
        message = "Password is strong!";
    }

    return message

};

// Forgot password function
export const ForgotPasswordFunction = async (email) => {
    // console.log("Forgot password", email);
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

        alert("Email for password change has been sent")
        // Handle the response here
        console.log('Server Response:', response);
    } catch (error) {
        console.log("Error resetting password", error);
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
        alert('Unable to fetch account information!');
    }
};

// Profile update function
export const ProfileUpdateFunction = async (userId, firstName, lastName, userEmail, phoneNum, imageURL, role, subscription,imageName) => {
    // console.log("User id:", userId);

    try {
        const userImage = {
            imageURL: imageURL,
            imageName: imageName
        }

        const userInfo = {
            user_id: userId,
            firstName: firstName,
            lastName: lastName,
            email: userEmail,
            phoneNum: phoneNum,
            image: userImage,
            role: role,
            subscription: subscription,
        };
        // console.log(userInfo);

        await setDoc(doc(db, 'users', userId), userInfo);

        console.log('Profile updated successfully:');
        alert('Profile updated successfully');

    } catch (error) {
        console.error('Error updating profile:', error.message);
    }
};

// Update user subscription status
export const UpdateUserSubscriptionFunction = async (userId, subscription_end_date) => {
// console.log(userId);
    const today = new Date();   // Get today's date
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1 and format to two digits
    const day = String(today.getDate()).padStart(2, '0'); // Format day to two digits

    // const currentDate = `${year}-${month}-${day}`;
    const currentDate = today.toISOString().split('T')[0];

    // console.log(currentDate)
    // console.log("subscription_end_date:", subscription_end_date);

    // Compare dates and make all necessary changes
    if (currentDate >= subscription_end_date) {
        const userRef = doc(db, 'users', userId);

        const updates = {
            subscription: "unsubscribed",
            subscriptionStartDate: "",
            subscriptionEndDate: "",
        };

        try {
            await updateDoc(userRef, updates);
            console.log('User subscription updated successfully.');
        } catch (error) {
            console.error('Error updating user subscription:', error.message);
        }
    }

};
