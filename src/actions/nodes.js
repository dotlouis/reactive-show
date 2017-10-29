import 'rxjs/add/observable/timer';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export const ADD_NODE_SOURCE = 'ADD_NODE_SOURCE';
export const REMOVE_NODE_SOURCE = 'REMOVE_NODE_SOURCE';
export const ADD_NODE_SUBSCRIPTION = 'ADD_NODE_SUBSCRIPTION';

const onClick = event => {
  console.log('clicked');
};

export const addNodeTimer = () => ({
  type: ADD_NODE_SOURCE,
  source: Observable.timer(0, 3000),
  onClick,
  controls: [removeNode, addSubscription],
});

export const addNodeClickable = () => ({
  type: ADD_NODE_SOURCE,
  source: new Subject(),
  onClick: function(event) {
    this.source.next(event);
  },
  controls: [removeNode, addSubscription],
});

export const removeNode = node => ({
  type: REMOVE_NODE_SOURCE,
  node,
});

export const addSubscription = node => ({
  type: ADD_NODE_SUBSCRIPTION,
  node,
  onClick,
  controls: [removeNode],
});
