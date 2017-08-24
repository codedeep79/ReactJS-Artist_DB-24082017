import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// Component
import Home from './components/home';
import Artist from './components/artist';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/artist/:artistid" component={Artist} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));