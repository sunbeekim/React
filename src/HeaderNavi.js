import React, {Component} from 'react';
import HeaderBackground from './HeaderBackground.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderMenu from './HeaderMenu.js';

class HeaderNavi extends Component {
  //class 컴포넌트

  render(){
    return(
      <div className = "App-HeaderNavi">
        <HeaderTitle/>
        <HeaderMenu name = "home"/>
        <HeaderMenu name = "argorism"/>
        <HeaderMenu name = "뭐적지?"/>
        <HeaderMenu name = "hello"/>
        <HeaderTitle/>
      </div>
    )
  }
}

export default HeaderNavi;
