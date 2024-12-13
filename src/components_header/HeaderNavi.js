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
      <div className="header">
      <nav className="navi">
        <div className="titlebar">
        <HeaderLogo/>
        <HeaderTitle title = "Group three"/>
        </div>
        <menu className="menu_bar" id="toggle">
        <HeaderMenu name = "hello"/>
        <HeaderMenu name = "world"/>
        <HeaderMenu name = "bye"/>
        <HeaderMenu name = "setting"/>
        <HeaderIcons/>
        </menu>
        <HeaderToogle/>
      </nav>
      </div>


    )
  }
}

export default HeaderNavi;
