import React, {Component} from 'react';
import HeaderNavi from '../components_header/HeaderNavi.js';
import './RedirectPage.css'
import Bottom from '../components_bottom/Bottom.js';
class RedirectPage extends Component {
//  class 컴포넌트
  // componentDidMount(){
  //     window.location.replace('https://github.com/sunbeekim/React/blob/20201201/tensorflow_2.ipynb')
  // }

  render(){


    return(
      <div>
      <div className="rp_1">
        <iframe class="render-viewer " src="https://render.githubusercontent.com/view/ipynb?color_mode=light&amp;commit=a535fe55c6b21c35c01caaed14e297cdeceede8d&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f73756e6265656b696d2f52656163742f613533356665353563366232316333356330316361616564313465323937636465636565646538642f74656e736f72666c6f775f322e6970796e62&amp;nwo=sunbeekim%2FReact&amp;path=tensorflow_2.ipynb&amp;repository_id=308878970&amp;repository_type=Repository#51e6404c-783c-4f49-a5c7-3ee7591c1645" sandbox="allow-scripts allow-same-origin allow-top-navigation" title="File display"
      width="100%" height="99%" >
        Viewer requires iframe.
        </iframe>
      </div>
      <div width="100%">
        <Bottom/>
      </div>
      </div>
    )
  }
}

export default RedirectPage;
