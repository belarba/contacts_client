import React from "react";
import Alert from 'react-bootstrap/Alert';
import ModalContacts from '../ModalContacts';

const CreateContact = (props) => {

  async function handleSubmit(data) {
    try {
      const response = await fetch(`http://localhost:3001/contacts`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contact: { first_name: data.firstName, last_name: data.lastName, email: data.email, phone: data.phone}
          })
        }
      )

      if (response.ok) {
        props.loadContacts();
      }

      return response;
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
      <ModalContacts
        loadContacts={props.loadContacts}
        handleSubmit={handleSubmit}/>
  );
}

export default CreateContact;