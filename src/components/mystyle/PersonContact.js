import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  Card, CardHeader, Button, CardBody,
  Row, Col, Input 
} from './index'



const PersonContactProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  relation: PropTypes.string,
  personalPhone: PropTypes.string.isRequired,
  companyPhone: PropTypes.string,
  ext: PropTypes.string,
  personalEmail: PropTypes.string,
  companyEmail: PropTypes.string,
  /*
  callback function when user click save
  */
  handleSave: PropTypes.func.isRequired,
  color: PropTypes.string,
  isAddForm: PropTypes.bool,
  handleCancel: PropTypes.func
}
const PersonContactDefaultProps = {
  relation: '',
  companyPhone: '',
  ext: '',
  personalEmail: '',
  companyEmail: '',
  color: '',
  isAddForm: false
}
export default class PersonContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: props
    }
  }
  // save change to state
  _onChange = event => {
    this.setState({ userInput: {...this.state.userInput, [event.target.name]: event.target.value} })
  }

  _onCancel = event => {
    this.props.handleCancel(event);
  }

  _save = () => {
    this.props.handleSave(this.state.userInput);
  }
  render() {
    const {
      name,
      relation,
      personalPhone,
      companyPhone,
      ext,
      personalEmail,
      companyEmail,
      color,
      isAddForm
    } = this.props;
    return (
      <div className='person-contact-component'>
        <Card className="mt-30"
          color={color}
        >
          <CardHeader>
            <div className="d-flex justify-content-between">
              { !isAddForm ?
                <h3>
                  {name}
                </h3>
                :
                <div>
                  <Button size="btn-sm"
                    onClick={this._onCancel}
                  >
                    Cancel
                  </Button>
                </div>
              }
              
              <div>
                <Button color="primary" 
                  size="btn-sm"
                  onClick={this._save}
                >
                  Save
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="form-group">
              <Row>
                <Col>
                  <label htmlFor="">Name</label>
                  <Input defaultValue={name}
                    name="name"
                    onChange={this._onChange}
                  />
                </Col>
                <Col>
                  <label htmlFor="">Relationship</label>
                  <Input defaultValue={relation} 
                    name="relation"
                    onChange={this._onChange}
                  />
                </Col>
              </Row>  
            </div>
            <div className="form-group">
              <Row>
                <Col sm="4">
                  <label htmlFor="">
                    Personal phone
                  </label>
                  <Input defaultValue={personalPhone}
                    name="personalPhone"
                    onChange={this._onChange}
                  />
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col sm="4">
                  <label htmlFor="">
                    Company phone
                  </label>
                  <Input defaultValue={companyPhone}
                    name="companyPhone"
                    onChange={this._onChange}
                  />
                </Col>
                <Col sm="2">
                  <label htmlFor=""> Ext.                 
                  </label>
                  <Input defaultValue={ext}
                    name="ext"
                    onChange={this._onChange}
                  />
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <label htmlFor="">
                    Personal email
                  </label>
                  <Input defaultValue={personalEmail}
                    type="email"
                    name="personalEmail"
                    onChange={this._onChange}
                  />
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <Row>
                <Col>
                  <label htmlFor="">
                    Company email
                  </label>
                  <Input defaultValue={companyEmail}
                    type="email"
                    name="companyEmail"
                    onChange={this._onChange}
                  />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}
PersonContact.propTypes = PersonContactProps;
PersonContact.defaultProps = PersonContactDefaultProps;