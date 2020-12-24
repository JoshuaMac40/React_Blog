import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import { signOut } from '../../store/actions/authActions'


const LoggedInLinks = (props) => {
  const { initials } = props;
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signout}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{ initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => {dispatch(signOut())}
  }
}
const mapStateToProps=(state)=>{
  return {
    initials:state.firebase.profile.initials
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoggedInLinks)