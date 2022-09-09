import React, { Component }  from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

const aboutMarvin ='Marvin is a really cool bot'



function Marvin() {
    return (
     <>
  
   
        <h1 class='title'>M.A.R.V.I.N</h1>
        <h3  style={{textDecoration:"None"}}><a class='button is-info'href='#' onClick={()=>{ alert(aboutMarvin); }}>About MARVIN</a>

        <h2>Machine Application</h2>
      <div class='control is-loading is-large'>
        <textarea class='textarea is-large has-fixed-size' rows="3" readOnly></textarea>
      </div>


     <br/>
     <a class='button is-danger' href='https://twitter.com/liltlu3'>RANDOM</a>
     <br/>
        <a class='button is-link' href='https://twitter.com/liltlu3'>TWITTER</a>
        <a class='button is-link' href='https://twitter.com/liltlu3'>DISCORD</a>
        
        
        
        
        </h3>
  
  
      </>
    );
  }
  function Aboutmarvin() {
    window.alert('good')
  }
  export default Marvin;
  