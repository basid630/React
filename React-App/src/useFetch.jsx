import { useState, useEffect } from 'react';

const useFetch = ()=> {

    const [courses, setCourses] = useState(null);
    const [dummy, setDummy] = useState(true);
    const [error, setError] = useState(null);


      useEffect(()=>{
        setTimeout(() => {
        fetch('http://localhost:3000/courses')
        .then(response => {
            if(!response.ok){
                throw Error("couldn't retrieve data");
            }
            console.log(response)
            return response.json()
        }).then(data => setCourses(data))
        .catch((error) => {
            console.log(error.message);
            setError(error.message);
        })
    }, 1000)
    },[]);

    return [courses,dummy, error];
}
export default useFetch;