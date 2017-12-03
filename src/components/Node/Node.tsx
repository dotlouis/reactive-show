import './Node.css';

import * as React from 'react';
// import { tap } from 'rxjs/operators';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Node extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">Hello {name}</div>
      </div>
    );
  }
}

export default Node;
