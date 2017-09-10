import './Main.css';

import React, { Component } from 'react';
import { Node } from '../Node/Node';

export class Main extends Component {
  render() {
    return (
      <svg className="Main">
        {this.props.nodes.map(node => {
          return <Node key={node.id} node={node} />;
        })}
      </svg>
    );
  }
}
