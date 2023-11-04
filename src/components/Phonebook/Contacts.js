import React, { Component } from "react";
import '../Phonebook/contact.css';



class Contacts extends Component {

	idTransfer= (id) => {
	const {deleteContact} = this.props;
	deleteContact(id)
	
 }

  
	render(){

	
	const {data} = this.props;


		return(
        <>
		  <h2 className="titleContact">Contacts</h2>
		   <ul className="list">
				{data.map((contact) => (
				<li className="contactItem" key={contact.id}>{contact.name}   {contact.number}   <button className="btnContact" onClick={() => {
					this.idTransfer(contact.id)
				}}>Delete</button></li>
				))}
			</ul>
	
		  </>
		 

		)
	}


};

export default Contacts;