import React, { Component } from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tags">
        {tags &&
          tags.map(tag =>
            (<Link
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              #<span className="tag">{tag}</span>
             </Link>))}
      </div>
    );
  }
}

export default PostTags;
