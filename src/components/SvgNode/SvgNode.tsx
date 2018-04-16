import './SvgNode.css';

import * as React from 'react';
import { HierarchyPointNode } from 'd3-hierarchy';
import { RxNode } from '../../stores/RxNode';
import { observer } from 'mobx-react';

// import { computed } from 'mobx';
// import { tap } from 'rxjs/operators';

@observer
export class SvgNode extends React.Component<{
  node: HierarchyPointNode<RxNode>;
}> {
  // HELP: https://groups.google.com/forum/#!topic/d3-js/ki26FQScBWw

  render() {
    console.log(this.props);

    const firstNode = (
      <g key={0}>
        {/* <g>{this.state.pulseCircles}</g> */}
        <circle
          // className={`SvgNode ${this.props.node.type}`}
          // onClick={this.onClickHandler}
          // onMouseEnter={this.onMouseEnterHandler}
          onClick={() => this.addNode()}
          cx={`${this.props.node.x}%`}
          cy={`${this.props.node.y}%`}
          r="10"
        />
      </g>
    );

    let childNode: JSX.Element[] = [];
    if (this.props.node.children) {
      childNode = this.props.node.children.map((node, index) => (
        <SvgNode key={index + 2} node={node} />
      ));
    }

    return [firstNode, ...childNode];
  }

  addNode() {
    this.props.node.data.addSubscriber();
  }
}
