import React, {Component} from 'react';
import HighCharts from './High.js';
import './Test2.css';

const chaneArray = [];
class Test2 extends Component{
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.count !== nextProps.count) {
      return true;
    }
    return false;
  }
  static defaultProps = {
    info: {
      number:2018,
      year:2018,
      average_temperature:14.6,
      the_highest_temperature:38.5,
      minimum_temperature:-11.5,
      Total_steel_quantity:1427.9,
      average_wind_speed:1.6,
      maximum_wind_speed:11.6,
      maximum_instantaneous_wind_speed:20.4,
      mean_relative_humidity:71.0,
      Total_daily_work_hour:2372.5,
      average_ground_temperature:16.5,
      gross_output_volume:24558.0
    },
  }

  render(){
    const {
          year, average_temperature, the_highest_temperature,
          minimum_temperature,
          Total_steel_quantity,
          average_wind_speed,
          maximum_wind_speed,
          maximum_instantaneous_wind_speed,
          mean_relative_humidity,
          Total_daily_work_hour,
          average_ground_temperature,
          gross_output_volume,
        } = this.props.info;
        // console.log(this.props.info);
        // const newArray = Object.values(this.props.info)
        // newArray.splice(0,2);
        // newArray.splice(10,1);
        // console.log(typeof newArray.[0]);
        const chan_1 = parseFloat(this.props.info.average_temperature);
        const chan_2 = parseFloat(this.props.info.the_highest_temperature);
        const chan_3 = parseFloat(this.props.info.minimum_temperature);
        const chan_4 = parseFloat(this.props.info.Total_steel_quantity);
        const chan_5 = parseFloat(this.props.info.average_wind_speed);
        const chan_6 = parseFloat(this.props.info.maximum_wind_speed);
        const chan_7 = parseFloat(this.props.info.maximum_instantaneous_wind_speed);
        const chan_8 = parseFloat(this.props.info.mean_relative_humidity);
        const chan_9 = parseFloat(this.props.info.Total_daily_work_hour);
        const chan_10 = parseFloat(this.props.info.average_ground_temperature);
        const chan_11 = parseFloat(this.props.info.gross_output_volume);
        // for(let i = 0; i < newArray.length; i++){
        //   chaneArray.[i] = parseFloat(newArray.[i]);
        // }
        // console.log(typeof newArray.[0]);
        // console.log(newArray.[0]);
        // console.log(typeof chaneArray.[0]);
        // console.log(chaneArray);
        // console.log(this.state.count);
        // this.setState(state =>({count:state.count + 1}));
        // console.log(chan_1);
        // console.log(typeof chan_1);
    return(
      <div>
      <HighCharts
        data={[chan_1,chan_2,chan_3,chan_4,chan_5,chan_6,chan_7,chan_8,chan_9,chan_10]} title={year} type="pie" name={year}/>
        <table>
          <tbody>
            <tr className="font">
              <td>| 연도 : {year} |</td>
              <td> 평균기온 : {average_temperature} |</td>
              <td> 최고기온 : {the_highest_temperature} |</td>
              <td> 최저기온 : {minimum_temperature} |</td>
              <td> 합계강수량 : {Total_steel_quantity} |</td>
              <td> 평균풍속 : {average_wind_speed} |</td>
              <td> 최대풍속 : {maximum_wind_speed} |</td>
              <td> 최대순간풍속 : {maximum_instantaneous_wind_speed} |</td>
              <td> 평균상대습도 : {mean_relative_humidity} |</td>
              <td> 합계일조시간 : {Total_daily_work_hour} |</td>
              <td> 평균지면온도 : {average_ground_temperature} |</td>
              <td> 총 생산량 : {gross_output_volume} |</td>
            </tr>

          </tbody>
        </table>



      </div>
    );
  }
}

export default Test2;
