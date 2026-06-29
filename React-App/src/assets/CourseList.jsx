import Course from './course';
import { useState, useEffect } from 'react';

function CourseList() {
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

  function handleDelete(id){
    const newCourses = courses.filter((course) => course.id != id)
    setCourses(newCourses);
  }

  if(!courses){
    return <>
    {!error && <img src='/loading.gif'></img>}
    {error && <p>{error}</p>}
    </>;
  }

  const coursesList = courses.map((course) =>
    <Course
      key={course.id}
      name={course.name}
      image={course.image}
      price={course.price}
      deleteCourse={handleDelete}
      id={course.id}
    />
  )

  return(
  <>
  {coursesList}
  <button onClick={()=>{setDummy(false)}}>Dummy button</button>
  </>
  );
}


export default CourseList

//npx json-server --watch data/dummydata.json --port 3000 --static ./data