import React from 'react'
import SocialIcons from '../../constants/social-icons'

export const Footer = ({socialLinks}) => {
    return (
        // <!-- end of blog --> 
        <footer class="footer">
           <SocialIcons socialLinks={socialLinks} />

            <p>&copy; <span id="date"></span> John Doe. All rights reserved.</p>
        </footer>
    )
}
