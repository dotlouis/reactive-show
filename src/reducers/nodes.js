import * as NodeActions from '../actions/nodes';

const initialState = [];

export default function nodes(state = initialState, action) {
  switch (action.type) {
    case NodeActions.ADD_NODE_SOURCE:
      return [
        ...state,
        {
          id: getId(state),
          type: 'Source',
          source: action.source,
          onClick: action.onClick,
          controls: action.controls,
        },
      ].map((node, i) => computeCoords(node, i, state.length + 1));
    case NodeActions.REMOVE_NODE_SOURCE:
      return [...state]
        .filter(node => node.id !== action.node.id)
        .map((node, i) => computeCoords(node, i, state.length + 1));
    case NodeActions.ADD_NODE_SUBSCRIPTION:
      return [
        ...state,
        {
          id: getId(state),
          type: 'Subscription',
          source: action.node.source,
          onClick: action.onClick,
          controls: action.controls,
        },
      ].map((node, i) => computeCoords(node, i, state.length + 1));
    default:
      return state;
  }
}

function getId(nodes) {
  return nodes.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}

function computeCoords(node, index, nodeNumber) {
  return {
    ...node,
    coords: {
      x: `${100 / (nodeNumber + 1) * (index + 1)}%`,
      y: 100,
      w: 30,
      h: 30,
    },
  };
}
