import React, {Component} from 'react';

import './GraphStatistics.css';
import { VelocityComponent } from 'velocity-react';
import Test from '../shared/Test.js';

const VelocityLetter = ({ letter }) => (
  <VelocityComponent
    runOnMount
    animation={{ opacity: 1, marginTop: 0 }}
    duration={500}
  >
    <p style={styles.letter}>{letter}</p>
  </VelocityComponent>
)

class GraphStatistics extends Component {
  //class 컴포넌트
  state = {
    letters: [],
    info: [
      {
       name: '2018',
       phone: '010-0000-0000',
       id: 3,
     },
     {
        name: '2019',
        phone: '010-0019-0019',
        id: 1,
      },
      {
         name: '2020',
         phone: '010-0020-0020',
         id: 2,
       }
     ],
     keyword:''
  }

  onChange = (e) => {
    const keyword = e.target.value;
    const letters = e.target.value.split('');
    const arr = []
    letters.forEach((l, i) => {
      arr.push(<VelocityLetter letter={l} />)
    })
    this.setState(() => ({ keyword: keyword,
                          letters: arr }))
  }

  render(){
    const {info, keyword } = this.state;
    const filteredList = info.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return(
      <div className="gr_1">
        <div>
          <br>
          </br>
        </div>
        <div className="gr_2">
          <h3>통계 및 예측 데이터 출력화면 입니다</h3>
          <div className="container">
            <input placeholder="검색"  value={keyword} onChange={this.onChange} style={styles.input} />
            <div style={styles.letters}>
              {
                this.state.letters
              }
            </div>
          </div>
        </div>
        <div className="gr_3">
          <h3>통계 및 예측 데이터 출력화면 입니다</h3>
        </div>
        <div>
          <Test data={filteredList}/>
        </div>
      </div>
    )
  }
}

const styles = {
  input: {

    height: 40,
    backgroundColor: '#99def4',
    width: 200,
    border: 'none',
    outline: 'none',
    marginBottom: 20,
    fontSize: 22,
    padding: 8,
    borderRadius: '10px',
  },
  letters: {
    display: 'flex',
    height: 140,
  },
  letter: {
    opacity: 0,
    marginTop: 100,
    marginLeft: 1,
    fontSize: 22,
    whiteSpace: 'pre',
    color : '#cf9077'
  }
}

export default GraphStatistics;
