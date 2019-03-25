import React from 'react'
import { Switch, Route } from 'react-router-dom'
const Nav = (props) => (
    <Switch>
      <Route exact path='/' component={props.home}/>
      <Route path='/create' component={props.create}/>
      <Route path='/bookList' component={props.bookList}/>
    </Switch>
)

module.exports = Nav;