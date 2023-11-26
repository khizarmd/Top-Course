import React, { useState } from 'react';
import Card from "./Card"

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCoursed , setLikedCourses] = useState([]);
  
 function getCourse(){
    if(category === "All"){
        
      let allcourses = [];

      Object.values(courses).forEach( array =>{
      array.forEach(courseData =>{
        allcourses.push(courseData)
    
      })
    })
       return allcourses;
        }
 else{

       return courses[category];
      }
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 mb-4'>
         {
          getCourse().map((course) => {
            return(<Card key={course.id}
             course = {course} 
             likedCoursed = {likedCoursed}
             setLikedCourses={setLikedCourses}/>)
          })

          }
        
    </div>
  )
}

export default Cards