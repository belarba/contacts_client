import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditContact from '../edit_contact/EditContacts';
class List extends Component {
  async deleteContact(contact) {
    if (window.confirm(`Are you sure you want to delete: ${contact.first_name} ${contact.last_name}?`)) {
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
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.contacts.map((contact, index) => {
                  return <tr key={contact.id}>
                    <td className="col-md-3">{contact.first_name}</td>
                    <td className="col-md-3">{contact.last_name}</td>
                    <td className="col-md-3">{contact.email}</td>
                    <td className="col-md-3">{contact.phone}</td>
                    <td>
                      <EditContact
                        first_name={contact.first_name}
                        last_name={contact.last_name}
                        email={contact.email}
                        phone={contact.phone}
                        id={contact.id}
                        audits={contact.audits}
                        loadContacts={this.props.loadContacts}
                      />
                    </td>
                    <td>
                      <Button variant="secondary" onClick={() => this.deleteContact(contact)}>
                        <FontAwesomeIcon icon="trash-alt"/>
                      </Button>
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