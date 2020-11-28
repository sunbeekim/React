import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



class High extends Component {




    render() {
      const series2 = this.props.data;
      const title = this.props.title;
      const name = this.props.name;
      const type = this.props.type;  //App.js에서 데이터를 보내줄 예정
             const options = {
                 chart: {
                     type: type		// bar차트. 아무 설정이 없으면 line chart가 된다.
                 },
                 title: {
                     text: title
                 },
                 credits: {
                     enabled: false
                 },
                 xAxis: {
                     type: 'category'
                 },
                 legend: {
                     reversed: true
                 },
                 plotOptions: {
                     series: {
                         stacking: 'normal',
                         dataLabels: {
                             enabled: true,
                             format: "<b>{point.y}</b>",
                         }
                     }
                 },
                 series: [{ name: name, data: series2 }]

             }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}


export default High;
