import React, {Component} from 'react';
import './Bottom.css';

class Bottom extends Component {
  //class 컴포넌트

  render(){


    return(
      <div className="bottom">
        <i class="fas fa-battery-empty"></i>
        <i class="fas fa-battery-quarter"></i>
        <i class="fas fa-battery-half"></i>
        <i class="fas fa-battery-three-quarters"></i>
        <i class="fas fa-battery-full"></i>
        <i class="fas fa-atom"></i>
        bottom free!!

      </div>
    )
  }
}

export default Bottom;
