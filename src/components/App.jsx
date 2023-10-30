import React, { Component } from "react";
import { customAlphabet } from 'nanoid'
import Form from "./Phonebook/Form";


class App extends Component {
  
  state = {
		contacts: [],
		name: '',
      number: ''
	 }



	 handleChange = (evt) => {
		 this.setState(
      {[evt.target.name]: evt.target.value}
     )
	 } 


	 handleSubmitForm = (evt) => {
		evt.preventDefault()
	
		const nanoid = customAlphabet('1234567890abcdef', 10);
		let contactId = nanoid(5);

		this.setState(({ contacts, name}) => {

			const newContacts = [...contacts, { id: contactId, name}];

			return {contacts: newContacts};

	  });
 




	     this.reset()
	

	 }

 
   reset = () => {

     this.setState({name:'',number:''})

   }
  

   render() {

    return(
      <>
      <Form state={this.state} Change={this.handleChange} onSubmit={this.handleSubmitForm} />
		
      </>
    )
   }


};


export default App;






