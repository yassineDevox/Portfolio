import React from 'react'
import BlogUI from './blog'

const Blogs = (props) => {
    return (
        <section class="section blog">
            <div class="section-title">
                <h2>blog</h2>
                <div class="underline"></div>
            </div>
            {/* <!-- blog center --> */}
            <div class="section-center blog-center">
                {props.blogsData.map(b => <BlogUI data={b} key={b.id} />)}
            </div>
        </section>
    )
}

export default Blogs
