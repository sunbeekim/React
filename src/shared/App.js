import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Introduce, TextualStatistics, GraphStatistics } from '../pages';
import HeaderNavi from '../components_header/HeaderNavi.js';
import Bottom from '../components_bottom/Bottom.js';

class App extends Component{
  render(){
    return(
      <div>
      <HeaderNavi/>
        <Route exact path="/" component={Home}/>
        <Route path="/h1" component={Introduce}/>
        <Route path="/h2" component={TextualStatistics}/>
        <Route path="/h3" component={GraphStatistics}/>
        <Bottom/>
      </div>
    );
  }
}

export default App;
