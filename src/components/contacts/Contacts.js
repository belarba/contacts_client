import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './list/List';

class Contacts extends Component {
  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="contact_list">
          <p className="title">Contacts</p>
          <List contacts={[{'first_name': 'Daniel', 'last_name':'Silva', 'email': 'aaa@ggg.com', 'phone':'123123'}]}/>
        </Col>
      </Row>
    );
  }
}

export default Contacts;