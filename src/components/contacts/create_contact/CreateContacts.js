import React from "react";
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
      console.log('error');
      console.log(error);
    }
  }

  return (
      <ModalContacts
        loadContacts={props.loadContacts}
        handleSubmit={handleSubmit}/>
  );
}

export default CreateContact;