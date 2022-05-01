import React from "react";
import { useGlobalContext } from "../Context";
import Image from "../images/illustration-thank-you.svg";

export const SuccessComponent = () => {
  const {value}=useGlobalContext()
  return (
    <>
      <div className="card-success-content">
        <img src={Image} alt="image" id="image" />
        <h3>You selected out {value} of 5</h3>
        <h1>Thank you!</h1>
        <p>
        
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};
