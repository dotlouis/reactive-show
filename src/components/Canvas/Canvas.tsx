import './Canvas.css';

import * as React from 'react';

// import Node from '../Node/Node';

class Canvas extends React.Component {
  render() {
    return (
      <div className="CanvasWrapper">
        <svg className="SvgCanvas">
          {/* {nodes.map(node => (
            <Node/>
          ))} */}
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

export default Canvas;
