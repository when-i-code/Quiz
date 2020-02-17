import React, {Component} from "react";

class Result extends Component {
    componentDidMount() {
        this.props.hideDiv();
    }
    render() {
      return (
          <div className='score-board'>
              <div className='score'>You scored {this.props.score} / 5 correct answers!</div>
              <button className='playBtn' onClick={this.props.playAgain}>Play again</button>
          </div>
      )
  }
}

export default Result;