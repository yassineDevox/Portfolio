import React from 'react'

const Service = ({data}) => {
    return (
        <article cladatas="service">
            <i class="fas fa-code service-icon"></i>
            <h4>{data.title}</h4>
            <div class="underline"></div>
            <p>
              {data.description}
            </p>
          </article>
    )
}

export default Service
