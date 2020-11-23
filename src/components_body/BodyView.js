import React, {Component} from 'react';
import './BodyView.css';
import BodyRectangle from './BodyRectangle.js';
import BodyDivRect_2 from './BodyDivRect_2.js';


class BodyView extends Component {
  //class 컴포넌트

  render(){
    return(
      <div>
      <div>

      </div>
      <div className = "divi">
        <BodyRectangle/>
        <BodyDivRect_2/>
      </div>
      </div>
    )
  }
}

export default BodyView;
