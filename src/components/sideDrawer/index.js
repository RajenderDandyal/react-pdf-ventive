import React from 'react';
import './sideDrawer.scss';
import BackDrop from '../backDrop';
import Sidebar from '../sidebar';

class SideDrawer extends React.Component {
  render() {
    let { selected, filesList, onSelectDoc, uploadHandler } = this.props;

    let addClass = ['sideDrawer', 'close'];
    if (this.props.show) {
      addClass = ['sideDrawer', 'open'];
    }
    return (
      <div onClick={this.props.menuClicked}>
        <BackDrop show={this.props.show} backDrop={this.props.backDrop} />
        <div
          style={{
            transform: this.props.show ? 'translateX(0)' : 'translateX(-100%)',
          }}
          className={addClass.join(' ')}
        >
          <Sidebar
            selected={selected}
            filesList={filesList}
            onSelectDoc={id => onSelectDoc(id)}
            uploadHandler={file => uploadHandler(file)}
          />
        </div>
      </div>
    );
  }
}

export default SideDrawer;
