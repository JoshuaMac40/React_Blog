import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link} from 'react-router-dom'
const ProjectList = ({ proj}) => {
  return (
    <div className="project-list section">  
     
      {proj && proj.map((projects) => { 
        
        return (
          <Link to={ '/projects/'+ projects.id} key={projects.id}>
            <ProjectSummary project={projects}  />
          </Link>)
      })}
      
  
    </div>
  )
}

export default ProjectList