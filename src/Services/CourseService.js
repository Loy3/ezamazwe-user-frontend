
// Imports from the firebase config file
import { db, auth } from './firebaseConfig';
import { collection, collectionGroup, getDocs, query, where } from "firebase/firestore";


// Filter courses with subject, category, grade
export const fetchCoursesFunction = async (subject, category, grade) => {
    
    try {
      // Step 1: Query to get the course document based on subject, category and grade
      const coursesQuery = query(collection(db, 'coursesCollection'), 
      where('courseCategory.subjectOrTopic', '==', subject),
      where('courseCategory.categoryType', '==', category),
      where('courseCategory.categoryGrade', '==', grade)
      );
      const coursesSnapshot = await getDocs(coursesQuery);

      if (coursesSnapshot.empty) {
        alert('No courses found for the subject:', subject);
        return;
      }

      coursesSnapshot.forEach(item=>console.log("Course:", item.data()))

      // Use the first document
      const courseDoc = coursesSnapshot.docs[0];
      const courseId = courseDoc.id;

      console.log("courseId:", courseId); 


      // Step 2: Query the courseContent subcollection for the selected course
      let items = [];
      const courseContentQuery = collectionGroup(db, 'courseContent');
      const courseContentSnapshot = await getDocs(courseContentQuery);

      courseContentSnapshot.forEach(item=>console.log("Course content:", item.data()))

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

  // Filtered document function
  export const FilteredDocFunction = async (subject, category, grade) => {
    try {
        // Step 1: Query to get the course document based on subject, category and grade
      const coursesQuery = query(collection(db, 'coursesCollection'), 
      where('courseCategory.subjectOrTopic', '==', subject),
      where('courseCategory.categoryType', '==', category),
      where('courseCategory.categoryGrade', '==', grade)
      );
      const coursesSnapshot = await getDocs(coursesQuery);

      coursesSnapshot.forEach(item=>console.log("Filtered doc:", item.data()))

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
                body: JSON.stringify({ firstName:firstName, lastName:lastName, email:email, subject:subject, message:message  }),
            });
        const response = await apiUrl.json();

        // Handle the response here
        console.log('Server message transmission response:', response);

    } catch (error) {
        console.log("Error sending message:", error);
    }
}


export const getCategoryData = async () =>{
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
        categoryData[doc.id] = {
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