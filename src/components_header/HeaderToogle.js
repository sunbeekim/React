import React, {Component} from 'react';
import './HeaderToogle.css';
import './HeaderMenu.css';
import './HeaderIcons.css';

import HeaderMenu from './HeaderMenu.js';

const menu = document.querySelectorAll('.navi_menu');
const icons = document.querySelector('.icons')
class HeaderToogle extends Component {
  //class 컴포넌트

  constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

  render(){
    return(
      <a href="#" className="toogle">
        <i className="fas fa-bars" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'on' : 'off'}
        </i>
      </a>

    )
  }
}

export default HeaderToogle;
//https://gseok.gitbooks.io/react/content/bd80-bd84-bd80-bd84-c9c0-c2dd-b4e4/react-c5d0-c11c-event-handling-d558-b294-bc95-c815-b9ac.html
