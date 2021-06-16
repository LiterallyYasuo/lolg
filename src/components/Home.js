import React from 'react'
import generateLink from './Generate.js'
const ImageLink = generateLink()

function Home () {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={ImageLink}
              alt=""
            />
          </div>
          <div className="col-lg-5">
          <h1 className="font-weight-light">League of Legends General</h1>
            <p>
              I made this website for lolg cause I need a new hobby and I can't play League right now cause my hand fucking hurts. Anyway
              if you have ideas on what kinda stuff I could put here <a href="https://forms.gle/SpyckA26XAPgtE1v7">fill out this</a> or just post in the thread I guess maybe I'll see it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
