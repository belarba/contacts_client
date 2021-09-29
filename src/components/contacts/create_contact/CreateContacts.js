import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateContact(props) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState('');

  const handleSubmit = (async () => {
    await fetch(`http://localhost:3001/contacts`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact: { first_name: first_name, last_name: last_name, email: email, phone: phone}
        })
      }
    )
    setShow(false)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    props.loadContacts();
  });

  return (
    <div>
      <Button onClick={e => setShow(true)} variant="dark" className="float-right create_contact_btn">+ Contact</Button>

      <Modal show={show || false} onHide={e => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="email" placeholder="Enter First Name" value={first_name || ''} onChange={e => setFirstName(e.target.value)} />
          <Form.Control type="email" placeholder="Enter Last Name" value={last_name || ''} onChange={e => setLastName(e.target.value)} />
          <Form.Control type="email" placeholder="Enter Email" value={email || ''} onChange={e => setEmail(e.target.value)} />
          <Form.Control type="email" placeholder="Enter Phone" value={phone || ''} onChange={e => setPhone(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e => setShow(false)}>
            Close
          </Button>
          <form onSubmit={handleSubmit}>
            <Button variant="dark" type="submit">
              Create
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateContact;