import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    showAnswer: false,
  }

  onTogglePlus = () => {
    this.setState(prevState => {
      const {showAnswer} = prevState

      return {
        showAnswer: !showAnswer,
      }
    })
  }

  render() {
    const {eachDetails} = this.props
    const {questionText, answerText} = eachDetails
    const {showAnswer} = this.state

    return (
      <li className="each-faq-container">
        <div className="question-container">
          <h1 className="questionText">{questionText}</h1>
          <button type="button" className="button" onClick={this.onTogglePlus}>
            {showAnswer ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {showAnswer && (
          <div className="answer-container">
            <hr />
            <p className="answerText">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
