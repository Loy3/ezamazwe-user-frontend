
// Imports from the firebase config file
import { db, auth } from './firebaseConfig';
import { collection, collectionGroup, doc, getDoc, getDocs, query, where } from "firebase/firestore";


// Filter courses with subject, category, grade
export const fetchCoursesFunction = async (subject, category, grade) => {

    try {
        // Step 1: Query to get the course document based on subject, category and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category),
            where('subject', '==', subject),
            where('grade', '==', grade)
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
        const courseContentQuery = collectionGroup(db, 'lessons');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
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

// Filtered document function
export const FilteredDocFunction = async (category, subject, grade) => {
    // console.log(category, subject, grade);
    try {
        // Step 1: Query to get the course document based on subject, category and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category.toLowerCase()),
            where('subject', '==', subject),
            where('grade', '==', grade)
        );
        const coursesSnapshot = await getDocs(coursesQuery);

        // coursesSnapshot.forEach(item => console.log("Filtered doc:", item.data()))

        const filteredDocContent = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        return filteredDocContent;

    } catch (error) {
        console.log("Error fetching document:", error);
    }
}


// Fetch Courses function
export const ViewCoursesFunction = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "courses"));

        const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        // console.log("All courses data:", courses);

        return courses;

    } catch (error) {
        console.log("Failed to fetch data", error);
    }
}

export const SearchBarCoursesFunction = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "courses"));

        const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        // console.log("All courses data:", courses);

        return courses;

    } catch (error) {
        console.log("Failed to fetch data", error);
    }
}

// Filter category function
export const FilterCategoryFunction = async (category) => {
    // console.log("category",category);
    try {
        // Reference to the collection
        const coursesCollection = collection(db, 'courses');

        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('courseCategory', '==', category));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data());
            items.push(doc.data());
        });

        // console.log("View filtered category data: ", items);

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
            // console.log(doc.data());
            items.push(doc.data());
        });

        // console.log("View filtered data: ", items);

        return items;

    } catch (error) {
        console.log("Failed to fetch filtered courses: ", error);
    }
}

// Filter Grades function
export const FilterGradeFunction = async (grade) => {
    try {

        // Reference to the collection
        const coursesCollection = collection(db, 'courses');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('grade', '==', grade));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data());
            items.push(doc.data());
        });

        // console.log("Data filtered with grade: ", items);

        return items;

    } catch (error) {
        console.log("Failed to fetch filtered grade data: ", error);
    }
}

// Filter Grades function
export const FilterSubscriptionFunction = async (subscription) => {
    console.log(subscription);
    try {

        // Reference to the collection
        const coursesCollection = collection(db, 'courses');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('courseType', '==', subscription));
        const querySnapshot = await getDocs(queryData);
        let items = [];

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data());
            items.push(doc.data());
        });

        // console.log("Data filtered with subscription: ", items);

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
        // console.log('Server message transmission response:', response);

    } catch (error) {
        console.log("Error sending message:", error);
    }
}


export const getCategoryData = async () => {
    //get data from database
    // console.log("before try");
    try {
        const data = await getDocs(collection(db, "Content"));
        //   console.log("after get docs", data);
        const filtereddata = data.docs.map((doc) => ({
            //this fucntion  returns the values in the collection
            ...doc.data(),
            id: doc.id
        }));
        const categoryData = {};
        data.docs.forEach((doc) => (
            categoryData[doc.id.toLowerCase()] = {
                ...doc.data(),
                id: doc.id
            }));
        //   console.log("after Filtered data");
        // setAdminList(filtereddata);
        // setShoppingList(data);
        // console.log(filtereddata[0].subjects['Grade_1']);
        //   console.log(categoryData);
        return categoryData
    } catch (error) {
        console.error("Error fetching collection", error);
    }
}


export const PaymentFunction = async (firstName, lastName, email, phoneNum) => {
    try {
        const paymentData = {
            fName: firstName,
            lName: lastName,
            email: email,
            phone: phoneNum
        }
        const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/payment`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            });
        const response = await apiUrl.json();

        // Handle the response here
        // console.log('Server message transmission response:', response);
        // console.log("data", paymentData);
    } catch (error) {
        console.log("Error sending message:", error);
    }


}

// Fetch Courses function
export const CourseFullViewFunction = async (courseId) => {
    try {
        const courseDocRef = doc(db, "courses", courseId);
        const querySnapshot = await getDocs(collection(courseDocRef, "lessons"));

        const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        // console.log("All courses data:", courses);

        return courses;

    } catch (error) {
        console.log("Failed to fetch data", error);
    }
}

export const CourseTopicsFunction = async (courseId, lessonId) => {
    // console.log(courseId, lessonId);
    try {
        // const courseDocRef = doc(db, "courses", courseId);
        // const lessonDocRef = doc(courseDocRef, lessonId);
        // const querySnapshot = await getDocs(collection(lessonDocRef, "topics"));

        // const courses = querySnapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     ...doc.data()
        // }));

        const courseDocRef = doc(db, "courses", courseId);
        const lessonDocRef = doc(courseDocRef, "lessons", lessonId);
        const topicsCollectionRef = collection(lessonDocRef, "topics");
        const querySnapshot = await getDocs(topicsCollectionRef);

        // const courses = querySnapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     ...doc.data()
        // }));

        const courses = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        // console.log("All courses datas:", courses);

        return courses;

    } catch (error) {
        console.log("Failed to fetch data", error);
    }
}


export const filterAllOptionsFunction = async (category, subject, grade, subscription) => {
    console.log("category", category);
    console.log("subject", subject);
    console.log("grade:", grade);
    console.log("subscription", subscription);
    try {
        // Step 1: Query to get the course document based on subject, category, and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category),
            where('subject', '==', subject),
            where('grade', '==', grade),
            where('courseType', '==', subscription)
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

        const filteredDocContent = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered doc", filteredDocContent);
        // return filteredDocContent;
        // Step 2: Query the lessons subcollection for the selected course
        let items = [];
        const courseContentQuery = collectionGroup(db, 'lessons');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

        const contentDoc = courseContentSnapshot.docs[0];
        const contentId = contentDoc.id;

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered courses:", filteredCourseContent);

        // Step 3: Query the "topics" subcollection for the selected course
        const topicsQuery = query(collection(db, 'courses', courseId, 'lessons', contentId, 'topics'));
        const topicsSnapshot = await getDocs(topicsQuery);

        // Map over topics documents
        const topicsData = topicsSnapshot.docs
            .map((topicDoc) => ({
                topicId: topicDoc.id,
                ...topicDoc.data()
            }));

        console.log("Topics data:", topicsData);

        const course = {
            filteredDocContent,
            filteredCourseContent,
            topicsData
        }

        return course;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export const fetchCourseData = async (id) => {
    console.log('inside course')
    let courseData = null;
    try {
        // Step 1: Query to get the course document based on subject, category, and grade
        const docRef = doc(db, `courses/${'5X65Y28ng5H9qDVIZgXY'}`);
        await getDoc(docRef).then(data => {
            courseData = { ...data.data(), id: data.id }
            // console.log('dataaaaa', courseData)
        })
        

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        console.log("CourseData", courseData)
        return courseData
    }
};


export const fetchCourseLessons = async (courseId) => {
    console.log('inside lessons',courseId)
    const lessonsRef = collection(db, `courses/${courseId}/lessons`);
    const coursesSnap = await getDocs(lessonsRef);
    const courseLessons = []
    coursesSnap.forEach(item => {
        courseLessons.push({ ...item.data(), id: item.id })
    })
    console.log("Lessons",courseLessons)
    return courseLessons;
}

export const fetchLessonTopics = async (courseId, lessonId) => {
    const topicRef = collection(db, `courses/${courseId}/lessons/${lessonId}/topics`);
    const topicsSnap = await getDocs(topicRef);
    const lessonTopics =  []
    topicsSnap.forEach(item => {
        lessonTopics.push({...item.data()})
    })
    console.log("Topics", lessonTopics)
    return lessonTopics
}



export const filterSubjectCategoryGrade = async (category, subject, grade) => {
    try {
        // Step 1: Query to get the course document based on subject, category, and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category),
            where('subject', '==', subject),
            where('grade', '==', grade),
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

        const filteredDocContent = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered doc", filteredDocContent);
        return filteredDocContent;
        // Step 2: Query the lessons subcollection for the selected course
        let items = [];
        const courseContentQuery = collectionGroup(db, 'lessons');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

        const contentDoc = courseContentSnapshot.docs[0];
        const contentId = contentDoc.id;

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered courses:", filteredCourseContent);

        // Step 3: Query the "topics" subcollection for the selected course
        const topicsQuery = query(collection(db, 'courses', courseId, 'lessons', contentId, 'topics'));
        const topicsSnapshot = await getDocs(topicsQuery);

        // Map over topics documents
        const topicsData = topicsSnapshot.docs
            .map((topicDoc) => ({
                topicId: topicDoc.id,
                ...topicDoc.data()
            }));

        console.log("Topics data:", topicsData);

        const course = {
            filteredDocContent,
            filteredCourseContent,
            topicsData
        }

        return course;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const filterCategoryAndSubject = async (category, subject) => {
    try {
        // Step 1: Query to get the course document based on subject, category, and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category),
            where('subject', '==', subject),
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

        const filteredDocContent = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered doc", filteredDocContent);
        return filteredDocContent;
        // Step 2: Query the lessons subcollection for the selected course
        let items = [];
        const courseContentQuery = collectionGroup(db, 'lessons');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

        const contentDoc = courseContentSnapshot.docs[0];
        const contentId = contentDoc.id;

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered courses:", filteredCourseContent);

        // Step 3: Query the "topics" subcollection for the selected course
        const topicsQuery = query(collection(db, 'courses', courseId, 'lessons', contentId, 'topics'));
        const topicsSnapshot = await getDocs(topicsQuery);

        // Map over topics documents
        const topicsData = topicsSnapshot.docs
            .map((topicDoc) => ({
                topicId: topicDoc.id,
                ...topicDoc.data()
            }));

        console.log("Topics data:", topicsData);

        const course = {
            filteredDocContent,
            filteredCourseContent,
            topicsData
        }

        return course;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const filterCategory = async (category) => {
    try {
        // Step 1: Query to get the course document based on subject, category, and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category),
        );
        const coursesSnapshot = await getDocs(coursesQuery);

        if (coursesSnapshot.empty) {
            alert('No courses found for the subject:', category);
            return;
        }

        coursesSnapshot.forEach(item => console.log("Course:", item.data()))

        // Use the first document
        const courseDoc = coursesSnapshot.docs[0];
        const courseId = courseDoc.id;

        console.log("courseId:", courseId);

        const filteredDocContent = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered doc", filteredDocContent);
        return filteredDocContent;
        // Step 2: Query the lessons subcollection for the selected course
        let items = [];
        const courseContentQuery = collectionGroup(db, 'lessons');
        const courseContentSnapshot = await getDocs(courseContentQuery);

        courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

        const contentDoc = courseContentSnapshot.docs[0];
        const contentId = contentDoc.id;

        // Filter course content documents based on courseId
        const filteredCourseContent = courseContentSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        console.log("Filtered courses:", filteredCourseContent);

        // Step 3: Query the "topics" subcollection for the selected course
        const topicsQuery = query(collection(db, 'courses', courseId, 'lessons', contentId, 'topics'));
        const topicsSnapshot = await getDocs(topicsQuery);

        // Map over topics documents
        const topicsData = topicsSnapshot.docs
            .map((topicDoc) => ({
                topicId: topicDoc.id,
                ...topicDoc.data()
            }));

        console.log("Topics data:", topicsData);

        const course = {
            filteredDocContent,
            filteredCourseContent,
            topicsData
        }

        return course;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};






// Filtered document function
export const FilteredDocFunction1 = async (subject, category, grade) => {
    try {
        // Step 1: Query to get the course document based on subject, category and grade
        const coursesQuery = query(collection(db, 'courses'),
            where('courseCategory', '==', category),
            where('subject', '==', subject),
            where('grade', '==', grade)
        );
        const coursesSnapshot = await getDocs(coursesQuery);

        coursesSnapshot.forEach(item => console.log("Filtered doc:", item.data()))

        const filteredDocContent = coursesSnapshot.docs
            .map((contentDoc) => ({
                contentId: contentDoc.id,
                ...contentDoc.data()
            }));

        return filteredDocContent;

    } catch (error) {
        console.log("Error fetching document:", error);
    }
}

// Fetch all courses function
export const ViewCoursesFunction1 = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "courses"));

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

// Fetch Courses function
// export const ViewCoursesFunction = async () => {
//     try {
//         const querySnapshot = await getDocs(collection(db, "courses"));

//         const courseData = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data()
//         }));

//         console.log("All courses data:", courseData);

//         const contentDoc = querySnapshot.docs[0];
//         const contentId = contentDoc.id;

//         // Step 2: Query the lessons subcollection for the course
//         const courseContent = collectionGroup(db, 'lessons');
//         const courseContentSnapshot = await getDocs(courseContent);

//         courseContentSnapshot.forEach(item => console.log("Course content:", item.data()))

//         // Filter course content documents based on courseId
//         const fetchedCourseContent = courseContentSnapshot.docs
//             .map((contentDoc) => ({
//                 contentId: contentDoc.id,
//                 ...contentDoc.data()
//             }));

//         console.log("Fetched courses:", fetchedCourseContent);

//         const courseDoc = courseContentSnapshot.docs[0];
//         const courseId = courseDoc.id;


//         // Step 3: Query the "topics" subcollection for the selected course
//         const topicsQuery = query(collection(db, 'courses', courseId, 'lessons', contentId, 'topics'));
//         const topicsSnapshot = await getDocs(topicsQuery);

//         // Map over topics documents
//         const topicsData = topicsSnapshot.docs
//             .map((topicDoc) => ({
//                 topicId: topicDoc.id,
//                 ...topicDoc.data()
//             }));

//         console.log("Topics data:", topicsData);

//         const course = {
//             courseData, 
//             fetchedCourseContent,
//             topicsData
//         }

//         return course;

//     } catch (error) {
//         console.log("Failed to fetch data", error);
//     }
// }



export const SearchBarCoursesFunction1 = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "courses"));

        const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        // console.log("All courses data:", courses);

        return courses;

    } catch (error) {
        console.log("Failed to fetch data", error);
    }
}

// Filter category function
export const FilterCategoryFunction1 = async (category) => {
    try {
        // Reference to the collection
        const coursesCollection = collection(db, 'courses');

        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('courseCategory', '==', category));
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
export const FilterTopicFunction1 = async (topic) => {
    try {
        // const queryData = query(collectionGroup(db, "courseCategory"), where("subjectOrTopic", "==", topic));
        // Reference to the collection
        const coursesCollection = collection(db, 'courses');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(coursesCollection, where('subject', '==', topic));
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
export const FilterGradeFunction1 = async (grade) => {
    try {

        // Reference to the collection
        const coursesCollection = collection(db, 'courses');
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
export const FilterSubscriptionFunction1 = async (subscription) => {
    try {

        // Reference to the collection
        const coursesCollection = collection(db, 'courses');
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
export const FetchUserCoursesFunction1 = async (userId) => {
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
