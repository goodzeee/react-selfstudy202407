import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Bye from './components/Bye';
import Greet from './components/Greet';


function App() {
  return (
    <>
    {/* export한 Hello 태그 렌더링 시킴 */}
       <Hello /> 
       <Bye />
       <Greet />
    </>
  );
}

export default App;
