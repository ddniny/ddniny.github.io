import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Work from './components/Work';
import Life from './components/Life';

const routes = (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/work' component={Work} />
        <Route path='/life' component={Life} />
    </Route>
        
)

export default routes;