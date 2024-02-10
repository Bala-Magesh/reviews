import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentReviewIndex: 0}

  onClickLeftArrow = () => {
    const {currentReviewIndex} = this.state

    if (currentReviewIndex > 0) {
      this.setState({currentReviewIndex: currentReviewIndex - 1})
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const reviewsListLength = reviewsList.length
    const {currentReviewIndex} = this.state

    if (currentReviewIndex < reviewsListLength - 1) {
      this.setState({currentReviewIndex: currentReviewIndex + 1})
    }
  }

  render() {
    const {currentReviewIndex} = this.state
    const {reviewsList} = this.props

    const currentReviewData = reviewsList[currentReviewIndex]
    const {imgUrl, username, companyName, description} = currentReviewData

    const leftArrow = {
      url: 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png',
      alt: 'left arrow',
    }
    const rightArrow = {
      url: 'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png',
      alt: 'right arrow',
    }

    console.log('State changed!')

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="buttons-container">
          <button
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
            className="arrow-button"
          >
            <img src={leftArrow.url} alt={leftArrow.alt} />
          </button>
          <p>{username}</p>
          <button
            testid="rightArrow"
            onClick={this.onClickRightArrow}
            className="arrow-button"
          >
            <img src={rightArrow.url} alt={rightArrow.alt} />
          </button>
        </div>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
