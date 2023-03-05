import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)

    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="list-of-faq">
            {faqsList.map(eachList => (
              <FaqItem key={eachList.id} eachDetails={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
