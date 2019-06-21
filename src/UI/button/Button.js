import React from 'react';
import './button.scss';

class Button extends React.Component {
  button = () => {
    let { type, disabled, addStyle, spinner } = this.props;
    let template = '';
    switch (type) {
      case 'default':
        template = (
          <button disabled={disabled} style={addStyle ? addStyle : null} className={'default'}>
            <span>{this.props.children}</span>
            {spinner ? '...' : null} {/* spinner in real app*/}
          </button>
        );
        break;

      default:
        template = '';
    }
    return template;
  };

  render() {
    return <span>{this.button()}</span>;
  }
}

export default Button;
