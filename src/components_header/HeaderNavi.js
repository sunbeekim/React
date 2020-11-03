import React, {Component} from 'react';
import './HeaderNavi.css'
import HeaderLogo from './HeaderLogo.js'
import HeaderTitle from './HeaderTitle.js'
import HeaderMenu from './HeaderMenu.js'
import HeaderIcons from './HeaderIcons.js'
import HeaderToogle from './HeaderToogle.js'


const test_1 = 'navi_menu';
const test_2 = 'navi_menu.active';

class HeaderNavi extends Component {
  //class 컴포넌트
  state = {
    isToggle : true
  }

  toggleBox = () => {
    this.setState (prevState => ({isToggle :! prevState.isToggle}));
  };


  render(){
    const {isBoxVisible} = this.state;
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
        {/* <HeaderToogle/> 나중에 수정할 것*/}

      </nav>
    )
  }
}

export default HeaderNavi;
