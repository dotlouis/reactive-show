import './SideBar.css';

import * as React from 'react';
import { inject } from 'mobx-react';
import { RxNode } from '../../stores/RxNode';

@inject('rootNode')
export class SideBar extends React.Component<{ rootNode?: RxNode }> {
  render() {
    return (
      <section className="SideBar">
        <h1>Reactive-show</h1>
        <button onClick={() => this.addNode()}>Add Node</button>
      </section>
    );
  }

  addNode() {
    this.props.rootNode!.addSubscriber();
  }
}
