import React, {Component} from 'react';

class HeaderMenu extends Component {
  //class 컴포넌트
  static defaultProps = { //props 값이 없을 때 default 값
    name: 'home'
  }
  render(){
    return(


        <a className = "App-HeaderMenu" href =""><b>{this.props.name}</b></a>

    )
  }
}

export default HeaderMenu;
