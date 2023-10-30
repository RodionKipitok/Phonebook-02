import React, { Component } from "react";
import Contacts from "./Contacts";

class Form extends Component {

	 render() {

	const {state,Change,onSubmit} = this.props;	
	
	

      return (  	

		<>
		<h1 className="phoneBookTitle">Phonebook</h1>
      <form className="form" onSubmit={onSubmit}>
			<label className="labelName">
				Name
			<input
			  className="imputName"
			  onChange={Change}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
			  value={state.name}
              />
			</label>
			<label>
				Number
			<input
			  onChange={Change}
           type="tel"
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
			  value={state.number}
/>
			</label>
			<button type="submit">Add contact</button>
		</form>
		<Contacts contact={this.props.state}/>
      </>
		)
	 };


};


export default Form;