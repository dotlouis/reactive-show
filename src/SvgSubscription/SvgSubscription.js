import './SvgSubscription.css';

import React, { Component } from 'react';

// useful: https://stackoverflow.com/questions/42376972/best-way-to-import-observable-from-rxjs
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/throttleTime';

export class SvgSubscription extends Component {
  pulseSubscription;
  pulseTimeouts = [];
  PULSE_THROTTLE_TIME = 100;
  PULSE_ANIMATION_DURATION = 1000;

  constructor(props) {
    super(props);
    this.state = { pulseCircles: [] };
    this.coords = this.props.node.coords;
  }

  componentDidMount() {
    this.pulseSubscription = this.props.node.source.do(this.pulse).subscribe();
  }

  componentWillUnmount() {
    this.pulseSubscription.unsubscribe();
    this.pulseTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  pulse = () => {
    // set for deletion after the animation has ended
    this.pulseTimeouts.push(
      setTimeout(() => {
        const circles = [...this.state.pulseCircles];
        circles.shift();
        this.setState({ pulseCircles: circles });
      }, this.PULSE_ANIMATION_DURATION),
    );

    // add the pulse circle
    this.setState({
      pulseCircles: [
        ...this.state.pulseCircles,
        <circle
          className={`${this.props.type} pulse`}
          cx={this.coords.x}
          cy={this.coords.y}
          r={this.coords.w / 2}
          key={`${this.pulseTimeouts.length}`}
        />,
      ],
    });
  };

  onMouseEnterHandler = e => {
    this.props.onMouseEnter(e, this.props.node);
  };

  render() {
    return (
      <g>
        <g>{this.state.pulseCircles}</g>
        <circle
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
          className="SvgSubscription"
          cx={this.coords.x}
          cy={this.coords.y}
          r={this.coords.w / 2}
        />
      </g>
    );
  }
}
