import React from "react";
import Helmet from "react-helmet";
import Select, {Option} from 'rc-select';
import _ from 'lodash'

import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

import {
  Container,
  Product,
  Row,
  Col,
  CustomCheckbox,
  Card,
  Widget,
  HEADLINE,
  CAPTION
} from '../components/mystyle'
import ProductListing from "../components/ProductListing";

import {PRIMARY_NAVIGATION} from "../../data/data";

export default class TagTemplate extends React.Component {
  render() {
    const tag = _.kebabCase(this.props.pathContext.tag);
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const tagObj = _.find(PRIMARY_NAVIGATION[0].childrens, (item) => {return item.key === tag} );
    return (
      <div className="tag-container">
        <Helmet title={`Quần áo trẻ em trong mục "${tag}" | ${config.siteTitle}`} />
        <Container>
          <Row>
            <Col sm={3}>
            </Col>
            <Col sm={9}>
              <div className="mb-4">
                <HEADLINE style={{marginBottom: 25}}>
                { tagObj.name } ({postEdges.length})
                </HEADLINE>
                <CAPTION>
                  Quần áo { tagObj.name } đẹp, giá rẻ nhiều mẫu thời trang bé trai mới cập nhật thường xuyên mỗi ngày. 
                  <br />
                  Mặt Trời Nhỏ là nơi chọn mua đồ bé trai tin cậy nhất tại Tp.HCM.
                </CAPTION>
              </div> 
              <div style={{width: 200}}>
                <Select placeholder="Sếp theo">
                  <Option value="gia-dam-dan">Giá giảm dần</Option>
                  <Option value="gia-tang-dan">Giá tăng dần</Option>
                </Select>
              </div>
              <ProductListing postEdges={postEdges} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
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
            date
            price
            salePrice
          }
        }
      }
    }
  }
`;
