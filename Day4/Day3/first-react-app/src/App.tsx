import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Welcome } from './Welcome';

type appPropType = {}
type appStateType = {
  messageData:string
}
//type oneArgOneReturn = (args:string) =>void
class App extends Component<appPropType,appStateType>
{
  //classical way
  // constructor(props:appPropType)
  // {
  //   super(props)
  // }

  //jsx way
  state: Readonly<appStateType>={
    messageData: 'Initial Name'
  }
  updatemessage = (nameToBeChanged:string) =>{
    this.setState({
      messageData:nameToBeChanged
    })
    //window.alert('popup triggered')
  }
  render(): React.ReactNode {
    return (
           <div className="App">
            {<Welcome message={this.state.messageData} changeName={this.updatemessage}/>}
           </div>
         );
  }
}

export default App;
