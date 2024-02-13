import { useEffect, useState } from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import ScreenSwitcher from './components/ScreenSwitcher';

import './App.css';
import RotateNotice from './pages/rotateNotice/RotateNotice';

function App() {

  return (
    <DeviceOrientation lockOrientation={'landscape'}>
      <Orientation orientation='landscape' alwaysRender={false} >
        <RotateNotice />
      </Orientation>
      <Orientation orientation='portrait' alwaysRender={false}>
        <div className="App">
          <ScreenSwitcher />
        </div>
      </Orientation>
    </DeviceOrientation>
  );
}

export default App;
