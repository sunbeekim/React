import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Introduce, TextualStatistics, GraphStatistics } from '../pages';
import HeaderNavi from '../components_header/HeaderNavi.js';
import Bottom from '../components_bottom/Bottom.js';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: null
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api')
  //     .then(res => res.json())
  //     .then(data => this.setState({title: data.title}));
  // }

  // <div>
  //   {this.state.title? <h1>{this.state.title}</h1>:<h1>loading...</h1>}
  // </div>
  render(){
    return(
      <div>
        <div>
        <HeaderNavi/>
        <Route exact path="/" component={Home}/>
        <Route path="/h1" component={Introduce}/>
        <Route path="/h2" component={TextualStatistics}/>
        <Route path="/h3" component={GraphStatistics}/>
        <Bottom/>
        </div>

      </div>
    );
  }
}

export default App;
