import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: "welcome uwu", 
    result: "welcome"};
     this.rando = this.rando.bind(this);
  }

  rando = () => {
    
    const options = this.state.text.split(" ");
    const result = options[Math.floor(Math.random() * options.length)];
    this.setState({text: this.state.text, result: result});
    console.log(this.state);
    
  }
  render() {
    return (
      <div className="hero">
      <div className="container">
        <div className="randomPicker">
          <h1>
          Winner: <span>{this.state.result}</span>
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
        <button onClick={this.rando} >Choose</button>
      </div>
    </div>
    );
  }
}

export default App;
