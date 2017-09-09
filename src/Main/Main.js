import './Main.css';

import React, { Component } from 'react';
import { Source } from '../Source/Source';

export class Main extends Component {
  render() {
    const sources = [];
    this.props.sources.forEach(source => {
      sources.push(
        <Source className="source" key={source.id} source={source} />,
      );
    });

    return <svg className="Main">{sources}</svg>;
  }
}
