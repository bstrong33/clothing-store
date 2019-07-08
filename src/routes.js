import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Men from './components/Men/Men';
import MenShirts from './components/Men/MenShirts';
import Women from './components/Women/Women';

export default
<Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/Men' render={() => (
        <Men>
            <Switch>
                <Route path='/Men/MenShirts' component={MenShirts} />
            </Switch>
        </Men>
    )} />
    <Route path='/Women' component={Women} />
</Switch>