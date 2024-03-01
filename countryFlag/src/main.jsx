import React from 'react'
import ReactDOM from 'react-dom/client'
import Country from './Country.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='card-container'>
      <Country />
    </div>
  </React.StrictMode>,
)
