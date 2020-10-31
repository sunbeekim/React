// src/App.js
import React, {Component} from 'react';
import './App.css'
import MyName from './MyName.js';
import Counter from './Counter.js';
import HeaderBackground from './HeaderBackground.js';
import HeaderNavi from './HeaderNavi.js';

import HeaderTitle from './HeaderTitle.js';

class App extends Component{
  render(){
    const name = 'sunbee';
    const style = { //style
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '30px'
    }
    const stylecenter = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '30px'
    }
    return(
      <div>
        <div style={style}>
          Hello {name}!
        </div>
        <div className = "App"> {/*App.css .App {} style load*/}
          {
            1+1 ===2 ? (<div>Ok!</div>) : (<div>No!</div>) //삼항연산
          }
        </div>
        <div style={stylecenter}>
          <MyName name = "SUN"/> {/*easy component - MyName.js import 클래스형 컴포넌이지만 간단하므로 함수형으로 바꿔도 무관*/}
        </div>
        <div className = "App">
            <Counter/>
        </div>
        <div>
          <i>hello</i>
          <p>world</p>

          <HeaderNavi/>
      
        </div>
      </div>
    );
  }
}

export default App;
