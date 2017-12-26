import React from 'react';
import PropTypes from 'prop-types';

import Star from '../Star'

import './Review.css'

const PROPTYPES = {
  rating: PropTypes.string,
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
  postDate: PropTypes.string,
  postViewCount: PropTypes.string,
}
const DEFAULT_PROPS = {
  rating: '0',
  postTitle: '',
  postAuthor: '',
  postDate: '',
  postViewCount: ''
}
const Review = (props) => {
  const {
    rating,
    postTitle,
    postAuthor,
    postDate,
    postViewCount,
  } = props;
  const date = new Date(postDate);
  return (
    <div className="review">
      {postTitle &&
        <div className="review-title">{postTitle}</div>
      }
      <div className="customer">
        <span className="name">{postAuthor}</span>
        {postDate &&
          <span>| {date.toLocaleDateString()}</span>
        }
        {
          postViewCount &&
          <span>| {postViewCount}</span>
        }
      </div>
      <div className="info">
        <Star percent={rating} />
      </div>
      <article className="response">
        {props.children}
      </article>
    </div>
  )
}

Review.propTypes = PROPTYPES;
Review.defaultProps = DEFAULT_PROPS;

export default Review;
