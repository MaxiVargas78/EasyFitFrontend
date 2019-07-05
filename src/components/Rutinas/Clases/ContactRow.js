import React, {Component} from 'react';

class ContactRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.Ejercicio}</td>
        <td>{this.props.contact.Tipo}</td>
        <td>{this.props.contact.Calorias}</td>
      </tr>
    );
  }
}

export default ContactRow;