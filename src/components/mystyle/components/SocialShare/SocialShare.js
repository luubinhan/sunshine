import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'

import './SocialShare.css';

export default class SocialShare extends PureComponent {
  render() {
    const {
      href,
      title,
      excerpt,
      img
    } = this.props;
    return (
      <div className="share-social-component">
        <div className="ssc-label">
          Share
        </div>
        <div className="ssc-buttons">
          <div className="social-link-container">
            <a target="_blank" href={`http://www.facebook.com/sharer.php?u=${href}&ptitle=${title}`} className="s-link s-facebook">
              <i className="ion-social-facebook" />
              <span className="s-name">Facebook</span>
            </a>
            <a target="_blank" href={`http://twitter.com/share?text=${encodeURI(title)}&url=${href}`} className="s-link s-twitter"><i className="ion-social-twitter"></i> <span className="s-name">Twitter</span></a>     
            <a target="_blank" href={`mailto:?subject=${title}&amp;body=${href}`} className="s-link s-email">
              <i className="ion-android-mail" />
              <span className="s-name">Email</span>
            </a>
          </div>
        </div>
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={excerpt} />
        <meta itemProp="image" content={img} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image:src" content={img} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={href}/>
        <meta property="og:image" content={img} />
        <meta property="og:description" content={excerpt} />
      </div>
    )
  }
}

SocialShare.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  img: PropTypes.string,
}

SocialShare.defaultProps = {
  title: '',
  excerpt: '',
  img: ''
}
