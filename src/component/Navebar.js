import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
      <Link class="navbar-brand" to='/' >mzc</Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <Link class="nav-link active" to='/'>Addbooks</Link>
        <Link class="nav-link"  to='/search'>Searchbook</Link>
        <Link class="nav-link"  to='/view'>Viewbooks</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navebar