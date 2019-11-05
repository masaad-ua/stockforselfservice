import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {moduleName} from '../../ducks/auth';
import UnAuthorized from './UnAuthorized';

class ProtectedRoute extends Component {
    static propTypes = {};

    render() {
        const {component, ...rest} = this.props;
        return <Route {...rest} render={this.renderProtected}/>
    }

    renderProtected = (routeProps) => {
        /*С пропса получаем сам защищённый компонент */
        const {component: ProtectedComponent, authorized} = this.props;
        return authorized ? <ProtectedComponent {...routeProps}/> : <UnAuthorized />
    }



}
/*Вытягиваем со стора authorized*/
export default connect(state => ({
    authorized: true //!!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute)
