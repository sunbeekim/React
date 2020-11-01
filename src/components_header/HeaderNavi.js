import React, {Component} from 'react';
import './HeaderNavi.css'
import HeaderLogo from './HeaderLogo.js'
import HeaderTitle from './HeaderTitle.js'
import HeaderMenu from './HeaderMenu.js'
import HeaderIcons from './HeaderIcons.js'
import HeaderToogle from './HeaderToogle.js'

class HeaderNavi extends Component {
  //class 컴포넌트

  render(){
    return(
      <nav className="navi">
        <div className="navi">
        <HeaderLogo/>
        <HeaderTitle title = "Group three"/>
        </div>
        <HeaderMenu name = "hello"/>
        <HeaderMenu name = "world"/>
        <HeaderMenu name = "bye"/>
        <HeaderMenu name = "setting"/>
        <HeaderIcons/>

        <HeaderToogle/>

      </nav>
    )
  }
}

export default HeaderNavi;
