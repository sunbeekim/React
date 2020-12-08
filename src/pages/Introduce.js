import React, {Component} from 'react';
import './Introduce.css';
import Bottom from '../components_bottom/Bottom.js';

class Introduce extends Component {
  //class 컴포넌트

  render(){

    return(

        <div className="it_top">
          <div className="it_1">
            <div>
              <br>
              </br>
            </div>
            <div className="it_2">
              <i>Introduce</i>
              <i className="fab fa-codepen"></i>
            </div>

              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>

            <div className="it_3">
              <h2></h2>
              <h2> Group three</h2>
            </div>

            <div className="it_4">
              <i className="fas fa-address-card"></i>
              <h3>팀     장 : 김 경수</h3>
            </div>

            <div className="it_4">
              <i className="far fa-address-card"></i>
              <h3>팀     원 : 김 선비</h3>
            </div>

            <div className="it_4">
              <i className="fas fa-address-card"></i>
              <h3>팀     원 : 박 효정</h3>
            </div>

            <div className="it_4">
              <i className="fas fa-address-card"></i>
              <h3>팀     원 : 박 효정</h3>
            </div>

            <div className="it_4">
              <i className="fas fa-address-card"></i>
              <h3>팀     원 : 박 효정</h3>
            </div>

            <div className="it_4"> <br></br><br></br>
            </div>

            <br>
            </br>
            <br>
            </br>
            <br>
            </br>

          </div>

          <div >
            <div>
            <Bottom/>
            </div>
          </div>
        </div>

    )
  }
}

export default Introduce;
