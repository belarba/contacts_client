import React from 'react';
import Container from 'react-bootstrap/Container'

import './App.scss';
import Header from './components/header/Header';
import Contacts from './components/contacts/Contacts';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt, faEdit)

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Contacts/>
      </Container>
    </div>
  );
}

export default App;
