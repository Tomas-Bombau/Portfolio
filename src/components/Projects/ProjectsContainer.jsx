import React from 'react'
import Projects from './Projects';
import s from './ProjectsContainer.module.css'

const ProjectsContainer = (props) => {
  const { data } = props;

  return (
    <div className={s.projectsContainer}>
      {data.map((e) => {
        return (
          <Projects key={e.id} id={e.id} image={e.image} title={e.title} description={e.description} tecnologies={e.tecnologies} deploy={e.deploy}/>
        );
      })}
    </div>
  )
}

export default ProjectsContainer