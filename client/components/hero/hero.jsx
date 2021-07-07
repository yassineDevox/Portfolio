import React from 'react'
import SocialIcons from '../../constants/social-icons'

export const  Hero = ({ infos }) => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>i'm {infos.firstName}</h1>
          <h4>{infos.profil}</h4>
          <a href="contact.html" className="btn hero-btn">hire me</a>
          <SocialIcons socialLinks = {infos.socialLinks}/>
        </article>
        <article className="hero-img">
          <img src={infos.heroAvatar} className="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>

  )
}

export default Hero;
