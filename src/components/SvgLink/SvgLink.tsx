import * as React from 'react';
import { HierarchyPointNode, HierarchyPointLink } from 'd3-hierarchy';
import { RxNode } from '../../stores/RxNode';
import { observer } from 'mobx-react';
import { linkVertical } from 'd3-shape';

// import { computed } from 'mobx';
// import { tap } from 'rxjs/operators';

@observer
export class SvgLink extends React.Component<{
  node: HierarchyPointNode<RxNode>;
}> {
  // HELP: https://groups.google.com/forum/#!topic/d3-js/ki26FQScBWw

  render() {
    console.log(this.props);

    const links: HierarchyPointLink<RxNode>[] = this.props.node.links();

    const paths = links.map((link, i) => {
      const path = linkVertical()({
        source: [link.source.x, link.source.y],
        target: [link.target.x, link.target.y],
      });

      console.log(link);

      return path ? (
        <g key={i}>
          <path d={path} />
        </g>
      ) : (
        undefined
      );
    });

    let childLinks: JSX.Element[] = [];
    if (this.props.node.children) {
      childLinks = this.props.node.children.map((node, i) => (
        <SvgLink key={i} node={node} />
      ));
    }

    return [paths, ...childLinks];
  }
}
