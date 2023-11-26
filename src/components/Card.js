import React from 'react';
import {FcLike} from "react-icons/fc";
import {FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCoursed = props.likedCoursed;
  let setLikedCourses = props.setLikedCourses;


  function clickHandler(){
    // logic
    if(likedCoursed.includes(course.id)){
      // phle se liked hua pda hai
      setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id) ) );
      toast.warning("Liked Removed")
    }
    else{
      // phle se like nhi h
      // insert krna h ye course liked course me
     if(likedCoursed === 0){
      setLikedCourses([course.id])
     }
     else{
      // non empty phle se
      setLikedCourses((prev) => [...prev ,course.id]);
     }
     toast.success("liked successfully")
    }
  }


  return (
    <div className='w-[300px] h-[330px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
         <div className='relative'>
            <img src={course.image.url} alt="" className=''/>
        

              <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
              grid place-items-center'>
                   <button onClick={clickHandler}>
                   {
                    likedCoursed.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                   }
                     
                     </button>
               </div>
          </div>

      <div className='p-4 '>
         <p className='text-white font-semibold leading-6 text-lg'>{course.title}</p>
         <p className='text-white mt-2'>
            {
                course.description.length > 100 ?
                (course.description.substr(0,100)) + "..." :
                (course.description)
            }
         </p>
      </div>

    </div>
  )
}

export default Card