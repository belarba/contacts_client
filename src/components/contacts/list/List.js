import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
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
                      <a className="delete" href="#">
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