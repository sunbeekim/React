import React, {Component} from 'react';
import './GitPage.css';
import Bottom from '../components_bottom/Bottom.js';

class GitPage extends Component {
//  class 컴포넌트


  render(){


    return(
      <div>

        <div className="gp_1">
          <h1>GitHub Site</h1>
          <ul>
          <li>https://github.com/sunbeekim/React</li>
          <li>https://github.com/sunbeekim/React/tree/20201029</li>
          <li>https://github.com/sunbeekim/React/tree/20201201</li>
          </ul>
        </div>
        <div className="gp_2">
          <h1>Reference Site</h1>
          <ul>
          <li>  https://stackoverflow.com/</li>
          <li>  https://reactnative.dev/docs/intro-react</li>
          <li>  https://docs.expo.io/distribution/building-standalone-apps/</li>
          <li>  https://docs.expo.io/versions/latest/sdk/webview/</li>
          <li>  https://developer.mozilla.org/ko/docs/Learn/HTML/
          Introduction_to_HTML/Getting_started</li>
          <li>  https://ko.reactjs.org/docs/handling-events.html</li>
          <li>  https://medium.com/@minoo/%EB%B2%88%EC%97%AD-5%EA%B0%80%EC%A7%80-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%9E%A5-
          %EB%8B%A8%EC%A0%90-%EB%B9%84%EA%B5%90-
          react-animations-in-depth-884ff6e61b88</li>
          <li>  https://velog.io/@noyo0123/%EB%A6%AC%EC
          %95%A1%ED%8A%B8-%EC%98%88%EC%A0%9C-%EC%97
          %B0%EB%9D%BD%EC%B2%98-%EC%95%B1-f6k33oyi5h</li>
          <li>  https://eso0609.tistory.com/88</li>
          <li>  https://velopert.com/category/dev-log/tech-log/react-js</li>
          <li>  https://hyunseob.github.io/2019/06/02/react-component-the-right-way/</li>
          <li>  https://webdir.tistory.com/408</li>
          <li>  https://zzznara2.tistory.com/806</li>
          </ul>
        </div>
        <div >
          <Bottom/>
        </div>

      </div>
    )
  }
}

export default GitPage;
