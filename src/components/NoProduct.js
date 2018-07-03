import React, { PureComponent } from 'react';

import config from '../../data/SiteConfig';

class NoProduct extends PureComponent {
  render() {
    return (
      <div className="no-product">
        <h4>
          <i>Rất tiếc</i>, chúng tôi không tìm thấy sản phẩm theo yêu cầu của bạn
        </h4>
        <hr/>
        <div>
        Chúng tôi luôn sẵn lòng tìm kiếm những sản phẩm bạn mong muốn. Hãy gọi hoặc liên hệ qua fanpage của shop để chúng tôi tìm giúp
        </div>
        <hr/>
        <div>
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </div>
        <div>
          <h2>{config.phone}</h2>
        </div>
        Thời gian làm việc: Thứ 2 đến Thứ 6 từ 6SA-6CH • Thứ 7 - Chủ Nhật từ 7SA - 1CH
      </div>
    );
  }
}

export default NoProduct;
