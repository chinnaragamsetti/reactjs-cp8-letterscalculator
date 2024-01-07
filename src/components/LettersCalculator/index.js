// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInputlength: 0}

  onChange = event => {
    this.setState({searchInputlength: event.target.value.length})
  }

  render() {
    const {searchInputlength} = this.state

    return (
      <div className="maincontainer">
        <div className="textcontainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p htmlFor="labell" className="phrase">
            Enter the phrase
          </p>
          <input
            id="labell"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChange}
            className="input"
          />
          <p className="counterletters">No of letters: {searchInputlength}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
