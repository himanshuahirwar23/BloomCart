import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Nav } from './Navbar/Nav'
import Page1 from './Pages/Page1'
function App() {
  const [count, setCount] = useState(0)

  return (
   
      <>
      <Nav></Nav>
     <Home></Home>
     <Page1></Page1>
      </>
    
  )
}

export default App
