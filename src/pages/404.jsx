import React, { Component } from 'react'

import config from '../../data/SiteConfig';

class NotFound extends Component {
  render() {
    return (
      <div className="fourzerofour">
        <div className="inner">
          <h1>Rất tiếc!</h1>
          <p>Chúng tôi không tìm thấy trang bạn yêu cầu!</p>
          <a href={config.fullURL} className="btn btn-light">
            <i className="ion-arrow-left-c" /> Quay lại trang chủ
          </a>
        </div>
      </div>
    )
  }
}
export default NotFound;
