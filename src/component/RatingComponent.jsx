import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import Star from "../images/icon-star.svg";


export const RatingComponent = () => {
  const arr=[1,2,3,4,5]
  const {value,setValue,setSubmit}=useGlobalContext()

  const handlecheck=(index)=>{
    setValue(index+1)
  }
  
  const handlesubmit=()=>{
    setSubmit(true)
  }

  return (
    <>
    <div className="card-rating-content">

      <img src={Star} alt="icon" />
      <h1>How did we do??</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

        <div className="btn-container">
       {arr.map((marr ,index)=>{
         return <button onClick={()=>handlecheck(index)} key={index} >{marr}</button>
        })}
        </div>

        <button onClick={handlesubmit}>Submit</button>
    </div>
    </>
  );
};
