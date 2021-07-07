import React from 'react'

function Project({data}) {
    return (
        <article class="single-project">
        <div class="project-container">
          <img src={data.thumbnail} alt="single project" />
          <a href={data.demoLink} class="project-icon">
            <i class="fas fa-home"></i>
          </a>
        </div>
        <div class="project-details">
          <h4>{data.name}</h4>
          <p>
              {data.description}
          </p>
          <div class="project-footer">
            <span>
              <i class="fab fa-github"></i>
            </span>
            <a href={data.srcCodeLink}>source code</a>
          </div>
        </div>
      </article>
    )
}

export default Project
