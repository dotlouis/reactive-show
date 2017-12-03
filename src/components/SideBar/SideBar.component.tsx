import './SideBar.css';

import * as React from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { TreeStore } from '../../stores';

@inject('treeStore')
@observer
export class SideBar extends React.Component<{ treeStore?: TreeStore }> {
  render() {
    return (
      <section className="SideBar">
        <h1>Reactive-show</h1>
        <button onClick={() => this.addNode()}>Add Node</button>
      </section>
    );
  }

  @action
  addNode() {
    this.props.treeStore!.addNode();
  }
}
