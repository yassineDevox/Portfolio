import React from 'react'

const SocialIcons = ({socialLinks}) => {
    return (
        <ul class="social-icons hero-icons">
              {/* <!-- single item --> */}
              <li>
                <a href={socialLinks.fb} class="social-icon">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              {/* <!-- end of single item -->
              <!-- single item --> */}
              <li>
                <a href={socialLinks.in} class="social-icon">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              {/* <!-- end of single item -->
              <!-- single item --> */}
              <li>
                <a href={socialLinks.gh} class="social-icon">
                  <i class="fab fa-squarespace"></i>
                </a>
              </li>
              {/* <!-- end of single item -->
              <!-- single item --> */}
              <li>
                <a href={socialLinks.be} class="social-icon">
                  <i class="fab fa-behance"></i>
                </a>
              </li>
              {/* <!-- end of single item -->
              <!-- single item --> */}
              <li>
                <a href={socialLinks.ins} class="social-icon">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              {/* <!-- end of single item --> */}
            </ul>
    )
}

export default SocialIcons
