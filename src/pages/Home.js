import React, {Component} from 'react';

import BodyView from '../components_body/BodyView.js';
import Bottom from '../components_bottom/Bottom.js';


class Home extends Component {
  //class 컴포넌트

  render(){


    return(
      <div>
        <div>
        <BodyView/>
        </div>
        <div>
          <Bottom/>
        </div>
      </div>
    )
  }
}

export default Home;
