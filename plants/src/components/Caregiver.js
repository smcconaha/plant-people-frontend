import React from "react"
import { useGlobalState } from "../context/GlobalState";
import smallLogo from './../images/small_logo.png';

const Caregiver = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div id="about" className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap mb-5'>
                    <img className='listing-img'src={smallLogo} alt='listing provider profile picture'/>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'>About Caregiver</h1>
                <p>
                    Bacon ipsum dolor amet leberkas pork loin hamburger turkey buffalo t-bone andouille shankle shank corned beef chuck flank spare ribs filet mignon. Pork chop cow corned beef landjaeger. Beef ribs boudin ball tip jerky sirloin landjaeger. Ball tip ribeye cow chicken pig beef ribs. Drumstick salami strip steak pork chop hamburger t-bone brisket chicken ground round burgdoggen turkey alcatra pig flank ball tip. T-bone chicken brisket, alcatra biltong tenderloin beef ribs.

                    Drumstick porchetta jowl filet mignon, bacon kevin kielbasa bresaola meatloaf. Pork chop doner ribeye meatball, kielbasa drumstick ball tip strip steak tenderloin. Pig frankfurter corned beef cupim pork short ribs, hamburger doner rump flank. Biltong hamburger capicola tail shankle buffalo flank t-bone kielbasa strip steak burgdoggen cupim meatloaf turkey. Meatball kielbasa spare ribs pig salami. Chislic porchetta tongue shankle. Ground round ball tip venison pork belly rump pancetta cupim chislic short loin doner bacon spare ribs.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Caregiver