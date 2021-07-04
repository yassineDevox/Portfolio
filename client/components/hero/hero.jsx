import React from 'react'
import SocialIcons from '../../constants/social-icons'

export const Hero = ({ infos }) => {
  return (
    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>i'm {infos.firstName}</h1>
          <h4>{infos.profil}</h4>
          <a href="contact.html" class="btn hero-btn">hire me</a>
          <SocialIcons socialLinks = {infos.socialLinks}/>
        </article>
        <article class="hero-img">
          <img src={infos.heroAvatar} class="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>

  )
}
