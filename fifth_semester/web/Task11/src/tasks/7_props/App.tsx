import React from 'react';
import contacts from './contacts';
import IContact from './IContact';
import Card from './Card';

function createCard(contact: IContact, key: number) {
  return <Card
    key={key}
    name={contact.name}
    url={contact.url}
    phone={contact.phone}
    email={contact.email}
  />;
}

function App() {
  return (
    <div>
      <h1>My Contacts</h1>

      {contacts.map((card, index) => createCard(card, index))}
    </div>
  );
}

export default App;
