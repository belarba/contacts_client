import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './list/List';
import CreateContact from './create_contact/CreateContacts';

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.loadContacts = this.loadContacts.bind(this);
  }

  async loadContacts() {
    let response = await fetch(`http://localhost:3001/contacts.json`);
    const contacts = await response.json();
    this.setState({ contacts: contacts });
  }

  componentDidMount() {
    this.loadContacts();
  }

  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="contact_list">
          <p className="title">Contacts</p>
          <List loadContacts={this.loadContacts} contacts={this.state.contacts}/>
          <CreateContact loadContacts={this.loadContacts}/>
        </Col>
      </Row>
    );
  }
}

export default Contacts;