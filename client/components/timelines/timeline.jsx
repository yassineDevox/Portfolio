import React from 'react'

const Timeline = ({ data,index }) => {
    return (
        <article class="timeline-item">
            <h4><span>{data.title}</span>{data.dateFin}</h4>
            <p>
                {data.description}
            </p>
            <span class="number">
                {index}
            </span>
        </article>
    )
}

export default Timeline
