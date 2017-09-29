import './SvgSource.css';

import React, { Component } from 'react';

// useful: https://stackoverflow.com/questions/42376972/best-way-to-import-observable-from-rxjs
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/throttleTime';

export class SvgSource extends Component {
  pulseSubscription;
  pulseTimeouts = [];
  PULSE_THROTTLE_TIME = 100;
  PULSE_ANIMATION_DURATION = 1000;

  constructor(props) {
    super(props);
    this.state = { pulseCircles: [] };
    this.coords = this.props.node.coords;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onMouseEnterHandler = e => {
    this.props.onMouseEnter(e, this.props.node);
  };

  onClickHandler = e => {
    this.props.node.source.next(e);
  };

  render() {
    return (
      <g>
        <g>{this.state.pulseCircles}</g>
        <circle
          onMouseEnter={this.onMouseEnterHandler}
          onClick={this.onClickHandler}
          className="SvgSource"
          cx={this.coords.x}
          cy={this.coords.y}
          r={this.coords.w / 2}
        />
      </g>
    );
  }
}
