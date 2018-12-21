import React, {Component} from 'react';
import BulletItems from './BulletItems';
import './Bullet.css';
import Label from '../Label';

class CriarBullet extends Component {
  constructor (props) {
    super (props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind (this);
    this.deleteItem = this.deleteItem.bind (this);
  }

  deleteItem (key) {
    var filteredItems = this.state.items.filter (function (item) {
      return item.key !== key;
    });

    this.setState ({
      items: filteredItems,
    });
  }

  addItem (e) {
    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now (),
      };

      this.setState (prevState => {
        return {
          items: prevState.items.concat (newItem),
        };
      });

      this._inputElement.value = '';
    }

    console.log (this.state.items);

    e.preventDefault ();
  }

  render () {
    return (
      <div className="Bullet">
        <div className="principal">
          <Label htmlFor="name" text="Criar Bullet" />
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="Digite sua tarefa"
            />

            <button type="submit">Adicionar</button>
          </form>
        </div>
        <BulletItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default CriarBullet;
