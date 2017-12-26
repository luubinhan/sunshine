import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import PostMeta from './PostMeta';

import './PostGrid.css'

class PostGrid extends Component {
  render() {
    const {
      className,
      cssModule,
      img,
      title,
      path,
      excerpt,
      date
    } = this.props;
    const meta = new Date(date);
    const classes = mapToCssModules(classNames(
      className,
      'item-post-grid clearfix col-xs-12 col-sm-6 col-md-4 col-lg-4',
    ), cssModule);
    return (
      <div className={classes}>
        <article>
          {img &&
          <figure className="the-post-thumbnail" ariaLabel="media" role="group">
            <a href={path}>
              <img src={img} alt={title} itempPop="thumbnailUrl" />
            </a>
          </figure>
          }
          <section className="the-post-content">
            <header className="heading-post" itemProp="headline">
              <a href={path}>{title}</a>
            </header>

            {date &&
              <PostMeta>{meta.toLocaleDateString()}</PostMeta>
            }

            {excerpt &&
            <PostDesc>{excerpt}</PostDesc>
            }
          </section>
        </article>
      </div>
    );
  }
}

PostGrid.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string,
};
PostGrid.defaultProps = {
  img: '',
  excerpt: '',
  date: '',
}

export default PostGrid;
