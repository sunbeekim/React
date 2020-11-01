import React, {Component} from 'react';
import './HeaderMenu.css'
import './HeaderIcons.css'

class Tooglebtn extends Component {
  //class 컴포넌트

  render(){
    return(

      <a href="#" className="toogle">
        <i class="fas fa-bars"></i>
      </a>

    )
  }
}

export default Tooglebtn;
