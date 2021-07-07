import React from 'react'

const Service = ({ data }) => {
  return (
    <article className="service">
      {/* fas fa-code */}
      <i className={data.icon + " service-icon"}></i>
      <h4>{data.title}</h4>
      <div className="underline"></div>
      <img  
          src={data.thumbnail} 
          alt={data.title}
      />
      <p>
        {data.description}
      </p>
    </article>
  )
}

export default Service
