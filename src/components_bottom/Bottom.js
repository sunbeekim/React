import React, {Component} from 'react';
import './Bottom.css';
import HeaderMenu from '../components_header/HeaderMenu.js'
import { BrowserRouter as Route, Link } from 'react-router-dom';

class Bottom extends Component {
  //class 컴포넌트

  render(){


    return(
      <div>
        <div className="bottom">
        <i className="fas fa-battery-empty"></i>
        <i className="fas fa-battery-quarter"></i>
        <i className="fas fa-battery-half"></i>
        <i className="fas fa-battery-three-quarters"></i>
        <i className="fas fa-battery-full"></i>
        <i className="fas fa-atom"></i>
        <i className="fas fa-braille"></i>
        <Link to="/h4" className="bottomLink"><i>[tensorflow]</i></Link>
        made by ♡ Group three
        </div>
      </div>
    )
  }
}

export default Bottom;
