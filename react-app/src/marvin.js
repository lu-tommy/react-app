import React, { Component }  from 'react';
import './App.css';
const aboutMarvin ='Marvin is a really cool bot'
function Marvin() {
    return (
     <>
  
      <center>
        <h1>M.A.R.V.I.N</h1>
        <h3>Machine Application</h3>
        <textarea style={{ height:70 , width:250}} ></textarea>
        <h3><a href='#' onClick={()=>{ alert(aboutMarvin); }}>About MARVIN</a>
        <br></br>
        <a href='https://twitter.com/liltlu3'>TWITTER</a></h3>
      </center>
  
      </>
    );
  }
  function Aboutmarvin() {
    window.alert('good')
  }
  export default Marvin;
  