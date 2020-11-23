import React, {Component} from 'react';


class Test2 extends Component{
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    },
  }

  render(){
    const {
          name, phone
        } = this.props.info;
    return(
      <div>
        <b>{name}</b>
        <b>{phone}</b>
      </div>
    );
  }
}

export default Test2;
