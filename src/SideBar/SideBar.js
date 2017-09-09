import React, { Component } from 'react';
import './SideBar.css';

export class SideBar extends Component {
  handleOnCreateSource = e => {
    this.props.onCreateSource(e.target.value);
  };

  render() {
    return (
      <section className="SideBar">
        <h1>Reactive-show</h1>
        <button onClick={this.handleOnCreateSource}>
          Create Event Emitter
        </button>
      </section>
    );
  }
}
