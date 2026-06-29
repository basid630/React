import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

function Course({ name, price, image, show, id, deleteCourse}) {
      //let purchased = false;
      const [purchased, setPurchased] = useState(false);

      function BuyCourse(discount){
        console.log(name,"purchased with",discount,"% discount");
        setPurchased(true);
      }
  
  return (
    name&&<div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={() => {BuyCourse(20)}}>Buy Now</button>
      <p>{purchased ? "Already Purchased" : "Get it Now"}</p>
      <button onClick={() => deleteCourse(id)}>Delete</button>
    </div>
  ); 
  }

Course.propTypes = {
  name : PropTypes.string,
  price : PropTypes.number,
  show : PropTypes.bool
}  
export default Course;