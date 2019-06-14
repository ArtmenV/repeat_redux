import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Counter from './components/counter/counter.js'
import Menu from './components/menu/menu.js'
import Menu1 from './components/menu/menu1.js'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/counter' component={Counter}/>
      <Route path='/Menu' component={Menu}/>
      <Route path='/Menu1' component={Menu1}/>
      </Switch>
    </div>
  );
}

export default App;
