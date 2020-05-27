import React, {Component} from 'react';

class SolCard extends Component {
  render () {
    const sol = this.props.solNum
    const avTemp = this.props.data.AT.av
    const minTemp = this.props.data.AT.mn
    const maxTemp = this.props.data.AT.mx

    return (
      <div>
        Sol {sol}: {avTemp}
      </div>
    )
  }
}

export default SolCard;