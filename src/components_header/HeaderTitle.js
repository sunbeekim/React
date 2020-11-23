import React, {Component} from 'react';
import './HeaderTitle.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';

class HeaderTitle extends Component {
  //class 컴포넌트
  static defaultProps = { //props 값이 없을 때 default 값
    title: 'Home'
  }
  page = {
    pagename : '/'
  }
  render(){
    return(
      <div className="title">
        <Link to={this.props.pagename}>{this.props.title}</Link>
      </div>
    )
  }
}

export default HeaderTitle;
