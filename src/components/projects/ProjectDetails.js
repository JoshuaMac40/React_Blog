import React from 'react'
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
  // refers to mapStateToProps
  
  const { blog,auth } = props;
    if (!auth.uid) { 
      return(<Redirect to="/login"/>)
    }
  console.log(blog);
  if (blog) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ blog.title}</span>
            <p>{ blog.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {blog.authorFirstName  + blog.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
   } else { 
return(<div>Loading</div>)
  }
  
}

const mapStateToProps = (state, ownProps) => { 
  const id = ownProps.match.params.id;
  const projects = state.firestore.ordered.projects;
  const blog= projects ? projects.find(x => x.id === id): null;
  // console.log(id);
  // console.log(blog);
  // console.log(projects[id]);
  return {
    blog: blog,
    auth:state.firebase.auth
  }}
export default compose(
  connect(mapStateToProps), firestoreConnect(
  [
      { collection: "projects"}
    ])
) (ProjectDetails)