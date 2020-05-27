import React, {Component} from 'react';
import moment from 'moment';

class SolCard extends Component {
  render () {
    const sol = this.props.solNum;
    const avTemp = Math.round(this.props.data.AT.av);
    const mnTemp = Math.round(this.props.data.AT.mn);
    const mxTemp = Math.round(this.props.data.AT.mx);
    const earthDate = moment(this.props.data.First_UTC).format('DD MMM');

    return (
      <div className="column">
        <div className="box">
          <h1 className="title is-4">Sol {sol} </h1>
          <h1 className="subtitle is-6">{earthDate}</h1>
          <p></p>
          <h1 className="title is-2 has-text-centered">{avTemp}°C</h1>
          <p>min: {mnTemp}°C</p>
          <p>max: {mxTemp}°C</p>
        </div>      
      </div>
    )
  }
}

export default SolCard;