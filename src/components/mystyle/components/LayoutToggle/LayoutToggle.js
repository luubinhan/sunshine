import React, {Component} from 'react'
import PropTypes from 'prop-types'

const OPTIONS = [
  {id: 1, key: 'list', icon: 'ion-android-menu'},
  {id: 2, key: 'grid', icon: 'ion-android-apps'},
  {id: 3, key: 'tree', icon: 'ion-android-funnel'},
];
export default class LayoutToggle extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    handleChange: PropTypes.func.isRequired
  }
  static defaultProps = {
    defaultValue: 'list'
  }
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.defaultValue,
    }
  }
  _handleClick = event => {   
    const {name} = event.currentTarget.dataset
    this.setState({activeKey: name});
    // call back to parent
    this.props.handleChange(name);
  }
  render() {
    let {activeKey} = this.state;
    return (
      <div className="btn-group" 
        data-toggle="buttons"
      >
        {OPTIONS.map( item => {
          return(
            <label key={item.id} 
              data-name={item.key}
              className={`btn btn-secondary ${activeKey === item.key ? 'active' : ''}`}
              onClick={this._handleClick}
            >
              <input type="radio"
                autoComplete="off"
                checked={activeKey === item.key ? true : false}
              /> <i className={item.icon} />
            </label>
          )
        })}
      </div>
    );
  }
}
