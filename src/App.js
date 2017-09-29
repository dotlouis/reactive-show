import './App.css';

import React, { Component } from 'react';

import { Canvas } from './Canvas/Canvas';
import { SideBar } from './SideBar/SideBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  addNode = newNode => {
    this.setState({
      nodes: [...this.state.nodes, newNode],
    });
  };

  removeNode = nodeId => {
    this.setState({
      nodes: this.state.nodes.filter(node => node.id !== nodeId),
    });
  };

  render() {
    return (
      <div className="App">
        <SideBar
          {...this.state}
          onNodeAdded={this.addNode}
          onNodeRemoved={this.removeNode}
        />
        <Canvas {...this.state} />
      </div>
    );
  }
}
