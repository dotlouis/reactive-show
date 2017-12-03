import './Canvas.css';

import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Tree } from '../../types';
import { hierarchy, tree } from 'd3-hierarchy';
import { Node } from '../Node/Node.component';

@inject('treeStore')
@observer
export class Canvas extends React.Component<{ treeStore?: Tree }> {
  render() {
    // console.log(this.props);
    const h = hierarchy(this.props.treeStore!);
    const t = tree()(h);

    let nodes;
    if (t.children) {
      nodes = t.children.map((node, index) => <Node key={index} {...node} />);
    }

    return (
      <div className="CanvasWrapper">
        <svg className="SvgCanvas">{nodes}</svg>
        {/* <div className="HtmlCanvas">
          <Action
            node={this.state.node}
            opened={this.state.isActionOpen}
            onCloseControls={this.onCloseControlsHandler}
          />
        </div> */}
      </div>
    );
  }
}
