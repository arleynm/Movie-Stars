import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  document.title = 'MoviesStar'

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <footer><p>Feito por Arley Augusto</p></footer>
    </div>
  )
}

export default App
