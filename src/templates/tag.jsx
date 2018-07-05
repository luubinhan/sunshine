import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash'

import FilterSidebar from '../components/FilterSidebar'
import config from '../../data/SiteConfig';

import {
  Container,
  CAPTION
} from '../components/mystyle'
import ProductListing from '../components/ProductListing';
import {getCategoryFromQuery, filterProducts} from '../Utils/common'

import {PRIMARY_NAVIGATION} from '../../data/data';
import { filter } from 'minimatch';

class TagTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: {
        keywords: '',
        selectedCates: [],
        selectedTags: []
      }
    }
  }
  onFilter = (filterBy) => {
    this.setState({filterBy})
  }
  render() {
    const {
      filterBy
    } = this.state;
    const {
      location,
      pathContext
    } = this.props;
    // all data
    const allData = this.props.data.allMarkdownRemark.edges;
    const tag = _.kebabCase(pathContext.tag);
    const tagObj = _.find(PRIMARY_NAVIGATION[0].childrens, (item) => (item.key === tag) );
    let tagKey = '';
    if (tagObj) {
      tagKey = tagObj.key;
    }    
    // get categories from query search
    let cateObj = {};
    if (location.search) {
      cateObj = getCategoryFromQuery(location.search);
    }
    //const tagsSelected = _.union([...filterBy.selectedTags, tagKey]);
    const catesSelected = _.union([...filterBy.selectedCates, cateObj.key]);
    const filteredData = filterProducts({
      keywords: filterBy.keywords,
      selectedCates: catesSelected,
      selectedTags: filterBy.selectedTags || []
    }, allData);
    return (
      <div className="tag-container">
        <Helmet title={`Quần áo trẻ em trong mục "${tag}" | ${config.siteTitle}`} />
        <Container fluid>
          <div className="container-sidebar">
            <div className="sidebar">
              <FilterSidebar
                onFilter={this.onFilter}
                cate={cateObj}
                defaultSelectedTags={[tagKey]}
              />
            </div>
            <div className="right-wrapper">
              <div className="muted pt-30 pb-30">
                Quần áo  {cateObj && cateObj.name} ({filteredData.length} sản phẩm)
              </div>
              <CAPTION style={{display: 'none'}}>
                Quần áo  đẹp, nhiều mẫu thời trang mới, cập nhật thường xuyên.
                <br />
                Mặt Trời Nhỏ là nơi chọn mua đồ cho bé tin cậy nhất tại Tp.HCM.
              </CAPTION>
              <ProductListing postEdges={filteredData} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default TagTemplate;


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
