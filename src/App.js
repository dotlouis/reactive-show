import './App.css';

import React, { Component } from 'react';

import { Main } from './Main/Main';
import { SideBar } from './SideBar/SideBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
  }

  createSource = () => {
    this.setState({
      sources: [
        ...this.state.sources,
        {
          id: this.state.sources.length.toString(),
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <SideBar onCreateSource={this.createSource} />
        <Main sources={this.state.sources} />
      </div>
    );
  }
}
