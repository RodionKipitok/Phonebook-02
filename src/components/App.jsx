import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const nanoid = customAlphabet('1234567890abcdef', 10);
    let id = nanoid(5);
    this.setState(prevState => {
      const newContact = {
        id,
        name,
        number,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = idContactDelete => {
    console.log(idContactDelete);

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          item => item.id !== idContactDelete
        ),
      };
    });
  };

  filterContact = () => {
    const contacts = this.state.contacts;
    const filterImputValue = this.state.filter;

    const filterName = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterImputValue.toLowerCase());
    });
    return filterName;
  };

  setStateFilterValue = value => {
    this.setState({
      filter: value,
    });
  };

  render() {
    return (
      <>
        <PhonebookForm
          funcaddContact={this.addContact}
          contacts={this.state.contacts}
        />
        <Filter
          filterValue={this.state.filter}
          funcFilter={this.setStateFilterValue}
        />
        <Contacts
          contacts={this.filterContact()}
          fucnDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
