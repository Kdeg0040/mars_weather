import React, {Component} from 'react';

class SolCard extends Component {
  render () {
    const sol = this.props.solNum;
    const avTemp = Math.round(this.props.data.AT.av);
    const mnTemp = Math.round(this.props.data.AT.mn);
    const mxTemp = Math.round(this.props.data.AT.mx);

    return (
      <div className="column">
        Sol {sol}: {avTemp}°C
      </div>
    )
  }
}

export default SolCard;