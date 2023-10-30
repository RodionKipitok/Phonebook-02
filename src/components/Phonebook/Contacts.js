import React, { Component } from "react";


class Contacts extends Component {
 

  
	render(){
   
		const {contact} = this.props;
		const {contacts}= contact;
	
     console.log(contacts);

		return(
        <>
		  <h2>Contacts</h2>
		  <ul>
		  {contacts.map(contact => ( <li key={contact.id}>{contact.name}  </li>))}
		  </ul>
		  </>
		 

		)
	}


};

export default Contacts;