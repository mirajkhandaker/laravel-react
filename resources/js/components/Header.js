import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, NavLink,Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/index';
export default class Header extends Component {
    
    render() {
        return (
            <Router basename="/m/laravel-react" >
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to='/' activeClassName="active" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category' className="nav-link">Category</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route exact path='/about' component={About} />
                                    <Route exact path='/category' component={Category} />
                                </Switch>
                </div>
            </div>
            </Router>
        )
    }
}
