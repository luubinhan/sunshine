import React, { PureComponent } from 'react';

class SectionHeader extends PureComponent {
  render() {
    return (
      <div className="section-header">
        {this.props.children}
      </div>
    );
  }
}

export default SectionHeader;
