import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import PostMeta from './PostMeta'

import './Post.css'

class Post extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    postTitle: PropTypes.string,
    postDate: PropTypes.string,
    imgSrc: PropTypes.string,
    href: PropTypes.string.isRequired,
  }
  static defaultProps = {
    className: '',
    postTitle: '',
    imgSrc: '',
    postDate: ''
  }
  render() {
    const {
      className,
      cssModule,
      postTitle,
      imgSrc,
      href,
    } = this.props;
    const classes = mapToCssModules(classNames(
      className,
      'mystyle-item-post',
    ), cssModule);
    return (
      <div className={classes}>
        <article className="item-post clearfix" itemScope="" itemType="http://schema.org/NewsArticle">
          {imgSrc &&
          <figure className="the-post-thumbnail" aria-label="media" role="group" itemProp="associatedMedia" itemScope="" itemType="http://schema.org/ImageObject">
            <a href={href}><img src={imgSrc} alt="" itemProp="thumbnailUrl" /></a>
          </figure>
          }
          <section className="the-post-content">
            <PostMeta postDate={this.props.postDate} />
            {postTitle &&
            <header className="heading-post" itemProp="headline">
              <a href={href}>{postTitle}</a>
            </header>
            }
            <footer className="post-excert" itemProp="description">
              {this.props.children}
            </footer>
          </section>
        </article>
      </div>
    );
  }
}

export default Post;
