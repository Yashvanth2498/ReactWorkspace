//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App= props =>{
  const [personsState,setPersonsState]=useState({
    persons:[
      {name:"max", age:28},
      {name:"manu", age:24},
      {name:"roy", age:18}
    ],
    otherState: 'some other value'
  });
//useState({otherState:'some other state'})

  const switchNameHandler = ( ) =>{
    //console.log('Was Clicked'); 
    //dont do this:this.state.persons[0].name='John';
    setPersonsState({
      persons:[
        {name:"john", age:28},
        {name:"manu", age:24},
        {name:"roy", age:21}
  
      ] 
    });
  
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>hai</h1>
      <p>this is really working</p>
      <h2>This is Yashvanth</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
    
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies:Racing</Person>
    </div>
    
  );
  }
  export default App;


/*class App extends Component{
  render()
  {
  return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Does this work now?'));
}
}*/