import React, {Component} from 'react';
import './HeaderIcons.css'
import { BrowserRouter as Route, Link } from 'react-router-dom';

class HeaderIcons extends Component {
  //class 컴포넌트
  page = {
    pagename : '/'
  }
  render(){
    return(
      <ul className="icons" id="icon">
        <li><Link to={this.props.pagename} className="iconnone"><i className="fas fa-braille" ></i></Link></li>
        {/*<li><i class="fab fa-500px"></i></li>*/}
      </ul>
    )
  }
}

export default HeaderIcons;
