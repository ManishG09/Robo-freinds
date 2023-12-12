import React from 'react'
import { useState } from 'react'

const SearchBox = ({robots}) => {
    const [search, useSearch] = useState('')

    function handleCLick(e){
        console.log(e.target.value)
        search(e.traget.value)
        const filteredRobot = robots.filter((robot) => {
          return robot
        })
       
    }

  return (
    <div>
    <input  className="pa3 ba b--gren bg-lightest-blue"
    type='search' placeholder ="search robots" onChange={handleCLick}/>
    </div>
  )
}

export default SearchBox