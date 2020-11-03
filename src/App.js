import React, {Component, Fragment} from 'react';

import HeaderNavi from './components_header/HeaderNavi.js';
import BodyView from './components_body/BodyView.js'

class App extends Component{
  render(){
    return(
      <div>

        <HeaderNavi/>
      
        <BodyView/>

      </div>
    );
  }
}

export default App;
