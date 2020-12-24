import React from 'react'
import { Link } from 'react-router-dom'
import LoggedInLinks from './LoggedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux"


const Navbar = (props) => {
 
  const links = props.auth.uid ? <LoggedInLinks /> : <SignedOutLinks />;
  const LoadedNavBar = props.auth.isLoaded ? links : <p></p>

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Blog Plan</Link>
        { LoadedNavBar}
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => { 
  console.log(state);
  return {
    auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar)