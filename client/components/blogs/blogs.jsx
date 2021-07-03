import React from 'react'

const Blogs = () => {
    return (
        <section class="section blog">
        <div class="section-title">
          <h2>blog</h2>
          <div class="underline"></div>
        </div>
        {/* <!-- blog center --> */}
        <div class="section-center blog-center">
          {/* <!-- single article --> */}
          <article>
            <div class="card">
              {/* <!-- card front --> */}
              <div class="card-side card-front">
                <img src="./images/project-1.jpeg" alt="" />
                <div class="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    sunt odit repellat provident, aperiam corporis! Excepturi
                    eveniet saepe praesentium deleniti.
                  </p>
                  <div class="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image" />
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* <!-- card back --> */}
              <div class="card-side card-back">
                <button class="btn">read more</button>
              </div>
            </div>
          </article>
          {/* <!-- end of single article --> */}
          {/* <!-- single article --> */}
          <article>
            <div class="card">
              {/* <!-- card front --> */}
              <div class="card-side card-front">
                <img src="./images/project-2.jpeg" alt="" />
                <div class="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    sunt odit repellat provident, aperiam corporis! Excepturi
                    eveniet saepe praesentium deleniti.
                  </p>
                  <div class="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image" />
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* <!-- card back --> */}
              <div class="card-side card-back">
                <button class="btn">read more</button>
              </div>
            </div>
          </article>
          {/* <!-- end of single article --> */}
          {/* <!-- single article --> */}
          <article>
            <div class="card">
              {/* <!-- card front --> */}
              <div class="card-side card-front">
                <img src="./images/project-3.jpeg" alt="" />
                <div class="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    sunt odit repellat provident, aperiam corporis! Excepturi
                    eveniet saepe praesentium deleniti.
                  </p>
                  <div class="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image" />
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* <!-- card back --> */}
              <div class="card-side card-back">
                <button class="btn">read more</button>
              </div>
            </div>
          </article>
          {/* <!-- end of single article --> */}
          {/* <!-- single article --> */}
          <article>
            <div class="card">
              {/* <!-- card front --> */}
              <div class="card-side card-front">
                <img src="./images/project-4.jpeg" alt="" />
                <div class="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    sunt odit repellat provident, aperiam corporis! Excepturi
                    eveniet saepe praesentium deleniti.
                  </p>
                  <div class="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image" />
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* <!-- card back --> */}
              <div class="card-side card-back">
                <button class="btn">read more</button>
              </div>
            </div>
          </article>
          {/* <!-- end of single article --> */}
        </div>
      </section>
    )
}

export default Blogs
