// import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Favorites from './components/Favorites'
import Modal from './components/Modal'
import Meals from './components/Meals'
import { useGlobalContext } from './Context'

function App() {
  const {showModal, favorites} = useGlobalContext()
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App
