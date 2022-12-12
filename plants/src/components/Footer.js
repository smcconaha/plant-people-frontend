import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share"

function Footer () {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6"></div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link to="/" className="footer-nav">Home</Link>
                <br/>
                <Link to="help" className="footer-nav">Help</Link>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                <div className="d-flex justify-content-center" >
                  <FacebookShareButton
                    url={"#"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <FacebookIcon className="mx-3" size={36}/>
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"#"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <TwitterIcon className="mx-3" size={36}/>
                  </TwitterShareButton>
                  <RedditShareButton
                    url={"#"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <RedditIcon className="mx-3" size={36}/>
                  </RedditShareButton>
                  <LinkedinShareButton
                    url={"#"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <LinkedinIcon className="mx-3" size={36}/>
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
        <div className="row  justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Steven McConaha | All Rights Reserved
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Footer