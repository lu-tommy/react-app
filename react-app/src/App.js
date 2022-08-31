import Hello from './hello';
import Counter from './counter';
import Logo from './logo';
import Welcome from './welcome';
import React, { Component }  from 'react';
function App() {
  return (
   <>
   <div style={{color:"grey"}}>
    <center>
      <a href='https://lu-tommy.github.io/react-app/' style={{textDecorationLine:'none'}}><Logo/></a>
    
    <Welcome/>
    <h1>counter</h1>
    <Counter/>
    <h2>
      More to come soon!
    </h2>
    </center>
    </div>
    </>
  );
}

export default App;
