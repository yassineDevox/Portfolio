import React from 'react'

const BlogUI = ({data}) => {
    return (
        <article>
            <div class="card">
              {/* <!-- card front --> */}
              <div class="card-side card-front">
                <img src={data.thumbnail} alt="" />
                <div class="card-info">
                  <h4>{data.title}</h4>
                  <p>
                    {data.description}
                  </p>
                  <div class="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image" />
                    <p>{data.readDuration} min read</p>
                  </div>
                </div>
              </div>
              {/* <!-- card back --> */}
              <div class="card-side card-back">
                <button class="btn">read more</button>
              </div>
            </div>
          </article>
    )
}

export default BlogUI
