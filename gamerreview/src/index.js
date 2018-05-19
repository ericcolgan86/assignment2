import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GamesDetail from './GamesDetail';
import GamesMain from './GamesMain';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/games/:id' component={ GamesDetail } />
                <Route path='/games' component={ GamesMain } />
                <Route path='/about' component={ About } />
                <Route exact path='/' component={ App } />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Router/> , document.getElementById('root'));
registerServiceWorker();
