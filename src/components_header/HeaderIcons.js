import React, {Component} from 'react';
import './HeaderIcons.css'

class HeaderIcons extends Component {
  //class 컴포넌트

  render(){
    return(
      <ul className="icons">
        <li><i class="far fa-check-circle"></i></li>
        {/*<li><i class="fab fa-500px"></i></li>*/}
      </ul>
    )
  }
}

export default HeaderIcons;
