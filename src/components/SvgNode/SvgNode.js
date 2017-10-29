import './SvgNode.css';

import React from 'react';

// useful: https://stackoverflow.com/questions/42376972/best-way-to-import-observable-from-rxjs
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/throttleTime';

export class SvgNode extends React.Component {
  pulseSubscription;
  pulseTimeouts = [];
  PULSE_THROTTLE_TIME = 100;
  PULSE_ANIMATION_DURATION = 1000;

  constructor(props) {
    super(props);
    this.state = { pulseCircles: [] };
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

    const { coords } = this.props.node;

    // add the pulse circle
    this.setState({
      pulseCircles: [
        ...this.state.pulseCircles,
        <circle
          className={`${this.props.type} pulse`}
          cx={coords.x}
          cy={coords.y}
          r={coords.w / 2}
          key={`${this.pulseTimeouts.length}`}
        />,
      ],
    });
  };

  onMouseEnterHandler = e => {
    this.props.onOpenControls(this.props.node);
  };

  onClickHandler = e => {
    this.props.node.onClick(e);
  };

  render() {
    const { coords } = this.props.node;

    return (
      <g>
        <g>{this.state.pulseCircles}</g>
        <circle
          onMouseEnter={this.onMouseEnterHandler}
          onClick={this.onClickHandler}
          className={`SvgNode ${this.props.node.type}`}
          cx={coords.x}
          cy={coords.y}
          r={coords.w / 2}
        />
      </g>
    );
  }
}
