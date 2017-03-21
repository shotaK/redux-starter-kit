import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ArticleForm from './components/article/ArticleForm'

import configureStore from './redux/common/configureStore';
const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/article">Add article</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/article" component={ArticleForm}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);