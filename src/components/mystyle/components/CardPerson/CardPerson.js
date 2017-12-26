import React from 'react'
import PropTypes from 'prop-types'

import {Col, Row, Badge} from '../../'

import './CardPerson.css'

const CardPersonProps = {
  imgUrl: PropTypes.string,
  imgSize: PropTypes.number,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  officePhone: PropTypes.string,
  personalPhone: PropTypes.string,
  department: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
}
const CardPersonDefaultProps = {
  imgUrl: '',
  email: '',
  jobTitle: '',
  location: '',
  officePhone: '',
  personalPhone: '',
  href: '',
  department: '',
  imgSize: 3,
  children: null
}

const CardPerson = (props) => {
  const {
    name, email, imgUrl, jobTitle, location, officePhone, personalPhone, department, href, imgSize
  } = props;
  return (
    <div className="card card-person">
      <div className="card-body">
        <Row>
          {imgUrl &&
            <Col md={imgSize}>
              <div className="person-img">
                <a href={href}>
                  <img className="card-img-top rounded-circle"
                    src={imgUrl}
                    alt={name}
                  />
                </a>
              </div>
            </Col>
          }
          <Col>
            <h4 className="card-title">
              <a href={href}>{name}</a>
            </h4>

            {email &&
              <div>
                <a href={`mailto:${email}`}
                  className='email'
                >
                  <i className="ion-ios-email-outline" />{email}
                </a>
              </div>
            }
            {department &&
              <Badge><a href={`home/employees/department/${department}`}>{department}</a></Badge>
            }
            {jobTitle &&
              <div className="job-title">
                {jobTitle}
              </div>
            }
            {location &&
              <div className="location">
                {location}
              </div>
            }
            {officePhone &&
              <div className="office-phone">
                <i className="ion-ios-telephone-outline" />{officePhone}
              </div>
            }
            {personalPhone &&
              <div className="personal-phone">
                <i className="ion-iphone" />{personalPhone}
              </div>
            }
            <div className="card-text">
              {props.children}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

CardPerson.propTypes = CardPersonProps;
CardPerson.defaultProps = CardPersonDefaultProps;

export default CardPerson;
