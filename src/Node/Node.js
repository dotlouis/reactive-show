import './Node.css';

import React, { Component } from 'react';

// useful: https://stackoverflow.com/questions/42376972/best-way-to-import-observable-from-rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/throttleTime';

export class Node extends Component {
  initialX = 100;
  initialY = 100;
  radius = 15;
  spacing = 200;

  pulseCircles = [];
  PULSE_THROTTLE_TIME = 100;
  PULSE_ANIMATION_DURATION = 1000;

  constructor(props) {
    super(props);
    this.x = this.props.node.id * (this.radius + this.spacing) + this.initialX;
    this.y = this.initialY;
    this.state = {
      pulseCircles: [],
    };
    console.log(this.props.node);
    this.props.node.source
      // .throttleTime(this.PULSE_THROTTLE_TIME)
      .do(this.pulse)
      .subscribe();
  }

  pulse = payload => {
    // set for deletion after the animation has ended
    setTimeout(() => {
      const circles = [...this.state.pulseCircles];
      circles.shift();
      this.setState({
        pulseCircles: circles,
      });
    }, this.PULSE_ANIMATION_DURATION);

    // add the pulse circle
    this.setState({
      pulseCircles: [
        ...this.state.pulseCircles,
        <circle
          className={`${this.props.type} pulse`}
          cx={this.x}
          cy={this.y}
          r={this.radius}
          key={`${payload}`}
        />,
      ],
    });
  };

  render() {
    return (
      <g>
        <g>{this.state.pulseCircles}</g>
        <circle
          className={this.props.type}
          cx={this.x}
          cy={this.y}
          r={this.radius}
        />
      </g>
    );
  }
}
