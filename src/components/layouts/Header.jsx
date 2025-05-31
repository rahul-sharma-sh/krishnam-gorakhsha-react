import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div>
        <div className="modal fade" id="loginpopup" tabIndex="-1" aria-labelledby="loginpopup" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content mymd overflow-visible rounded-md-4 bg-primary-5">
              <div className="modal-header text-center border-0 pb-0">
                <h5 className="mb-0 mt-1 text-center mx-auto">
                  <span className="w-100 d-block fs-4 fw-semibold">Are you already registered?</span>
                  <span className="text-grey mt-2 d-block fw-normal fs-6">Sign in to fetch details</span>
                </h5>
                <button type="button" className="btn-close btn-close2 btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body px-md-4">
                <form id="donation-form" className="mt-2" autoComplete="on">
                  <div className="row gy-4">
                    <div className="col-md-12">
                      <span id="invalid_user" style={{color: 'red'}}></span>
                      <div className="form-floating">
                        <input type="text" id="loginmobileno" name="mobileno" placeholder="Enter Mobile Number here" className="form-control myinput" />
                        <label className="text">Mobile Number/Email ID *</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="password" id="password" name="password" placeholder="Enter Password here" className="form-control myinput" />
                        <label className="text">Password *</label>
                      </div>
                    </div>
                    <div className="col-lg-12 text-end my-2">
                      <a href="https://gwala.krishnayangauraksha.org/Donor/Forgotpassword" target="_blank" rel="noreferrer">Forgot password?</a>
                    </div>
                    <div className="col-md-12">
                      <div className="text-center">
                        <input className="btn btn-primary text-white w-100 rounded-pill py-2" type="button" value="Submit" id="simple_login" onClick={() => loginfunction()} />
                      </div>
                    </div>
                  </div>
                </form>

                <div className="mt-4 text-center w-100 opacity-50 position-relative">
                  <span className="centerline fs-14">Or</span>
                </div>

                <button onClick={() => login_page_sesssion()} className="btn btn-outline-secondary w-100 rounded-pill py-2 mt-4 mb-3">
                  <span>You Can Login With </span>
                  <img src="assets/images/google.svg" className="me-1" width="24" height="24" alt="Google" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="listpopup" tabIndex="-1" aria-labelledby="listpopup" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" style={{maxWidth: '500px'}}>
            <div className="modal-content mymd">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12" id="usersList"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="menucanvas">
          <div className="offcanvas-header bg-primary py-2">
            <a href="index.html" className="offcanvas-title text-white">
              <img src="new-assets/images/logo1.html" className="me-2" width="50" alt="" />
              Shree Krishnayan Gaushala
            </a>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
      <div className="menu-list">
        <ul id="menu-content" className="menu-content accordion">
        
          <li>
            <a href="/">
              <i className="fa-regular fa-house"></i> Dashboard
            </a>
          </li>

        
          <li>
            <a href="">
              <i className="fa-regular fa-user"></i> My Profile
            </a>
          </li>

          
          <li>
            <a
              className="collapsed accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#abc36"
              aria-expanded="false"
            >
              <i className="fa-regular fa-hand-holding-dollar"></i> My Donation
            </a>
            <ul className="accordion-collapse collapse" data-bs-parent="#menu-content" id="abc36">
              <li>
                <a href="https://gwala.krishnayangauraksha.org/Donor/MyPayment">
                  My Payments
                </a>
              </li>
              <li>
                <a href="https://gwala.krishnayangauraksha.org/Donor/MyECSRequest">
                  My Monthly Donation
                </a>
              </li>
              <li>
                <a href="https://gwala.krishnayangauraksha.org/Donor/ConsolidateReport">
                  Consolidated Receipts
                </a>
              </li>
            </ul>
          </li>

          
          <li>
            <a
              className="collapsed accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#abc9"
              aria-expanded="false"
            >
              <i className="fa-regular fa-hands-holding-dollar"></i> Donation - Book Your Sewa
            </a>
            <ul className="accordion-collapse collapse" data-bs-parent="#menu-content" id="abc9">
              <li><a href="/godaan">Service To Mother Cow</a></li>
              <li><a href="/adopt-cow">Adopt a Cow</a></li>
              <li><a href="/gaugrass">Feed Mother Cow</a></li>
              <li><a href="/medical-help">Medical Emergency</a></li>
              <li><a href="/food-distribution">Food For Under Privileged</a></li>
              <li><a href="/shradh">Shradh For Departed Souls</a></li>
              <li><a href="/vedic-cel">Celebrate Your Birthday/ Anniversary/ Event</a></li>
              <li><a href="/event">Yagya/ Pooja/ Food Distribution</a></li>
            </ul>
          </li>

          
          <li>
            <a
              className="collapsed accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#abc45"
              aria-expanded="false"
            >
              <i className="icon-cow"></i> Adopt A Gauvansh
            </a>
            <ul className="accordion-collapse collapse" data-bs-parent="#menu-content" id="abc45">
              <li><a href="https://gwala.krishnayangauraksha.org/Donor/GauvanshAdoption">Adopt A Gauvansh</a></li>
              <li><a href="https://gwala.krishnayangauraksha.org/Donor/GauvanshAdoptionReport">My Adopted Cow</a></li>
              <li><a href="https://gwala.krishnayangauraksha.org/Donor/ExtraActivity">Extra Activity</a></li>
            </ul>
          </li>

          
          <li><a href="https://gwala.krishnayangauraksha.org/Donor/FamilyCelebrations"><i className="fa-regular fa-calendar-star"></i> Celebrate Event</a></li>
          <li><a href="/csr"><i className="fa-regular fa-handshake-angle"></i> CSR</a></li>
          <li><a href="https://gwala.krishnayangauraksha.org/Donor/MyReferences_"><i className="fa-regular fa-users"></i> My References</a></li>
          <li><a href="https://gwala.krishnayangauraksha.org/Donor/Feedback"><i className="fa-regular fa-message-exclamation"></i> Raise Concern</a></li>

        
          <li>
            <a
              className="collapsed accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#abc54"
              aria-expanded="false"
            >
              <i className="fa-regular fa-newspaper"></i> Communication
            </a>
            <ul className="accordion-collapse collapse" data-bs-parent="#menu-content" id="abc54">
              <li><a href="/news-letter">Newsletter</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/news-update">Latest News & Updates</a></li>
            </ul>
          </li>

          
          <li>
            <a
              className="collapsed accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#abc55"
              aria-expanded="false"
            >
              <i className="fa-regular fa-chart-network"></i> Our Activities
            </a>
            <ul className="accordion-collapse collapse" data-bs-parent="#menu-content" id="abc55">
              <li><a href="/our-activities">Our Activities</a></li>
              <li><a href="/download-us">Downloads</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/benefits-of-cow">Benefits of Cow</a></li>
              <li><a href="/about-us">About Us</a></li>
            </ul>
          </li>

          
          <li><a href="/contact-us"><i className="fa-regular fa-comment-exclamation"></i> Contact Us</a></li>
          <li><a href="/faq"><i className="fa-regular fa-circle-question"></i> FAQ's</a></li>
        </ul>
      </div>
    </div>
        </div>

        <div className="header-1">
          <div role="button" className="menu-btn btn btn-warning rounded-pill px-3 brd" data-bs-toggle="offcanvas" data-bs-target="#menucanvas">
            <span className="d-none d-lg-flex align-items-center gap-1">
              <i className="fa-solid fa-bars-sort me-2"></i> Menu
            </span>
            <span className="d-lg-none">
              <img src="new-assets/images/user-menu2.svg" width="50" className="me-1 m-logo" alt="" />
            </span>
          </div>

          <a href="https://gwala.krishnayangauraksha.org/Donor/Panchang" className="text-nowrap short-panchang rounded-0 d-none d-lg-flex">
            <div className="monthdate">
              <h6>Phalguna, <br />Shukla Dwitiya</h6>
            </div>
            <div className="festival-name">
              Phulera Dooj,Ramakrishna Jayanti,Chandra Darshan
            </div>
          </a>

          <img src="new-assets/images/logo-orange.png" className="img-fluid px-2 kri-logo mx-auto d-lg-none" width="164" height="44" alt="Krishnayan Brand Logo" />

          <ul className="d-flex align-items-center gap-lg-2 wmm-100">
            <li className="d-none d-lg-flex align-items-center gap-2 ms-lg-auto">
              <i className="fa-solid fa-headset fa-2x text-white opacity-75"></i>
              <div>
                <a href="mailto:care@krishnayangauraksha.org" className="text-white small d-block">care@krishnayangauraksha.org</a>
                <a href="tel:+918755955000" className="text-white small d-block">+91 8755955000</a>
              </div>
            </li>

            <li className="search-header-btn flex-grow-1 d-none" role="button" onClick={() => window.location.href='https://gwala.krishnayangauraksha.org/'}>
              <span className="d-none d-lg-inline">Search</span>
              <i className="fa-regular fa-magnifying-glass ms-lg-auto"></i>
            </li>

            <li>
              <a href="donation-form.html" className="btn px-3 btn-warning rounded-pill d-none d-md-block">Donate Now</a>
            </li>

            <li>
              <a data-bs-toggle="modal" data-bs-target="#loginpopup" className="btn text-m-15 px-3 btn-warning rounded-pill">
                <i className="fa-solid fa-user-lock me-lg-1"></i>
                <span className="d-lg-inline d-none">Login</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <header className="w-100">
          <div className="container-fluid">
            <div className="row gy-3">
              <div className="col-lg-12 d-none d-lg-block">
                <div className="header-2">
                  <div className="header-panel">
                    <a href="index.html">
                      <img src="new-assets/images/logo1.html" height="108" width="108" alt="Krishnayan Logo" />
                    </a>
                  </div>
                  <div className="header-panel text-center">
                    <img src="new-assets/images/logo2.html" height="108" width="108" alt="Krishnayan Brand Logo" className="mx-auto" />
                  </div>
                  <div className="header-panel">
                    <div className="d-flex align-items-center justify-content-end gap-4 me-md-3">
                      <div data-bs-target="#online-gaushala-visit" data-bs-toggle="modal" className="text-white burst-12">
                        <span>Online Gaushala Visit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header> */}
      </div>
    </>
  )
}

export default Header
