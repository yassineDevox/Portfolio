import React from 'react'

export const About = ({infos}) => {
    return (
        <section class="section about">
        <div class="section-center about-center">
          {/* <!-- about img --> */}
          <article class="about-img">
            <img  
              src={infos.aboutAvatar} 
              class="hero-photo" alt="" 
            />
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
              {infos.aboutMe}
            </p>
            <a href="about.html" class="btn about-btn">about me</a>
          </article>
        </div>
      </section>
    )
}
