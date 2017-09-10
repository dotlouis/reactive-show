import './SideBar.css';

import React, { Component } from 'react';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

export class SideBar extends Component {
  createTimer = () => {
    this.props.onSourceCreated(
      Observable.timer(0, 4000).map(n => `${this.props.nodes.length}_${n}`),
    );
  };

  render() {
    return (
      <section className="SideBar">
        <h1>Reactive-show</h1>
        <button onClick={this.createTimer}>Timer</button>
      </section>
    );
  }
}
