import React, {Component} from 'react';

import './TextualStatistics.css';
import algo from './algo.png';

class TextualStatistics extends Component {
  //class 컴포넌트
  //https://victorydntmd.tistory.com/40
  //https://react-svgr.com/playground/ svgr -> jsx 자동변환
  render(){
    return(
      <div>
        <div className="ts_1">
          <h1>TextualStatistics 화면 입니다</h1>
          <h3> 데이터를 나타내거나 표시하는 화면</h3>
        </div>
        <div>
          <img src={algo} className="algo"/>
        </div>
      </div>
    )
  }
}

export default TextualStatistics;
