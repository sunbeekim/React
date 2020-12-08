import React, {Component} from 'react';
//https://medium.com/@seungha_kim_IT/react%EC%97%90%EC%84%9C-svg-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-ui-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-766352ca238c
import './LoadingSVG.css';

class LoadingSVG extends Component {
  state = {
    x: 0,
    y: 0
  };
  componentDidMount() {
    this.mounted = true;
    this.tick();
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  tick = () => {
    const time = Date.now() / 100;
    this.setState({
      x: 30 + 20 * Math.sin(time),
      y: 30 + 20 * Math.cos(time)
    });
    if (this.mounted) {
      requestAnimationFrame(this.tick);
    }
  };
  render() {
    const { x, y } = this.state;
    return (
      <div>
      <div>
        <br>
        </br>
      </div>
      <div className="loading">
      <svg width="100" height="60">
        {/* center */}
        <circle r="8" cx={x} cy={y} fill="#7dc2d8" />
        <circle r="8" cx={y} cy={x} fill="#7dc2d8" />
      </svg>
        <div className="loadingfont">
          <h3>loading</h3>
        </div>
      </div>
        <div>
          <br>
          </br>
        </div>
      </div>
    );
  }
}

export default LoadingSVG;
