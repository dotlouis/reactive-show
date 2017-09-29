import './Action.css';

import React, { Component } from 'react';

export class Action extends Component {
  onMouseLeaveHandler = () => {
    this.props.onMouseLeave();
  };

  render() {
    if (this.props.node && this.props.node.actions)
      return (
        <div
          className={`Action ${this.props.opened ? 'opened' : ''}`}
          style={{
            left: this.props.node.coords.x + 30,
            top: this.props.node.coords.y,
          }}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          {this.props.node.label}
          {this.props.node.actions.map((action, i) => {
            return (
              <button onClick={action.callback} key={i}>
                {action.label}
              </button>
            );
          })}
        </div>
      );
    return null;
  }
}
