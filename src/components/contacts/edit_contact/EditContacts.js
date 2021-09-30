import React, { useState } from "react";
import ModalContacts from '../ModalContacts';

const EditContact = (props) => {
  async function handleSubmit(data) {
    try {
      const response = await fetch(`http://localhost:3001/contacts/${props.id}`,
        {
          method: 'PUT',
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
        first_name={props.first_name}
        last_name={props.last_name}
        email={props.email}
        phone={props.phone}
        id={props.id}
        loadContacts={props.loadContacts}
        handleSubmit={handleSubmit}/>
  );
}

export default EditContact;