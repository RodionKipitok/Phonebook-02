import React, { Component } from "react";
import '../filter/filter.css';



class Filter extends Component {



	render(){

   	const {state,onChange} = this.props;
		
	
		
		return(
			<>
			<p className="text">Find contacts by name</p>
			<input
			  onChange={onChange}
			
			  className="inputFilter"
           type="text"
           name="filter"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           required 
			  value={state.filter}/>
			  
			  </>
		)
	}


};

export default Filter;