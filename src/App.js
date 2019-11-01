import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Root from './components/Root';
//import store from './redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'
//import history from './history'
import './config'


class App extends Component {
    static propTypes = {};

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Root/>
                </ConnectedRouter>
            </Provider>

        )
    }
}

export default App
