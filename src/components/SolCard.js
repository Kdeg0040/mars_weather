import React, {Component} from 'react';

class SolCard extends Component {
  render () {
    return (
      <div>
        Sol {this.props.solNum}: {this.props.data.AT.av}
      </div>
    )
  }
}

export default SolCard;