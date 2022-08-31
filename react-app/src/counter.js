import { useState } from "react";
import React, { Component }  from 'react';

const Counter = () => {
    const[num,setNum] = useState(0)
    const handleClick = () => {
        setNum(num+1)
    }
    return (
    <>
      <center>
        <button onClick={handleClick}>{num}</button>
      </center>
      </>
    );
  }
  export default Counter;
  