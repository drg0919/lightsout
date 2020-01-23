import React,{Component} from 'react';
import Board from './Board';
import './App.css';

class App extends Component{
render(){
  return (
    <div className="App">
      <h1 className="font-effect-neon"><span style={{'color': 'orange',
        'animation': 'blink 4s infinite'}}>Lights</span> <span style={{'color': 'blue',
        'animation': 'blink 6s infinite'}}>Out</span></h1>
      <Board />
    </div>
  );
}
}

export default App;
