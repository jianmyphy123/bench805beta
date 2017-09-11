import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextFieldGroup extends Component {

  render() {

    let { name, type, placeholder, error, onChange, onBlur } = this.props;

    return (
      <div>
        <input
          onChange={onChange}
          type={type}
          name={name}
          onBlur = {onBlur}
          placeholder={placeholder}
          className="form-control"
        />
      {error && <span className='err_info' style={{display: 'block'}}>{error}</span>}
      </div>
    );

  }

}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
