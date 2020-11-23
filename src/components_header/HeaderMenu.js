import React, {Component} from 'react';
import './HeaderMenu.css'
import { BrowserRouter as Route, Link } from 'react-router-dom';

class HeaderMenu extends Component {
  //class 컴포넌트
  static defaultProps = { //props 값이 없을 때 default 값
    name: 'home'
  }
  page = {
    pagename : '/'
  }
  render(){
    return(

      <ul className="navi_menu">
        <li><Link to={this.props.pagename}>{this.props.name}</Link></li>
      </ul>

    )
  }
}

export default HeaderMenu;
