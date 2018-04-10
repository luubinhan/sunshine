import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
          <a href="mailto:truongtomi0708@gmail.com">truongtomi0708@gmail.com</a>
        </div>
        <div>
          <h2>866.374.8747</h2>
        </div>
        Thời gian làm việc: Thứ 2 đến Thứ 6 từ 6SA-6CH • Thứ 7 - Chủ Nhật từ 7SA - 1CH
      </div>
    );
  }
}

NoProduct.propTypes = {

};

export default NoProduct;
