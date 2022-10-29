import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


import Search from './Search'


import '../../App.css'

const Header = () => {

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img className="logo-image-top" src="./images/Extreme_Custom_Carts.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">




        </div>
      </nav>
    </Fragment>
  )
}

export default Header