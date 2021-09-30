import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const ModalContacts = (props) => {

  const [first_name, setFirstName] = useState(props.first_name || '');
  const [last_name, setLastName] = useState(props.last_name || '');
  const [email, setEmail] = useState(props.email || '');
  const [phone, setPhone] = useState(props.phone ||'');
  const [show, setShow] = useState('');
  const [id, setId] = useState(props.id || '');
  const [email_error, setEmailError] = useState('');

  const close = () => {
    setShow(false)
    setEmailError(false)
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await props.handleSubmit({
        id,
        firstName: first_name,
        lastName: last_name,
        email,
        phone,
      });

      if (response.ok) {
        close();
      }

      if (response.status === 422) {
        setEmailError('invalid');
      }

    } catch (error) {
      console.log('error');
      console.log(error);
    }

  }

  return (
      <div>
      <Button onClick={e => setShow(true)} variant="dark" className="float-right create_contact_btn">{id ? 'Edit' : '+ Contact'}</Button>

      <Modal backdrop="static" show={show || false} onHide={e => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{id ? 'Edit' : 'New'} Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="contact-form" onSubmit={handleSubmit}>
            {email_error &&
              <Alert variant="warning">
                This email is already in use
              </Alert>
            }
            <Form.Control required type="text" placeholder="Enter First Name" value={first_name || ''} onChange={e => setFirstName(e.target.value)} />
            <Form.Control required type="text" placeholder="Enter Last Name" value={last_name || ''} onChange={e => setLastName(e.target.value)} />
            <Form.Control required type="email" className={email_error} placeholder="Enter Email" value={email || ''} onChange={e => {setEmail(e.target.value); setEmailError('');}} />
            <Form.Control required type="text" placeholder="Enter Phone" value={phone || ''} onChange={e => setPhone(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="dark" type="submit" form="contact-form">
            {id ? 'Save' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }


export default ModalContacts;