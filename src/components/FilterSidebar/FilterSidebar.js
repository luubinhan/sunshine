import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import {Checkbox} from 'antd';

import {
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
});

class Filter extends Component {
  constructor(props) {
    super(props);
    this.filterBy = {
      selectedCates: [],
      selectedTags: [],
      keywords: ''
    }
  }
  _handleSearch = (newkeywords) => {
    this.filterBy.keywords = newkeywords;
    this.props.onFilter(this.filterBy)
  }
  _changeTag = e => {
    this.filterBy.selectedTags = e;
    this.props.onFilter(this.filterBy)
  }
  render() {
    const {defaultSelectedTags} = this.props;
    return (
      <div className="filter">
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
        </Widget>
        <Widget className="widget-categories">
          <Widget.Header>
            Bạn muốn mua gì
          </Widget.Header>
          <Widget.Body>
            <div className="filters-group">
              <Checkbox.Group options={ALL_TAGS} defaultValue={defaultSelectedTags} onChange={this._changeTag} />
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
  defaultSelectedTags: PropTypes.array
};

Filter.defaultProps = {
  cate: {},
  defaultSelectedTags: []
}

export default Filter;
