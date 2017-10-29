import './Canvas.css';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { SvgNode } from '../SvgNode/SvgNode';
import Action from '../Action/Action';

const mapStateToProps = state => ({
  nodes: state.nodes,
});

class Canvas extends React.Component {
  static propTypes = {
    nodes: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onOpenControlsHandler = node => {
    this.setState({
      node,
      isActionOpen: true,
    });
  };

  onCloseControlsHandler = () => {
    this.setState({ isActionOpen: false });
  };

  render() {
    const { nodes } = this.props;

    return (
      <div className="CanvasWrapper">
        <svg className="SvgCanvas">
          {nodes.map(node => (
            <SvgNode
              key={node.id}
              node={node}
              onOpenControls={this.onOpenControlsHandler}
            />
          ))}
        </svg>
        <div className="HtmlCanvas">
          <Action
            node={this.state.node}
            opened={this.state.isActionOpen}
            onCloseControls={this.onCloseControlsHandler}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Canvas);
