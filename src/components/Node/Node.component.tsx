import './Node.css';

import * as React from 'react';
import { HierarchyPointNode } from 'd3-hierarchy';
import { Tree } from '../../types';
// import { tap } from 'rxjs/operators';

export class Node extends React.Component<HierarchyPointNode<Tree>, object> {
  render() {
    return (
      <g>
        {/* <g>{this.state.pulseCircles}</g> */}
        <circle
          // onMouseEnter={this.onMouseEnterHandler}
          // onClick={this.onClickHandler}
          // className={`SvgNode ${this.props.node.type}`}
          cx={`${this.props.x * 100}%`}
          cy={this.props.y + 100}
          r="15"
        />
      </g>
    );
  }
}
