import * as React from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';

import { Canvas } from './components/Canvas/Canvas';
import { SideBar } from './components/SideBar/SideBar';

class App extends React.Component {
  render() {
    const app = (
      <div className="App" key={0}>
        <SideBar />
        <Canvas />
      </div>
    );

    return [app, <DevTools key={1} />];
  }
}

export default App;
