import React, {Component} from 'react';
import './BodyRectangle.css';
import blue from './blue.jpg';
class BodyRectangle extends Component {
  //class 컴포넌트
  //https://zzznara2.tistory.com/806
  //css image class = img : 이미지 안에 다른 내용을 담을 수 있게 함
  //--이미지 경로를 BodyRectangle class 내에서 변경할 수 있게 해야 함
  render(){
    return(
      <div class="img">
        <div class="content">
            <h1>Hello!</h1>
            <h2>We<br></br>are Group three</h2>
        </div>
        <div class="img-cover"></div>
    </div>
    )
  }
}

export default BodyRectangle;
