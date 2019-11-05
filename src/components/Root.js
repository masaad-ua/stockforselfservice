import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom'
import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'
import ProtectedRoute from './common/ProtectedRoute'


class Root extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <ProtectedRoute path="/admin" component={AdminPage}/>
                <Route path="/auth" component={AuthPage}/>
            </div>
        )
    }
}

export default Root