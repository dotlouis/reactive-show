import './Canvas.css';

import * as React from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { RxNode } from '../../stores/RxNode';
import { SvgNode } from '../SvgNode/SvgNode';
import { SvgLink } from '../SvgLink/SvgLink';
import { hierarchy, tree, HierarchyPointNode } from 'd3-hierarchy';

const TREE_WIDTH_PERCENT = 100;
const TREE_HEIGHT_PERCENT = 100;

@inject('rootNode')
@observer
export class Canvas extends React.Component<{ rootNode?: RxNode }> {
  @computed
  get rootNode(): HierarchyPointNode<RxNode> {
    console.log('computed', this.props.rootNode);
    const h = hierarchy(
      this.props.rootNode!,
      d => (d.subscribers && d.subscribers.length > 0 ? d.subscribers : null),
    );
    return tree<RxNode>().size([TREE_WIDTH_PERCENT, TREE_HEIGHT_PERCENT])(h);
  }

  render() {
    console.log('render', this.rootNode);

    return (
      <div className="CanvasWrapper">
        {/* <div className="SvgCanvas">
          <div onClick={() => this.plop()}>
            {rootNode.depth} {rootNode.data.name}
          </div>
        </div> */}
        <svg className="SvgCanvas">
          <SvgNode node={this.rootNode} />
          <SvgLink node={this.rootNode} />
        </svg>
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
