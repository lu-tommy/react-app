import React, { Component }  from 'react';

function Welcome() {
    let name  = window.prompt('Who is visiting: ')
    if (name === null||name === ""||name === " "){
        var wText = ('Welcome Stranger!')
    }
    else{
        wText = ('Welcome '+ name)
        
        
    }
    return (
     <>
     <h2>{wText}</h2>
      </>
    );
  }
  
  export default Welcome;
  
  