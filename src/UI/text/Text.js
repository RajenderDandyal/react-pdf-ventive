import React, {Component} from 'react';
import "./text.scss";

class Text extends Component {
  render() {
    let {type, addStyle} = this.props;

    switch(type) {
      case "heading":
        return <h1 style={addStyle? addStyle: null} className={"heading"}>{this.props.children}</h1>
      case "subheading":
        return <h3 style={addStyle? addStyle: null} className={"subHeading"}>{this.props.children}</h3>
      case "para":
        return <p style={addStyle? addStyle: null} className={"para"}>{this.props.children}</p>
      default:
        return <p style={addStyle? addStyle: null} className={"para"}>{this.props.children}</p>
    }
  }
}

export default Text;