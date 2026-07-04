import useFetch from '../usefetch';
import Course from './course';

function CourseList() {
  
  const [courses,dummy, error] = useFetch();

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