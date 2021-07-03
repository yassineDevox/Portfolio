import React from 'react'

const Contact = () => {
    return (
        <section class="connect">
        <video
          controls
          autoplay
          muted
          loop
          poster="./images/project-4.jpeg"
          class="video-container"
        >
          <source src="./videos/connect.mp4" type="video/mp4" />
          {/* Sorry, your browser doesn't support embedded videos. */}
        </video>
        <div class="video-banner">
          <div class="section-title">
            <h2>let's get in touch</h2>
            <div class="underline"></div>
          </div>
          <p class="video-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui quam
            exercitationem consequuntur facere hic magni voluptatum animi maiores
            corporis. Consectetur eaque sed perferendis numquam accusamus facere
            magni cumque odit?
          </p>
          <a href="contact.html" class="btn">contact me</a>
        </div>
      </section>
    )
}

export default Contact
