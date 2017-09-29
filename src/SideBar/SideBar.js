import './SideBar.css';

import React, { Component } from 'react';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { uuidv4 } from '../Utils/Utils';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

export class SideBar extends Component {
  createClickableSubject = () => {
    const source = new Subject();
    const id = uuidv4();
    this.props.onNodeAdded({
      id,
      label: 'Click Subject',
      source,
      coords: { x: 1 * 100 + 100, y: 100, w: 30, h: 30 },
      actions: [
        {
          label: 'Subscribe',
          callback: () => this.createSubscription(source),
        },
        {
          label: 'Remove',
          callback: () => this.props.onNodeRemoved(id),
        },
      ],
    });
  };

  createTimer = () => {
    const source = Observable.timer(0, 5000);
    const id = uuidv4();
    this.props.onNodeAdded({
      id,
      label: 'Timer',
      source,
      coords: { x: 1 * 100 + 100, y: 100, w: 30, h: 30 },
      actions: [
        {
          label: 'Subscribe',
          callback: () => this.createSubscription(source),
        },
        {
          label: 'Remove',
          callback: () => this.props.onNodeRemoved(id),
        },
      ],
    });
  };

  createSubscription = source => {
    const id = uuidv4();
    this.props.onNodeAdded({
      id,
      label: 'Subscription',
      source,
      coords: { x: 200, y: 200, w: 30, h: 30 },
      actions: [
        {
          label: 'Unsubscribe',
          callback: () => this.props.onNodeRemoved(id),
        },
      ],
    });
  };

  render() {
    return (
      <section className="SideBar">
        <h1>Reactive-show</h1>
        <button onClick={this.createTimer}>Timer</button>
        <button onClick={this.createClickableSubject}>Clickable Subject</button>
      </section>
    );
  }
}
