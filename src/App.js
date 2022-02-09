import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "welcome uwu", result: " " };
    this.rando = this.rando.bind(this);
  }

  rando = () => {
    const options = this.state.text.split(" ");
    const result = options[Math.floor(Math.random() * options.length)];
    this.setState({ text: this.state.text, result: result });
    console.log(this.state);
  };
  render() {
    return (
      <div className="hero">
        <div className="container">
        <h2> Winner!</h2>
          <div className="randomPicker">
          
            <h1><span>{this.state.result}</span></h1>
            
          </div>
          <div className="inputContainer">
            <div>
              <h3>Enter words</h3>
             
              <input
                type="string"
                onChange={(event) => {
                  this.state.text = event.target.value;
                }}
              />
              <p>(separated with a space eg. name1 name2 name3)</p>
            </div>
          </div>
          <button onClick={this.rando}>Choose</button>
        </div>
      </div>
    );
  }
}

export default App;
