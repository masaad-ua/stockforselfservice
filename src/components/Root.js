import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom'
//import AdminPage from './routes/AdminPage'
//import AuthPage from './routes/AuthPage'
//import PersonPage from './routes/PeoplePage'
//import ProtectedRoute from './common/ProtectedRoute'


class Root extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                /*<ProtectedRoute path="/admin" component={AdminPage}/>
                <ProtectedRoute path="/people" component={PersonPage}/>
                <Route path="/auth" component={AuthPage}/>*/
            </div>
        )
    }
}

export default Root