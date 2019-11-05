import React, {Component} from 'react';
import SignInForm from '../auth/SignInForm'

import {Route, NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import {signUp, moduleName} from '../../ducks/auth'
import Loader from '../common/Loader'

import PropTypes from 'prop-types';

class AuthPage extends Component {
    static propTypes = {

    };

    render() {
        const {loading} = this.props;
        return (
            <div>
                <h1>Auth page, for login</h1>
                <NavLink to='/auth/signin'  activeStyle={{color: 'red'}}>Sign In</NavLink>
                <Route path="/auth/signin" render={() => <SignInForm onSubmit = {this.handleSignIn}/>}/>
            </div>
        )
    }
    handleSignIn = (values) => console.log('---', values)


}

export default AuthPage