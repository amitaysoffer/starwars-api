import React from 'react'
import TableChar from './TableChar'

function DisplayTable(props) {
  return (
    <table className="table table-striped table-hover table-dark">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        {props.filteredCharacters.map(charData =>
          <TableChar charData={charData} key={charData.name} />)}
      </tbody>
    </table>
  )
}


export default DisplayTable