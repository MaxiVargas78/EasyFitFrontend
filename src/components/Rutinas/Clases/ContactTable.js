import React, {Component} from 'react';
import ContactRow from './ContactRow';

class ContactTable extends Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      if (contact.Ejercicio.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow contact={contact} />);
    });
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Ejercicio</th>
            <th>Tipo</th>
            <th>Calorias</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ContactTable;