// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  output = () => {
    if (this.state.secondsLeft === 0) {
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>{this.output()}</div>
    )
  }
}

export default Bomb;
