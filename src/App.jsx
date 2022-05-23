import ContactForm from './components/Form/ContactsForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';

import Container from './App.styled';

export default function App() {
  const [filter, setFilter] = useState('');

  console.log(filter);

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={setFilter} />
      <ContactList filter={filter} />
    </Container>
  );
}
