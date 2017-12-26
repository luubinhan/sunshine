import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'
import RC_LOCALE from 'rc-pagination/lib/locale/en_US'


import CardPerson from './CardPerson'


const CardPeopleProps = {
  data: PropTypes.array.isRequired,
}
const CardPeopleDefaultProps = {

}

export default class CardPeople extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 20;

    this.state = {
      pagedRecord: [],
      currentPage: 1,
    }
  }

  componentWillMount() {
    this._changePage(1, this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this._changePage(1, nextProps.data);
  }

  /*
  Handler for change page, it should paging base on filteredUnpagedRecords
  */
  _changePage = (page, data) => {
    const endPoint = this.pageSize * page;
    const startPoint = endPoint - this.pageSize;

    const newPagedRecord = data.slice(startPoint, endPoint);

    this.setState({
      currentPage: page,
      pagedRecord: newPagedRecord
    });
  }

  render() {
    const {
      currentPage,
      pagedRecord
    } = this.state;
    const { data } = this.props;
    return (
      <div className="card-people-component">
        <div className="group-of-people">
          {pagedRecord.map((person, index) => {
            return (
              <CardPerson key={index}
                name={`${person.firstName} ${person.lastName}`}
                {...person}
              />
            )
          })}
        </div>
        {data.length >= this.pageSize &&
          <Pagination
            total={data.length}
            pageSize={this.pageSize}
            locale={RC_LOCALE}
            current={currentPage}
            onChange={this._changePage}
          />
        }
      </div>

    )
  }
}

CardPeople.propTypes = CardPeopleProps;
CardPeople.defaultProps = CardPeopleDefaultProps;
