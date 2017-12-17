import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import createHistory from 'history/createHashHistory'
import * as app from '../../redux/actions/app';
import logo from '../../assets/images/logo.svg';
import './App.css';
import Test1 from '../Test1/test1.jsx';
import Test2 from '../Test2/Test2.jsx';
import NotFound from '../NoFound/NoFound.jsx';

const history = createHistory()

class App extends Component {
	constructor(props) {
		super(props);
		console.log(process.env);
        console.log(props);
	}
    changeName = () => {
        const { changeName } = this.props;
        changeName(123);
    }
    render() {
        const { name } = this.props;
        return (
            <Router history={history}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <div onClick={this.changeName}>改变</div>
                    <div onClick={this.changeName}>{ name }</div>
                    <li><Link to="/test1">Test1</Link></li>
                    <li><Link to="/test2">Test2</Link></li>
                    <li><Link to="/topics">NotFound</Link></li>
                    <Switch>
                        <Route path='/test1' exact component={Test1}/>
                        <Route path='/test2'  component={Test2}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.app}},
    dispatch => bindActionCreators(app, dispatch)
)(App)
