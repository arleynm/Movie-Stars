import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './pages/home'
import Movie from './pages/Movie'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='movie/:id' element={<Movie/>}></Route>
            <Route path='search' element={<Search/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </React.StrictMode>,
)
