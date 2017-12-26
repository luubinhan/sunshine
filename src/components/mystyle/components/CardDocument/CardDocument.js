import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge';
import Button from '../Button';

import './CardDocument.css'

const propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  size: PropTypes.string,
  /*
  Handle Delete
  */
  onDelete: PropTypes.func,

  /*
  Handle download
  */
  onDownload: PropTypes.func
}

const defaultProps = {
  type: 'file',
  desc: '',
  size: '',
  onDelete: null,
  onDownload: null,
}

const getFileIcon = type => {
  switch (type) {
  case 'pdf':
    return 'file-pdf-o';
  case 'doc':
  case 'docx':
  case 'word':
    return 'file-word-o';
  case 'xls':
  case 'xlsx':
  case 'excel':
    return 'file-excel-o';
  case 'rar':
  case 'zip':
  case '7z':
    return 'file-archive-o';
  default:
    return 'file-o';
  }
}

const CardDocument = (props) => {
  const _delete = () => {
    if (typeof props.onDelete === 'function') {
      props.onDelete();
    }
  }
  const _download = () => props.onDownload();

  const {
    type,
    name,
    desc,
    size
  } = props;
  return (
    <div className="file-block">
      <div className="file-icon">
        {getFileIcon(type)}
      </div>
      <div className="file-info">
        <h4 className="file-name">{name}</h4>
        <div className="file-desc">
          {desc}
          {size !== '' &&
            <Badge color="secondary"
              pill
            >
              {size}
            </Badge>
          }
        </div>
      </div>

      <div className="file-action">
        <div className="btn-group mr-2">
          { typeof props.onDownload === 'function' &&
            <Button outline
              color="secondary"
              size="btn-sm"
              onClick={_download}
            >
              <i className="ion-ios-cloud-download" />Download
            </Button>
          }
          {typeof props.onDelete === 'function' &&
            <Button outline
              color="secondary"
              size="btn-sm"
              onClick={_delete}
            >
              <i className="ion-ios-trash" />Delete
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

CardDocument.propTypes = propTypes;
CardDocument.defaultProps = defaultProps;

export default CardDocument;
