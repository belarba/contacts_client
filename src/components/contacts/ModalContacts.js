import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalContacts = (props) => {

  const [first_name, setFirstName] = useState(props.first_name || '');
  const [last_name, setLastName] = useState(props.last_name || '');
  const [email, setEmail] = useState(props.email || '');
  const [phone, setPhone] = useState(props.phone ||'');
  const [show, setShow] = useState('');
  const [id] = useState(props.id || '');
  const [email_error, setEmailError] = useState('');
  const [audits, setAudits] = useState(props.audits || '');
  const [audits_array] = useState(props.audits || '');

  useEffect(async () => { setAudits(props.audits) }, [props.audits])

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
      return (
        <Alert variant="danger" dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Please contact the admin.
            Error {error.message}
          </p>
        </Alert>
      );
    }

  }

  return (
      <div>
      <Button onClick={e => setShow(true)} variant="primary" className="float-right create_contact_btn">{id ? <FontAwesomeIcon icon="edit"/>  : '+ Contact'}</Button>

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
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter First Name" value={first_name || ''} onChange={e => setFirstName(e.target.value)} />
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Last Name" value={last_name || ''} onChange={e => setLastName(e.target.value)} />
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" className={email_error} placeholder="Enter Email" value={email || ''} onChange={e => {setEmail(e.target.value); setEmailError('');}} />
            <Form.Label>Phone</Form.Label>
            <Form.Control required type="text" placeholder="Enter Phone" value={phone || ''} onChange={e => setPhone(e.target.value)} />
          </form>
          {audits_array[0] &&
            <div id="table-wrapper">
              <p>Changes made on this Contact:</p>
              <div id="table-scroll">
                <table>
                    <tbody>
                      {
                        audits.map(function(data){
                          return (
                            <tr> <td>{data.audit_message}</td> </tr>
                          )
                        })
                      }
                    </tbody>
                </table>
              </div>
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="contact-form">
            {id ? 'Save' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }


export default ModalContacts;