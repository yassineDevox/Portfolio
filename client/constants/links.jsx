import React from 'react'

const Links = (props) => {
    return (
        <ul class={props.className}>
            <li><a href="index.html">home</a></li>
            <li><a href="about.html">about</a></li>
            <li><a href="projects.html">projects</a></li>
            <li><a href="contact.html">contact</a></li>
        </ul>
    )
}

export default Links
