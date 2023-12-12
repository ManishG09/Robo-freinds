import React from 'react'
import CardList from './CardList'
import { robots } from './Robot'
import SearchBox from './SearchBox'

const App = () => {
  return (
    <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox robots={robots}/>
        <CardList robots={robots} />
    </div>
  )
}

export default App