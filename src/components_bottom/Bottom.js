import React, {Component} from 'react';
import './Bottom.css';

class Bottom extends Component {
  //class 컴포넌트

  render(){


    return(
      <div className="bottom">
        <i className="fas fa-battery-empty"></i>
        <i className="fas fa-battery-quarter"></i>
        <i className="fas fa-battery-half"></i>
        <i className="fas fa-battery-three-quarters"></i>
        <i className="fas fa-battery-full"></i>
        <i className="fas fa-atom"></i>
        bottom free!!

      </div>
    )
  }
}

export default Bottom;
