import React, {Component} from 'react';
import Test2 from './Test2.js';


class Test extends Component{
  constructor(props) {
   super(props);

  }
  static defaultProps = {
    data: [],
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.data !== nextProps.data){
      return true;
    }
    return false;
  }

  render(){
    console.log('render ok!');
    const { data } = this.props;
    const list = data.map(
      info => (
        <Test2
          key={info.number}
          info={info}
        />)
    );
    return(
      <div>
       {list}
      </div>

    );
  }
}



export default Test;
