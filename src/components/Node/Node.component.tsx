import './Node.css';

import * as React from 'react';
import { HierarchyPointNode } from 'd3-hierarchy';
import { Tree } from '../../types';
// import { tap } from 'rxjs/operators';

export class Node extends React.Component<{ node: HierarchyPointNode<Tree> }> {
  render() {
    console.log(this.props);

    const firstNode = (
      <g key="0">
        {/* <g>{this.state.pulseCircles}</g> */}
        <circle // onClick={this.onClickHandler} // onMouseEnter={this.onMouseEnterHandler}
          // className={`SvgNode ${this.props.node.type}`}
          // onClick={() => this.addNode()}
          cx={`${this.props.node.x * 100}%`}
          cy={this.props.node.y * 100 + 100}
          r="15"
        />
      </g>
    );

    let childrenNodes: JSX.Element[] = [];

    if (this.props.node.children) {
      childrenNodes = this.props.node.children.map((node, index) => (
        <Node key={index + 1} node={node} />
      ));
    }
    return [firstNode, ...childrenNodes];
  }

  // @action
  // addNode() {}
}
