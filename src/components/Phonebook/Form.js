import React, { Component } from "react";
import '../Phonebook/form.css';
import { customAlphabet } from 'nanoid'

class Form extends Component {

	 render() {

	const {state,Change,onSubmit,onClick} = this.props;
	
	const nanoid = customAlphabet('1234567890abcdef', 10);
	const nameId = nanoid(5);
	const numberId = nanoid(5);

      return (  	

		<>
		<h1 className="phoneBookTitle">Phonebook</h1>
      <form className="form" onSubmit={onSubmit}>
			<label className="label" htmlFor={nameId}>Nama</label>
			<input
			  id={nameId}
			  className="input"
			  onChange={Change}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
			  value={state.name}
              />
			<label className="label" htmlFor={numberId}>Number</label>			
			<input
			  id={numberId}
			  className="input"
			  onChange={Change}
           type="tel"
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
			  value={state.number}
/>
			<button type="submit" className="btnSend" onClick={onClick}>Add contact</button>
		</form>
		
      </>
		)
	 };


};


export default Form;