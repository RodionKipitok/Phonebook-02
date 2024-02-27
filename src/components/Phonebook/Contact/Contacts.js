import React, { Component } from 'react';
import '../Contact/contact.css';

function Contact({ contacts, fucnDelete }) {
  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {contacts.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                fucnDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contact;
