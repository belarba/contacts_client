import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
  async deleteContact(contact) {
    if (window.confirm(`Are you sure you want to delete: "${contact.first_name}" "${contact.last_name}"?`)) {
      await fetch(`http://localhost:3001/contacts/${contact.id}`, {method: 'DELETE'});
      this.props.loadContacts();
    }
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Table responsive>
              <tbody>
                {this.props.contacts.map((contact, index) => {
                  return <tr key={contact.id}>
                    <td className="col-md-3">{contact.first_name}</td>
                    <td className="col-md-3">{contact.last_name}</td>
                    <td className="col-md-3">{contact.email}</td>
                    <td className="col-md-3">{contact.phone}</td>
                    <td>
                      <a className="delete" href="#" onClick={() => this.deleteContact(contact)}>
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>;
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default List;