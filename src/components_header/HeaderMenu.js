import React, {Component} from 'react';
import './HeaderMenu.css'

class HeaderMenu extends Component {
  //class 컴포넌트
  static defaultProps = { //props 값이 없을 때 default 값
    name: 'home'
  }
  render(){
    return(
      <ul className="navi_menu">
        <li><a href ="">{this.props.name}</a></li>
      </ul>
    )
  }
}

export default HeaderMenu;
