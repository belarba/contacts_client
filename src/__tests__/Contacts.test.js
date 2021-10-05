import React from "react";
import ReactDOM from 'react-dom';
import Contacts from '../components/contacts/Contacts';

// Describe is a test suite
describe("Testing app functionalities", () => {
// It is an individual test
  it("Render Contacts", () => {

   const div = document.createElement('div');
   ReactDOM.render(<Contacts />, div);
   ReactDOM.unmountComponentAtNode(div);

  })
});