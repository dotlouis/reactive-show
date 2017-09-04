import React, { Component } from 'react';
import { Observable } from 'rxjs/Rx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.createObservable = this.createObservable.bind(this);
  }
  createObservable() {
    console.log('plop');
    const o = Observable.timer(1000, 1000);
    o.subscribe(n => console.log(this.timer++));
  }

  timer = 0;

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.createObservable}>Create Observable</button>
        </div>
        <div className="plop">{this.timer}</div>
      </div>
    );
  }
}

export default App;
