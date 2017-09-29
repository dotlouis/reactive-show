import './Canvas.css';

import React, { Component } from 'react';
import { SvgSource } from '../SvgSource/SvgSource';
import { SvgSubscription } from '../SvgSubscription/SvgSubscription';
import { Action } from '../Action/Action';

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openControls = (e, node) => {
    this.setState({
      nodeAction: node,
      isActionOpen: true,
    });
  };

  closeControls = () => {
    this.setState({ isActionOpen: false });
  };

  render() {
    return (
      <div className="CanvasWrapper">
        <svg className="SvgCanvas">
          {this.props.nodes
            .filter(node => node.label !== 'Subscription')
            .map((node, i) => (
              <SvgSource key={i} node={node} onMouseEnter={this.openControls} />
            ))}
          {this.props.nodes
            .filter(node => node.label === 'Subscription')
            .map((node, i) => (
              <SvgSubscription
                key={i}
                node={node}
                onMouseEnter={this.openControls}
              />
            ))}
        </svg>
        <div className="HtmlCanvas">
          <Action
            node={this.state.nodeAction}
            opened={this.state.isActionOpen}
            onMouseLeave={this.closeControls}
          />
        </div>
      </div>
    );
  }
}
