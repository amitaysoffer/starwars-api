import React, { Component } from 'react'
// import axios from 'axios';
import TableChars from './TableChars';

class TableComponent extends Component {
  constructor() {
    super()
    this.state = {
    }
  }




  render() {
    // console.log(this.props.data)
    return (
      <div>
        <TableChars characters={this.props.characters} filteredCharacters={this.props.filteredCharacters} />
      </div>
    )
  }
}

export default TableComponent