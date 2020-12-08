import React, {Component} from 'react';

import './TextualStatistics.css';
import algo from './algo.png';
import Bottom from '../components_bottom/Bottom.js';

class TextualStatistics extends Component {
  //class 컴포넌트
  //https://victorydntmd.tistory.com/40
  //https://react-svgr.com/playground/ svgr -> jsx 자동변환
  render(){
    return(
      <div>
        <div className="ts_1">
          <h1>알고리즘 트리구조</h1>
        
        </div>
        <div>
          <img src={algo} className="algo"/>
        </div>
        <div>
          <Bottom/>
        </div>
      </div>
    )
  }
}

export default TextualStatistics;
