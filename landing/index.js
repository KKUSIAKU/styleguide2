import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import Aside from './modules/aside';
import App from './modules/app';
import Splash from './modules/splash';
import gettingStarted from './modules/getting_started';
import Design from './modules/design';
import Components from './modules/components';
import Resources from './modules/resources';

var routes = <Route component={App}>
  <Route path="/" component={Splash}/>
  <Route path="getting-started" component={gettingStarted}/>
  <Route path="design" component={Design}/>
  <Route path="components" component={Components}/>
  <Route path="resources" component={Resources}/>
</Route>

export default function Index() {
  return (
    <Router history={browserHistory} routes={routes}/>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));
