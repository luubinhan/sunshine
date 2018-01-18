import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

import {
  CustomCheckbox,
  Card,
  Widget,
  Button
} from '../mystyle'

import {PRIMARY_NAVIGATION} from '../../../data/data';

import './FilterSidebar.css'

class Filter extends Component {
  state = {
    filterOn: false
  }
  filterBy = {
    category: [],
    tag: []
  };
  _resetFilter = (e) => {
    //reset value of input checkbox
    const checkboxs = document.getElementsByClassName('custom-control-input');
    for (let i = 0; i < checkboxs.length; i += 1) {
      checkboxs[i].checked = false;
    }
    //reset filter values
    this.filterBy = {
      category: [],
      tag: []
    }
    //callback
    this.props.onFilter(this.filterBy)
    this.setState({filterOn: false})
  }
  _changeFilter = (e) => {
    // add to filterBy
    const filterType = e.currentTarget.getAttribute('data-filter');
    //add
    if (e.currentTarget.checked) {
      this.filterBy[filterType] = _.union([e.currentTarget.value], this.filterBy[filterType]);
    } else {
    // remove
      this.filterBy[filterType] = this.filterBy[filterType].filter(value => {
        return value !== e.currentTarget.value;
      });
    }
    // callback to parent
    this.props.onFilter(this.filterBy)
    this.setState({filterOn: ((this.filterBy.category !== undefined && this.filterBy.category.length !== 0) || (this.filterBy.tag !== undefined && this.filterBy.tag.length !== 0))})
  }
  render() {
    const {filterOn} = this.state;
    const {cate} = this.props;
    console.log('dev', cate.key);
    return (
      <div className="filter">
        <Card>
          {filterOn &&
            <div className="filter-reset">
              <Button color="light" size="sm" icon="ion-close-round" onClick={this._resetFilter}>Bỏ chọn</Button>
            </div>
          }
          <Card.Body>
            <div className="filters-group">
              <div className="filter-item">
                <CustomCheckbox className="filter-checkbox" value="khuyen-mai" data-filter="tag" label="Khuyến mãi" onChange={this._changeFilter} />
              </div>
              <div className="filter-item">
                <CustomCheckbox className="filter-checkbox" checked={(cate.key === 'be-trai')} value="be-trai" label="Bé Trai" data-filter="category" onChange={this._changeFilter} />
              </div>
              <div className="filter-item">
                <CustomCheckbox className="filter-checkbox" checked={(cate.key === 'be-gai')} value="be-gai" label="Bé Gái" data-filter="category" onChange={this._changeFilter} />
              </div>
            </div>
            <Widget title="Bạn muốn mua gì" className="widget-filter">
              <Widget.Body>
                <div className="filters-group">
                  {PRIMARY_NAVIGATION[1].childrens.map((item, index) => {
                    return (
                      <div className="filter-item" key={index}>
                        <CustomCheckbox value={item.key} label={item.name} data-filter="tag" onChange={this._changeFilter} />
                      </div>
                    )
                  })}
                  <div className="filter-item">
                    <CustomCheckbox value="khan-mu" label="Khăn mũ" data-filter="tag" onChange={this._changeFilter} />
                  </div>
                  <div className="filter-item">
                    <CustomCheckbox value="ba-lo" label="Ba Lô" data-filter="tag" onChange={this._changeFilter} />
                  </div>
                  <div className="filter-item">
                    <CustomCheckbox value="do-choi" label="Đồ chơi" data-filter="tag" onChange={this._changeFilter} />
                  </div>
                </div>
              </Widget.Body>
            </Widget>
            <Widget title="Theo độ tuổi">
              <Widget.Body>
                <div className="filters-group">
                  {PRIMARY_NAVIGATION[2].childrens.map((item, index) => {
                    return (
                      <div className="filter-item" key={index}>
                        <CustomCheckbox value={item.key} label={item.name} data-filter="tag" onChange={this._changeFilter} />
                      </div>
                    )
                  })}
                </div>
              </Widget.Body>
            </Widget>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  // current selected cate
  cate: PropTypes.object
};

Filter.defaultProps = {
  cate: {}
}

export default Filter;
