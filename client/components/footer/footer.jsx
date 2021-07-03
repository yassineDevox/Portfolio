import React from 'react'

export const Footer = () => {
    return (
        // <!-- end of blog --> 
        <footer class="footer">
            <ul class="social-icons">
                {/* <!-- single item --> */}
                <li>
                    <a href="https://www.twitter.com" class="social-icon">
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
                {/* <!-- end of single item -->
                  <!-- single item --> */}
                <li>
                    <a href="https://www.twitter.com" class="social-icon">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                {/* <!-- end of single item -->
<!-- single item --> */}
                <li>
                    <a href="https://www.twitter.com" class="social-icon">
                        <i class="fab fa-squarespace"></i>
                    </a>
                </li>
                {/* <!-- end of single item -->
<!-- single item --> */}
                <li>
                    <a href="https://www.twitter.com" class="social-icon">
                        <i class="fab fa-behance"></i>
                    </a>
                </li>
                {/* <!-- end of single item -->
<!-- single item --> */}
                <li>
                    <a href="https://www.twitter.com" class="social-icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                {/* <!-- end of single item --> */}
            </ul>

            <p>&copy; <span id="date"></span> John Doe. All rights reserved.</p>
        </footer>
    )
}
