import React from 'react'

export const Services = () => {
    return (
        <section class="section bg-grey">
        <div class="section-title">
          <h2>services</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center services-center">
          {/* <!-- single  service--> */}
          <article class="service">
            <i class="fas fa-code service-icon"></i>
            <h4>web development</h4>
            <div class="underline"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
              at repellendus eius omnis asperiores laborum reprehenderit quis
              pariatur quidem placeat.
            </p>
          </article>
          {/* <!-- end of single service -->
          <!-- single  service--> */}
          <article class="service">
            {/* <!-- fab --> */}
            <i class="fab fa-sketch service-icon"></i>
            <h4>web design</h4>
            <div class="underline"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
              at repellendus eius omnis asperiores laborum reprehenderit quis
              pariatur quidem placeat.
            </p>
          </article>
          {/* <!-- end of single service -->
          <!-- single  service--> */}
          <article class="service">
            {/* <!-- fab --> */}
            <i class="fab fa-android service-icon"></i>
            <h4>app design</h4>
            <div class="underline"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
              at repellendus eius omnis asperiores laborum reprehenderit quis
              pariatur quidem placeat.
            </p>
          </article>
          {/* <!-- end of single service --> */}
        </div>
      </section>
    )
}
