
// Imports from the firebase config file
import { db, auth } from './firebaseConfig';
import { collection, collectionGroup, getDocs, query, where } from "firebase/firestore";


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
        // const queryData = query(collectionGroup(db, "courseCategory"), where("categoryType", "==", category));

        // Reference to the collection
        const myCollection = collection(db, 'collectionName');
        // Create a query where 'mapField.nestedField' is equal to 'value2'
        const queryData = query(myCollection, where('mapField.nestedField', '==', 'value2'));
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
export const FilterTopicsFunction = async (topic) => {
    try {
        const queryData = query(collectionGroup(db, "courseCategory"), where("subjectOrTopic", "==", topic));
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
