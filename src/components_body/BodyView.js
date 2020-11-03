import React, {Component, Fragment} from 'react';
import './BodyView.css';
import BodyRectangle from './BodyRectangle.js';
import BodyDivRect_2 from './BodyDivRect_2.js';

class BodyView extends Component {
  //class 컴포넌트

  render(){
    return(
      <div className = "divi">
        <BodyRectangle/>
        <BodyDivRect_2/>
      </div>
    )
  }
}

export default BodyView;
