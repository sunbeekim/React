import React, {Component} from 'react';
import './HeaderToogle.css'
import './HeaderMenu'
import './HeaderIcons'

const menu = document.querySelector('.navi_menu');

class HeaderToogle extends Component {
  //class 컴포넌트
  state = {
    isToggleOn: true
  }
  handleClick = () =>{
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render(){
    return(

      <a href="#" className="toogle" onClick={this.handleClick}>
        <i class="fas fa-bars">
          {this.state.isToggleOn ?
              'on' : 'off'
           }
        </i>
      </a>

    )
  }
}

export default HeaderToogle;
