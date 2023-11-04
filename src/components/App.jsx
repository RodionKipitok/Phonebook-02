import React, { Component } from "react";
import { customAlphabet } from 'nanoid'
import Form from "./Phonebook/Form";
import Filter from "./Phonebook/filter/Filter";
import Contacts from "./Phonebook/Contacts";


class App extends Component {
  
  state = {
		contacts: [
		{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
		{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
		{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
		{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
	   ],
		filter: '',
		name: '',
      number: ''
	 }



	 handleChange = (evt) => {
		 this.setState(
      {[evt.target.name]: evt.target.value}
     )
	 } 


	 handleSubmitForm = (evt) => {

		evt.preventDefault();


	
		const nanoid = customAlphabet('1234567890abcdef', 10);
		let contactId = nanoid(5);

		this.setState(({ contacts, name,number}) => {

			const newContacts = [...contacts, { id: contactId, name,number}];

			return {contacts: newContacts};

	  });
 

	     this.reset()
	

	 }


	 onFilterName = (evt) => {

		const dataContacts = this.state.contacts;
		const filterInputValue = this.state.filter;
	
		const filterName =  dataContacts.filter(({name}) => {
	
			return name.toLowerCase().includes(filterInputValue.toLowerCase())
			
		})
	 
	     return filterName;
	
		}



		messagesToTheUser = () => {
			const dataContacts = this.state.contacts;
         const nameContact = this.state.name;
			console.log(dataContacts);

		   const isContact = dataContacts.some(({name}) => {

				return nameContact.toLowerCase() === name.toLowerCase()

			})
       
          if(!!isContact){
				alert(`${nameContact} is already in contacts`);
				this.reset();
			 }
			
		};




		deleteContact = (id) => {
   
			console.log(id);
			  
			this.setState(prevState => {

				return { contacts : prevState.contacts.filter(item => item.id !== id)}
			})
		  
		   
		  
			  
			}
		  

	

 
   reset = () => {

     this.setState({name:'',number:''})

   }
  

   render() {
   
		const filteredContacts = this.onFilterName();
		

    return(
      <>
      <Form state={this.state} Change={this.handleChange} onSubmit={this.handleSubmitForm} onClick={this.messagesToTheUser} />
		<Filter state={this.state}  onChange={this.handleChange}/>
		<Contacts  data={filteredContacts} deleteContact={this.deleteContact}/>
      </>
    )
   }


};


export default App;






