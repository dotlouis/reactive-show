import './Root.css';

import React from 'react';

import Canvas from '../../components/Canvas/Canvas';
import SideBar from '../../components/Sidebar/Sidebar';

const Root = props => (
  <div className="Root">
    <SideBar />
    <Canvas />
  </div>
);

export default Root;
