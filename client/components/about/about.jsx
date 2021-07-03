import React from 'react'

export const About = () => {
    return (
        <section class="section about">
        <div class="section-center about-center">
          {/* <!-- about img --> */}
          <article class="about-img">
            <img src="./images/about-img.jpeg" class="hero-photo" alt="" />
          </article>
          {/* <!-- about info --> */}
          <article class="about-info">
            {/* <!-- section title --> */}
            <div class="section-title about-title">
              <h2>about</h2>
              <div class="underline"></div>
            </div>
            {/* <!-- section title -->
            <!-- lorem 40 --> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
              vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
              expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
              officiis maxime?
            </p>
            {/* <!-- lorem 40 --> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
              vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
              expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
              officiis maxime?
            </p>
            <a href="about.html" class="btn about-btn">about me</a>
          </article>
        </div>
      </section>
    )
}
