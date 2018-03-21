import _ from 'lodash'

//handle when filter been changed
const onFilter = function (filterBy) {
  let newFilteredUnpagedData = [...this.props.data.allMarkdownRemark.edges];
  //filter by tag
  if (filterBy.tag.length !== 0) {
    newFilteredUnpagedData = _.filter(newFilteredUnpagedData, item => {
      //loop through the tag array to check with filterBy selected array
      if (item.node.frontmatter.tags !== null) {
        for (let i = 0; i < item.node.frontmatter.tags.length; i += 1) {
          const checkTag = _.kebabCase(item.node.frontmatter.tags[i]);
          if (filterBy.tag.indexOf(checkTag) !== -1) {
            return true
          }
        }
      }
      return false
    })
  }
  // filter by category
  if (filterBy.category.length !== 0) {
    newFilteredUnpagedData = _.filter(newFilteredUnpagedData, item => {
      return (filterBy.category.indexOf(item.node.frontmatter.category) !== -1)
    })
  }
  this.setState({filteredUnpagedData: newFilteredUnpagedData})
}

export {onFilter};

export const DEFAULT_SEARCH_OPTIONS = {
  tokenize: true,
  matchAllTokens: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  shouldSort: false,
}
