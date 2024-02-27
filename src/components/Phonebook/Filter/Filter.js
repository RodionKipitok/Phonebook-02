import React, { Component } from 'react';
import '../Filter/filter.css';

class Filter extends Component {
  render() {
    console.log(this.props);
    const { filterValue, funcFilter } = this.props;
    return (
      <>
        <p className="text">Find contacts by name</p>
        <input
          onChange={evt => {
            funcFilter(evt.target.value);
          }}
          className="inputFilter"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={filterValue}
        />
      </>
    );
  }
}

export default Filter;
