import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class BulletItems extends Component {
  constructor (props) {
    super (props);

    this.createTasks = this.createTasks.bind (this);
  }

  delete (key) {
    this.props.delete (key);
  }

  createTasks (item) {
    return (
      <li onClick={() => this.delete (item.key)} key={item.key}>{item.text}</li>
    );
  }

  render () {
    let style = {
      textAlign: 'center',
    };
    var todoBullets = this.props.entries;
    var listItems = todoBullets.map (this.createTasks);

    return (
      <div style={style}>
        <ul className="theList">
          <FlipMove duration={500} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default BulletItems;
