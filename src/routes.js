import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Men from './components/Men/Men';
import Women from './components/Women/Women';

export default
<Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/Men' component={Men} />
    <Route path='/Women' component={Women} />
</Switch>