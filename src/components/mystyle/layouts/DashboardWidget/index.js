import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class DashboardWidget extends Component {
 static propTypes = {

   /*
		Show a control to toggle the widget body
		 */
   showToggle: PropTypes.bool,

   /*
		Widget's title
		 */
   title: PropTypes.string,

   /*
		Widget's icon
		 */
   icon: PropTypes.string,

   children: PropTypes.node

 }

 static defaultProps = {
   showToggle: false,
   title: ''
 }

 constructor(props) {
   super(props);
   this.state = {
     isCollapsed: false,
   }
 }

 /**
  * Toggle show/hide widget body
  */
_changeCollapse = () => this.setState({ isCollapsed: !this.state.isCollapsed})

render() {
  const {title, showToggle, icon} = this.props;
  const {isCollapsed} = this.state;
  return (
    <div className={`dashboard-widget-container dashboard-widget-${title.trim().toLowerCase().replace(' ', '-')}`}>
      <div className='inner'>

        { title && (
          <div className='dw-header'>
            {icon && (
              <i className={icon} />
            )}

            {title}
            { showToggle && (
              <span className={`dw-toggle-control ${isCollapsed ? 'collapsed' : ''}`}
                onClick={this._changeCollapse}
              >
                <i className="ms-Icon ms-Icon--ChevronUp" />
              </span>
            )}
          </div>
        )}

        { !isCollapsed && (
          <div className='dw-body'>
            {this.props.children}
          </div>
        )}
      </div>
    </div>
  );
}
}
