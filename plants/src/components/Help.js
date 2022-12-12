import React from "react"
import { useGlobalState } from "../context/GlobalState";
import plant from './../images/plant.png';

const Help = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div className="container pt-5 mt-5 pb-5">
      <div className="row g-0 justify-content-center">
        <div className="col-md-4">
          <img src={plant} className="img-fluid rounded-start" width="300" height="300"/>
          </div>
        <div class="col-md-8">
          <div class="card-body help">
            <h3 class="card-title-help">We hope to help and grow together</h3>
            <p class="card-text-help">Our team cares about you and your plants and that is why we would love to hear from you.  If there is anything
            we can do to improve your experience then shoot us a line.  With your help we can build a community of Plant People.</p>
          </div>
        </div>
      </div>
</div>
  )
}

export default Help