import React, { Component } from 'react';
import './UserLinks.css';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <p key={link.label}>
        <a target="_blank" href={link.url} className={`btn ${link.label}`}>
          {link.iconClassName !== '' &&
            <i className={`${link.iconClassName} pr-2`} />
          }
          {labeled ? link.label : ''}
        </a>
      </p>
    ))
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        {this.getLinkElements()}
      </div>
    );
  }
}

export default UserLinks;
