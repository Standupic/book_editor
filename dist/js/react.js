import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import App from '../components/app'
import store from "../store"


ReactDOM.render(<Provider store={store}><HashRouter><App/></HashRouter></Provider>,document.getElementById('app'));