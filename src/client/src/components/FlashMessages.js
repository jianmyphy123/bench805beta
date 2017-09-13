import React from 'react';
import PropTypes from 'prop-types';

class FlashMessages extends React.Component {
  render() {
    const messages = this.props.messages.map((message, i) =>
      <li key={i}>{message}</li>
    );
    return (
      <ul className="error">
        {messages}
      </ul>
    );
  }
}

FlashMessages.propTypes = {
  messages: PropTypes.array.isRequired
}

export default FlashMessages;
