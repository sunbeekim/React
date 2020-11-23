import React, {Component} from 'react';
import Test2 from './Test2.js';

class Test extends Component{
  static defaultProps = {
    data: [],
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render(){
    console.log('render ok!');
    const { data } = this.props;
    const list = data.map(
      info => (
        <Test2
          key={info.id}
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
