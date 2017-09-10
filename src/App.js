import './App.css';

import React, { Component } from 'react';

import { Main } from './Main/Main';
import { SideBar } from './SideBar/SideBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nodes: [] };
  }

  addNode = source => {
    this.setState({
      nodes: [...this.state.nodes, { id: this.state.nodes.length, source }],
    });
  };

  render() {
    return (
      <div className="App">
        <SideBar {...this.state} onSourceCreated={this.addNode} />
        <Main {...this.state} />
      </div>
    );
  }
}
