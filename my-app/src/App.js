import "./css/styles.css";
import React, { useState } from "react";


function App() {
  const state = {
    text: "uwu daddy"
};
  function uwuDaddy(){
    const options = state.text.split(" ");
        const result = options[Math.floor(Math.random() * options.length)];
        console.log(result);
        return result;
  }
  return (
    <div className="hero">
      <div className="container">
        <div className="randomPicker">
          <h1>
            Random: <span>{state.text}</span>
          </h1>
        </div>
        <div className="inputContainer">
          <div>
            <h3>UWUUWUWUWUWUUWUWUWUUWU:</h3>
            <input type="string" 
            onChange={ (event) => { state.text = event.target.value } }
            />
          </div>
        </div>
        <button onClick={uwuDaddy} >Random</button>
      </div>
    </div>
  );
}

export default App;
