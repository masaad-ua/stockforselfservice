import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';

class SignInForm extends Component {
    static propTypes = {};

    render() {
        /*handleSubmit получаем с просп */

        const {handleSubmit} = this.props;
        return (
            <div>
                <h2>Sign In, Regist you account here \|/ </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <Field name="email" component="input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" component="input" type="password"/>
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>

            </div>
        )
    }
}


export default reduxForm({
    form: 'auth'
})(SignInForm)