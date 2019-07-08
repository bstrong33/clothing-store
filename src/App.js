import React from 'react';
import './App.css';
import routes from './routes';
import TopNav from './components/Navs/TopNav';
import BottomNav from './components/Navs/BottomNav';

function App() {
  return (
    <div className="App">
        <TopNav/>
        {routes}
        <BottomNav/>
    </div>
  );
}

export default App;
