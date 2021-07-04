import React from 'react'
import Links from '../../constants/links';
import SocialIcons from '../../constants/social-icons';

const SideBar = (infos) => {
    return (
        <aside class="sidebar" id="sidebar">
        <div>
          <button id="close-btn" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
          <Links />
          <SocialIcons socialLinks={infos.socialLinks}/>
        </div>
      </aside>
    )
}

export default SideBar;