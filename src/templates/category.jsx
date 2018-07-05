import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash'
import config from '../../data/SiteConfig';

import {
  Container,
  CAPTION,
} from '../components/mystyle'
import ProductListing from '../components/ProductListing';
import FilterSidebar from '../components/FilterSidebar'
import {onFilter, filterProducts, getTagFromQuery} from '../Utils/common'

import {PRIMARY_NAVIGATION} from '../../data/data';

const DEFAULT_FILTERS = {
  keywords: '',
  selectedTags: []
}

export default class CategoryTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTag: '',
      ...DEFAULT_FILTERS
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const tagFilter = getTagFromQuery(nextProps.location.search);
    
    if (tagFilter) {
      return {defaultTag: tagFilter}
    }
    return null;
  }
  componentDidMount() {
    const {location} = this.props;
    const tagFilter = getTagFromQuery(location.search);
    if (tagFilter) {
      this.state.selectedTags = [tagFilter];
    }
  }
  componentDidUpdate(prevProps, prevState) {
    
  }
  onFilter = ({keywords, selectedTags}) => {    
    this.setState({keywords, selectedTags})
  }
  render() {
    const {keywords, selectedTags} = this.state;

    // Find category name from pathContext
    const currentCategory = this.props.pathContext.category;
    const cateObj = _.find(PRIMARY_NAVIGATION, (item) => item.key === currentCategory);

    // issue of antd, remove empty string
    let selectedTagsNoEmpty = selectedTags.filter(String);
    
    // allData
    const allProducts = this.props.data.allMarkdownRemark.edges;
    const filteredData = filterProducts(allProducts, keywords, selectedTagsNoEmpty);
    return (
      <div className="category-container">
        <Helmet
          title={`Quần áo trẻ em trong mục "${currentCategory}" | ${config.siteTitle}`}
        />
        <Container fluid>
          <div className="container-sidebar">
            <div className="sidebar">
              <FilterSidebar
                onFilter={this.onFilter}
                cate={cateObj}
                selectedTags={selectedTagsNoEmpty}
              />
            </div>
            <div className="right-wrapper">
              <div className="muted pt-30 pb-30">
                Quần áo { cateObj.name } (tìm thấy {filteredData.length} sản phẩm)
              </div>
              <CAPTION style={{display: 'none'}}>
                Quần áo { cateObj.name } đẹp, nhiều mẫu thời trang mới, cập nhật thường xuyên.
                <br />
                Quần Áo Trẻ Em - Mặt Trời Nhỏ là nơi chọn mua đồ cho bé tin cậy nhất tại Tp.HCM.
              </CAPTION>
              <ProductListing postEdges={filteredData} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            thumb1
            thumb2
            thumb3
            thumb4
            mau
            sizes
            date
            price
            salePrice
            category
          }
        }
      }
    }
  }
`;
