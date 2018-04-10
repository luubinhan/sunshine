import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import {Checkbox} from 'antd';

import {
  CustomCheckbox,
  Widget,
  Button,
  Search
} from '../mystyle'

import {PRIMARY_NAVIGATION} from '../../../data/data';
import './FilterSidebar.css'

const ALL_TAGS = PRIMARY_NAVIGATION[1].childrens.map(item => {
  return {
    label: item.name,
    value: item.key,
  }
})

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOn: false
    }
    this.filterBy = {
      category: [],
      tag: [],
      keywords: ''
    };
  }
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
  _handleSearch = (newkeywords) => {
    this.filterBy.keywords = newkeywords;
    this.props.onFilter(this.filterBy)
    this.setState({filterOn: true})
  }
  _handleReset = () => {
    this.filterBy.keywords = '';
    this.props.onFilter(this.filterBy)
  }
  _changeTag = e => {
    this.filterBy.tag = e;
    this.props.onFilter(this.filterBy)
    this.setState({filterOn: ((this.filterBy.category !== undefined && this.filterBy.category.length !== 0) || (this.filterBy.tag !== undefined && this.filterBy.tag.length !== 0))})
  }
  render() {
    const {filterOn} = this.state;
    const {cate, selectedTags} = this.props;
    return (
      <div className="filter">
        {filterOn &&
          <div className="filter-reset">
            <Button color="light" size="sm" icon="ion-close-round" onClick={this._resetFilter}>Bỏ chọn</Button>
          </div>
        }
        <Widget className="widget-filter">
          <Widget.Header>
            Tìm sản phẩm
          </Widget.Header>
          <Widget.Body>
            <Search
              handleSearch={this._handleSearch}
              handleReset={this._handleReset}
              placeholder='Tên sản phẩm'
            />
          </Widget.Body>
          <Widget.Header>
          Bạn muốn mua gì
          </Widget.Header>
          <Widget.Body>
            <div className="filters-group">
              <Checkbox.Group options={ALL_TAGS} defaultValue={selectedTags} onChange={this._changeTag} />
            </div>
          </Widget.Body>
          <Widget.Header>
          Theo độ tuổi
          </Widget.Header>
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
      </div>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  // current selected cate
  cate: PropTypes.object,
  // current selected tags,
  selectedTags: PropTypes.array
};

Filter.defaultProps = {
  cate: {},
  selectedTags: []
}

export default Filter;
