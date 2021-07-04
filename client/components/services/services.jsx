import React from 'react'
import Service from './service'

export const Services = ({servicesData}) => {
    return (
        <section class="section bg-grey">
        <div class="section-title">
          <h2>services</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center services-center">
          {servicesData.map(s=><Service data={s} key={s.id} />)}
        </div>
      </section>
    )
}
