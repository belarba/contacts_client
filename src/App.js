import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import './App.scss';
import Header from './components/header/Header';
import Contacts from './components/contacts/Contacts';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt)

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
