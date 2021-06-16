import React from 'react'
import generateLink from './Generate.js'
const ImageLink = generateLink()

function Links () {
  return (
    <div className="links">
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
            <h1 className="font-weight-light">Useful Links</h1>
            <h3 className="font-weight-light">Builds/Account Stats</h3>
            <p><a href="https://u.gg/">u.gg</a></p>
            <p><a href="https://www.op.gg/">op.gg</a></p>
            <p><a href="https://lolalytics.com/">LOLayltics</a></p>
            <h3 className="font-weight-light">Upcoming Changes (PBE)</h3>
            <p><a href="https://www.surrenderat20.net/search/label/PBE/">surrenderat20</a></p>
            <h3 className="font-weight-light">Latest Patch Notes</h3>
            <p><a href="https://www.surrenderat20.net/search/label/PBE/">Patch Notes</a></p>
            <h3 className="font-weight-light">Model Viewer</h3>
            <p><a href="https://teemo.gg/model-viewer">Teemo.gg</a></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Links
