import React, {Component} from 'react';

class MyName extends Component {
  //class 컴포넌트
  static defaultProps = { //props 값이 없을 때 default 값
    name: '기본이름'
  }
  render(){
    return(
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    )
  }
}

export default MyName;
