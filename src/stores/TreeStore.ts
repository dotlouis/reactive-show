import { Tree } from '../types';
import { observable } from 'mobx';

class TreeStore {
  @observable children: Tree[] = [];

  addNode() {
    this.children.push({});
  }
}

export { TreeStore };
