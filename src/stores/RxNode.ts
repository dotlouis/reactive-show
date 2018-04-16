import { observable, action } from 'mobx';

export class RxNode {
  @observable subscribers: RxNode[] = [];

  @action
  addSubscriber() {
    this.subscribers.push(new RxNode());
  }
}
