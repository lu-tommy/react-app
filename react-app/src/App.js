import Hello from './hello';
import Counter from './counter';
import Logo from './logo';
import Welcome from './welcome';
import Marvin from './marvin';
import React, { Component }  from 'react';
function App() {
  return (
   <>
   <div style={{color:"grey"}}>
    <center>
    <Logo/>
    <Marvin/>
    
    <h1>counter</h1>
    
    <h2>
      <Welcome/>
      <Counter/>
      More to come soon!
    </h2>
    
    </center>
    </div>
    </>
  );
}

export default App;
