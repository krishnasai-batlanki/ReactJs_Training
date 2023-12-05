import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './Welcome';

function App() {
  let msg ="Welcome to React !!!!"
  let changed = "Message changed!!!!!!"
  function changeMessage(newMessage:string)
  {
   // window.alert(msg)
    msg = changed
   // window.alert(msg)
  }
  function changeName(nameToBeChanged:string)
  {
    window.alert(nameToBeChanged)
  }
  return (
    <div className="App">
     {<Welcome message={msg} changeName={changeName}/>}
    </div>
  );
}

export default App;
