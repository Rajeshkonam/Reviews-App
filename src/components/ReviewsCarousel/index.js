import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  renderActiveReview = props => {
    const {imgUrl, username, companyName, description} = props
    return (
      <div className="d3">
        <img src={imgUrl} alt={username} />
        <p className="p1">{username}</p>
        <p>{companyName}</p>
        <p className="p3">{description}</p>
      </div>
    )
  }

  leftBtn = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  rightBtn = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const xxx = reviewsList[activeReview]

    return (
      <div className="d1">
        <h1 className="p2">Reviews</h1>
        <div className="d2">
          <button type="button" onClick={this.leftBtn} className="b1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(xxx)}
          <button type="button" onClick={this.rightBtn} className="b1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
