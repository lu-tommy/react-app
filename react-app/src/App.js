import Hello from './hello';
import Counter from './counter';
import Logo from './logo';
import Welcome from './welcome';
import Marvin from './marvin';
import React, { Component }  from 'react';
import 'bulma/css/bulma.min.css';

function App() {
  return (
   <> 
   
   <div style={{color:"grey"}}>
    <nav>
      <Logo/>
    </nav>
    <br/>
    <br/>
     <body>
    <center>

   
    <Marvin/>
    
    
    <h2>
 
      More to come soon!
    </h2>
    
    </center></body>
    </div>
    </>
  );
}

export default App;
