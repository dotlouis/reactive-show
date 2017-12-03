import * as React from 'react';
import './App.css';

import { Canvas } from './components/Canvas/Canvas.component';
import { SideBar } from './components/SideBar/SideBar.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Canvas />
      </div>
    );
  }
}

export default App;
