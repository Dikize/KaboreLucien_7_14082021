import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Signup from '../../pages/Log/Signup';
import Login from '../../pages/Log/Login';
import Articles from '../../pages/Articles';
import Profile from '../../pages/Profile/Profile'
import updateArticle from '../Articles/updateArticle';
import Comment from '../Comments/Comment'


export default function index() {
    return (
        <Router>
            <Switch>
            
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/profile' component={Profile} />

                <Route exact path='/post' component={Articles} />
                <Route exact path='/post/update/:id' component={updateArticle} />

                <Route exact path='/comment' component={Comment} />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
