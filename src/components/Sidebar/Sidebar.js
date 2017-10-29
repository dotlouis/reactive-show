import './Sidebar.css';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as NodeActions from '../../actions/nodes';

const mapStateToProps = state => ({
  nodes: state.nodes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NodeActions, dispatch),
});

class Sidebar extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { actions } = this.props;

    return (
      <section className="Sidebar">
        <h1>Reactive-show</h1>
        <button onClick={actions.addNodeTimer}>Timer</button>
        <button onClick={actions.addNodeClickable}>Clickable Subject</button>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
