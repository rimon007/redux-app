import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './App.css'

//Import Views
import Home from './views/Home'
import Category from './views/Category'
import PostDetail from './views/PostDetail'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:category' component={Category} />
            <Route path='/:category/:post_id' component={PostDetail} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
 