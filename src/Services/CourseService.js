
// Imports from the firebase config file
import { db, auth } from './firebaseConfig';
import { collection, collectionGroup, getDocs, query, where } from "firebase/firestore";

// Filter courses with subject, category, grade, subscription 
export const fetchCoursesFunction = async (subject, category, grade, subscription) => {

    try {
        // Step 1: Query to get the course document based on subject, category and grade
        const coursesQuery = query(collection(db, 'coursesCollection'),
            where('courseCategory.subjectOrTopic', '==', subject),
            where('courseCategory.categoryType', '==', category),
            where('courseCategory.categoryGrade', '==', grade),
            where('coursePrice', '==', subscription)
        );
        const coursesSnapshot = await getDocs(coursesQuery);

        if (coursesSnapshot.empty) {
            alert('No courses found for the subject:', subject);
            return;
        }

        coursesSnapshot.forEach(item => console.log("Course:", item.data()))

        // Use the first document
        const courseDoc = coursesSnapshot.docs[0];
        const courseId = courseDoc.id;

        console.log("courseId:", courseId);


        // Step 2: Query the courseContent subcollection for the selected course
        let items = [];
        const courseContentQuery = collectionGroup(db, 'courseContent');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
            // .filter((contentDoc) => contentDoc.data().courseId === courseId)
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered courses:", filteredCourseContent);

        return filteredCourseContent;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


// Course details function
export const fetchCourseDetailsFunction = async (subject, category, grade, subscription) => {

    try {
        // Step 1: Query to get the course document based on subject, category and grade
        const coursesQuery = query(collection(db, 'coursesCollection'),
            where('courseCategory.subjectOrTopic', '==', subject),
            where('courseCategory.categoryType', '==', category),
            where('courseCategory.categoryGrade', '==', grade),
            where('coursePrice', '==', subscription)
        );
        const coursesSnapshot = await getDocs(coursesQuery);

        if (coursesSnapshot.empty) {
            alert('No courses found for the subject:', subject);
            return;
        }

        coursesSnapshot.forEach(item => console.log("Course:", item.data()))

        // Use the first document
        const courseDoc = coursesSnapshot.docs[0];
        const courseId = courseDoc.id;

        const filteredCourseDetails = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered course details:", filteredCourseDetails);
        console.log("courseDoc", courseDoc);
        console.log("courseId:", courseId);

        return filteredCourseDetails;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};



// Filter courses with subject, category, grade, subscription & return both course content and course details
export const fetchCoursesFunction2 = async (subject, category, grade, subscription) => {
    try {
        // Step 1: Query to get the course document based on subject, category, and grade
        const coursesQuery = query(collection(db, 'coursesCollection'),
            where('courseCategory.subjectOrTopic', '==', subject),
            where('courseCategory.categoryType', '==', category),
            where('courseCategory.categoryGrade', '==', grade),
            where('coursePrice', '==', subscription)
        );
        const coursesSnapshot = await getDocs(coursesQuery);

        if (coursesSnapshot.empty) {
            alert('No courses found for the subject:', subject);
            return;
        }

        coursesSnapshot.forEach(item => console.log("Course:", item.data()));

        // Use the first document
        const courseDoc = coursesSnapshot.docs[0];
        const courseId = courseDoc.id;

        const filteredCourseDetails = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered course details:", filteredCourseDetails);
        console.log("courseId:", courseId);

        // Step 2: Query the courseContent subcollection for the selected course
        const courseContentQuery = collectionGroup(db, 'courseContent');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()));

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
            // .filter((contentDoc) => contentDoc.data().courseId === courseId)
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered course content:", filteredCourseContent);

        // Return an object with both snapshots
        return {
            filteredCourseDetails: filteredCourseDetails,
            filteredCourseContent: filteredCourseContent
        };

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
//const { coursesSnapshot, filteredCourseContent } = await fetchCoursesFunction(subject, category, grade, subscription);




// Fetch Courses function
export const ViewCoursesFunction = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "coursesCollection"));

        const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("All courses data:", courses);

        return courses;

    } catch (error) {
        console.log("Failed to fetch data", error);
    }
}

// Filter category function
export const FilterCategoryFunction = async (category) => {
    try {
        // Reference to the collection
        const coursesCollection = collection(db, 'coursesCollection');

        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('courseCategory.categoryType', '==', category));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            items.push(doc.data());
        });

        console.log("View filtered category data: ", items);

        return items;

    } catch (error) {
        console.log("Failed to fetch filtered category data: ", error);
    }
}

// Filter topics function
export const FilterTopicFunction = async (topic) => {
    try {
        // const queryData = query(collectionGroup(db, "courseCategory"), where("subjectOrTopic", "==", topic));
        // Reference to the collection
        const coursesCollection = collection(db, 'coursesCollection');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('courseCategory.subjectOrTopic', '==', topic));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            items.push(doc.data());
        });

        console.log("View filtered data: ", items);

        return items;

    } catch (error) {
        console.log("Failed to fetch filtered courses: ", error);
    }
}

// Filter Grades function
export const FilterGradeFunction = async (grade) => {
    try {

        // Reference to the collection
        const coursesCollection = collection(db, 'coursesCollection');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('grade', '==', grade));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            items.push(doc.data());
        });

        console.log("Data filtered with grade: ", items);

        return items;

    } catch (error) {
        console.log("Failed to fetch filtered grade data: ", error);
    }
}

// Filter Grades function
export const FilterSubscriptionFunction = async (subscription) => {
    try {

        // Reference to the collection
        const coursesCollection = collection(db, 'coursesCollection');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('coursePrice', '==', subscription));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            items.push(doc.data());
        });

        console.log("Data filtered with subscription: ", items);

        return items;

    } catch (error) {
        console.log("Failed to fetch filtered subscription data: ", error);
    }
}

// User courses function
export const FetchUserCoursesFunction = async (userId) => {
    try {
        const coursesRef = collection(db, `users/${userId}/userCourses`);
        const snapshot = await getDocs(coursesRef);

        const coursesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return coursesData;

    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

// contact us function
export const ContactUsFunction = async (firstName, lastName, email, subject, message) => {
    try {

        const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/send-contactus-email`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, subject: subject, message: message }),
            });
        const response = await apiUrl.json();

        // Handle the response here
        console.log('Server message transmission response:', response);

    } catch (error) {
        console.log("Error sending message:", error);
    }
}


// Fetch or View Members function
export const ViewMembersFunction = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "admins"));

        const members = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("All members data:", members);

        return members;

    } catch (error) {
        console.log("Failed to fetch members data", error);
    }
}

// Payment function
export const PaymentFunction = async (cardName, cardNumber, expiryDate, secureCode, email) => {
    try {

        const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/subscribe`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cardName: cardName,
                    cardNumber: cardNumber,
                    expiryDate: expiryDate,
                    secureCode: secureCode,
                    email: email,
                }),
            });
        const response = await apiUrl.json();

        // Handle the response here
        console.log('Server payment process response:', response);

    } catch (error) {
        console.log("Error making payment:", error);
    }
}