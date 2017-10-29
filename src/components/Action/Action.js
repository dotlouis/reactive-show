import './Action.css';

import React from 'react';
import { connect } from 'react-redux';

class Action extends React.Component {
  onMouseLeaveHandler = () => {
    this.props.onCloseControls();
  };

  onClickActionHandler = action => {
    console.log(action);
    this.props.dispatch(action);
    this.props.onCloseControls();
  };

  render() {
    if (this.props.node && this.props.node.controls)
      return (
        <div
          className={`Action ${this.props.opened ? 'opened' : ''}`}
          style={{
            left: this.props.node.coords.x + 30,
            top: this.props.node.coords.y,
          }}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          {this.props.node.source.constructor.name}
          {this.props.node.controls.map((control, i) => {
            const action = control(this.props.node);
            return (
              <button onClick={() => this.onClickActionHandler(action)} key={i}>
                {action.type}
              </button>
            );
          })}
        </div>
      );
    return null;
  }
}

export default connect()(Action);
