import React, {Component} from 'react';
import './HeaderTitle.css'
class HeaderTitle extends Component {
  //class 컴포넌트
  static defaultProps = { //props 값이 없을 때 default 값
    title: 'Home'
  }

  render(){
    return(
      <div className="title">
        <a href = "">
          {this.props.title}
        </a>
      </div>
    )
  }
}

export default HeaderTitle;
