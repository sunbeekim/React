import React, {Component} from 'react';

import './GraphStatistics.css';
import { VelocityComponent } from 'velocity-react';
import Test from '../shared/Test.js';
import objectData from './csvjson.json';
import HighCharts from '../shared/High.js';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Bottom from '../components_bottom/Bottom.js';



console.log(objectData["year"]);

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
  constructor(props) {
  super(props);
  }

  state = {
    letters: [],
    users: objectData,
    info: objectData,
    keyword:'',
    test: objectData.year,
    test2: [{
      2000:{
        year:2000,
        id : 0,
        context : "hello",
      },
      2001:{
        year:2001,
        id : 1,
        context : "hello",
      },
      2002:{
        year:2002,
        id : 2,
        context : "hello",
      },
    }
    ]
  }




  // componentDidMount() {
  //   fetch('http://localhost:4500/todos')
  //     .then(res => res.json(this.state.users))
  //
  // }

  onChange = (e) => {
    const keyword = e.target.value;
    const letters = e.target.value.split('');
    const arr = [];
    letters.forEach((l, i) => {
      arr.push(<VelocityLetter letter={l} />)
    })
    this.setState(() => ({ keyword: keyword,
                          letters: arr }))
  }

  render(){
    // console.log(this.state.test2);
    // const {
    //       year, average_temperature, the_highest_temperature,
    //       minimum_temperature,
    //       Total_steel_quantity,
    //       average_wind_speed,
    //       maximum_wind_speed,
    //       maximum_instantaneous_wind_speed,
    //       mean_relative_humidity,
    //       Total_daily_work_hour,
    //       average_ground_temperature,
    //       gross_output_volume,
    //     } = this.state.users;

    const {info, keyword } = this.state;
    const filteredList = info.filter(
      info => info.number.indexOf(keyword) !== -1
    );
    // const newArrayData = objectData.map(item =>{
    //   return(
    //     <span key={item.number}>
    //       {item.average_temperature}
    //     </span>
    //   )
    // });
    // const newArray = Object.values(newArrayData);
    // console.log(newArrayData);
    // console.log(typeof newArrayData);
    // console.log(Object.values(newArray));
    // console.log(typeof newArray);

    let result_0 = [], result_1 = [], result_2 = [], result_3 = [],
    result_4 = [], result_5 = [], result_6 = [],
    result_7 = [], result_8 = [], result_9 = [],
    result_10 = [], result_11 = [];
    objectData.forEach((item, idx)=>{
      result_0.push(item.year);
      result_1.push(Number(item.average_temperature));
      result_2.push(Number(item.the_highest_temperature));
      result_3.push(Number(item.minimum_temperature));
      result_4.push(Number(item.Total_steel_quantity));
      result_5.push(Number(item.average_wind_speed));
      result_6.push(Number(item.maximum_wind_speed));
      result_7.push(Number(item.maximum_instantaneous_wind_speed));
      result_8.push(Number(item.mean_relative_humidity));
      result_9.push(Number(item.Total_daily_work_hour));
      result_10.push(Number(item.average_ground_temperature));
      result_11.push(Number(item.gross_output_volume));
    });
    console.log(Object.values(result_0));
    console.log(typeof Object.values(result_0));
    console.log(typeof result_0.[1]);
    return(
      <div className="gr_1">
        <div>
          <br>
          </br>
        </div>
        <div className="gr_2">
          <h3>통계 및 예측 데이터 출력화면 입니다</h3>
          <div className="container">
            <input placeholder=""  value={keyword} onChange={this.onChange} className="input" />
            <div className="letters">
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
      <div>
      <HighCharts
        data={result_11} title="연도별 총 생산량" type="line" name="gross_output_volume" category={result_0}/>
      <HighCharts
        data={result_1} title="연도별 평균기온" type="line" name="average_temperature" category={result_0}/>
      <HighCharts
        data={result_2} title="연도별 최고기온" type="line" name="the_highest_temperature" category={result_0}/>
      <HighCharts
        data={result_3} title="연도별 최저기온" type="line" name="minimum_temperature" category={result_0}/>
      <HighCharts
        data={result_4} title="연도별 합계강수량" type="line" name="Total_steel_quantity" category={result_0}/>
      <HighCharts
        data={result_5} title="연도별 평균풍속" type="line" name="average_wind_speed" category={result_0}/>
      <HighCharts
        data={result_6} title="연도별 최대풍속" type="line" name="maximum_wind_speed" category={result_0}/>
      <HighCharts
        data={result_7} title="연도별 최대순간풍속" type="line" name="maximum_instantaneous_wind_speed" category={result_0}/>
      <HighCharts
        data={result_8} title="연도별 평균상대습도" type="line" name="mean_relative_humidity" category={result_0}/>
      <HighCharts
        data={result_9} title="연도별 합계일조시간" type="line" name="Total_daily_work_hour" category={result_0}/>
      <HighCharts
        data={result_10} title="연도별 평균지면온도" type="line" name="average_ground_temperature" category={result_0}/>
      </div>
      <div>
        <Bottom/>
      </div>

      </div>
    )
  }
}

const styles = {
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
