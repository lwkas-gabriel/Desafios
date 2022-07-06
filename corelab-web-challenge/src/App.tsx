import { useState } from 'react'
import { NewEntryButton } from './components/NewEntryButton'
import { SearchBar } from './components/SearchBar'

function App() {

  return (
    <div className='flex flex-col items-center gap-[34px]'>
      <SearchBar/>
      <NewEntryButton />
    </div>
  )
}

export default App
