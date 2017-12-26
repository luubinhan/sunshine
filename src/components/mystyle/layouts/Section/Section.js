import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Section.css'

class Section extends PureComponent {
  render() {
    const {
      bg,
      className,
      cssModule,
      title
    } = this.props;
    const sectionName = this.props.title;
    sectionName.replace(' ', '-').toLowerCase();
    const classes = mapToCssModules(classNames(
      className,
      'section',
      bg ? 'section-with-bg' : false,
      title ? sectionName : false,
    ), cssModule);
    return (
      <div className={classes}>
        <div className="section-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  bg: PropTypes.string,
}
Section.defaultProps = {
  title: ''
}

export default Section;
