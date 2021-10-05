import React from "react";
import ReactDOM from 'react-dom';
import List from '../components/contacts/list/List';
import nock from 'nock';

// Describe is a test suite
describe("Testing app functionalities", () => {
// It is an individual test
  it("Render List", () => {

  const scope = nock('http://localhost:3001')
   .get('/contacts')
   .reply(200, { contacts: [{ id: 1, first_name: 'Joey', last_name: 'Ramone', email: 'contact@ramones.com', phone: '1234' }] },
   {
     'Access-Control-Allow-Origin': '*',
     'Content-type': 'application/json'
   });

   const div = document.createElement('div');
   ReactDOM.render(<List contacts={[scope] }/>, div);
   ReactDOM.unmountComponentAtNode(div);

  })
});