import React, { PureComponent } from 'react';

class SectionBody extends PureComponent {
  render() {
    return (
      <div className="section-body">
        {this.props.children}
      </div>
    );
  }
}

export default SectionBody;
