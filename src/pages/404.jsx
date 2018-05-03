import React, { Component } from 'react'
import Link from 'gatsby-link'

import config from '../../data/SiteConfig';

class NotFound extends Component {
  render() {
    return (
      <div className="fourzerofour">
        <div className="inner">
          <h1>404. Whoops!</h1>
          <p>Internet quá rộng lớn, đừng để lạc mất nhau!</p>
          <a href={config.fullURL} className="btn btn-light">
            <i className="ion-arrow-left-c"/> Quay lại trang chủ
          </a>
        </div>
      </div>
    )
  }
}
export default NotFound;
