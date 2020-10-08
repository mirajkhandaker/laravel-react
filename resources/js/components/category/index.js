import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import CategoryAdd from './Add';
import CategoryListing from './Listing';
import CategoryEdit from './Edit'

export default class index extends Component {
    render() {
        return (
            <Router basename="/m/laravel-react" >
                <div className="mt-2">
                    <Link to='/category/add' className="btn btn-primary">Category Add</Link>
                    <Link to='/category' className="btn btn-dark">Category Listing</Link>
                </div>
                <hr />
                <div>
                    <Switch>
                        <Route exact path='/category' component={CategoryListing} />
                        <Route path='/category/add' component={CategoryAdd} />
                        <Route path='/category/edit/:id' component={CategoryEdit} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
