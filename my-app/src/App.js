import React from 'react';
import ReactDOM from 'react-dom';

const txt = 'uwu';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: txt}
     this.Rando = this.Rando.bind(this);
  }

  Rando(){
    
    const options = this.state.text.split(" ");
    const result = options[Math.floor(Math.random() * options.length)];
    const newText = result;
    this.setState({text: newText});
    console.log(newText);
  
  }
  render() {
    return (
      <div className="hero">
      <div className="container">
        <div className="randomPicker">
          <h1>
            Winner: <span>{this.state.text}</span>
          </h1>
        </div>
        <div className="inputContainer">
          <div>
            <h3>Choices:</h3>
            <input type="string" 
            onChange={ (event) => { this.state.text = event.target.value }}
            />
          </div>
        </div>
        <button onClick={this.Rando} >Choose</button>
      </div>
    </div>
    );
  }
}

export default App;
