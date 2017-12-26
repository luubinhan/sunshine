import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './PostMeta.css'

class PostMeta extends PureComponent {
  static propTypes = {
    postDate: PropTypes.string,
  }
  static defaultProps = {
    postDate: ''
  }
  render() {
    const {
      postDate
    } = this.props;
    const dateObject = new Date(postDate);
    return (
      <div className="post-meta">
        <div className="post-date">
          <time className="dateline" dateTime={dateObject.toLocaleDateString()} itemProp="dateModified" content={dateObject.toLocaleDateString()}>{dateObject.toLocaleDateString()}</time>
        </div>
        <div className="post-category">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PostMeta;
