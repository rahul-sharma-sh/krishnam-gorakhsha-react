import React from 'react'

const Footer = () => {
  // Add isNumberKey function to handle numeric input validation
  const isNumberKey = (evt) => {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
      return false;
    }
    return true;
  };

  // Add form validation function
  const checkValidate_live = (e) => {
    e.preventDefault();
    // Add your form validation logic here
  };

  return (
    <>
      <footer className="py-lg-5">
        <div className="container">
          <div className="row gy-4 gx-md-5">
            <div className="col-lg-4 order-1 order-md-1">
              <ul className="address">
                <li className="text-white">
                  <img 
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/map.svg" 
                    width="15"
                    height="20" 
                    alt="Location Icon"
                  /> Registerd Office: Haripur Kalan,
                  Near Prem Vihar Chowk, Haridwar
                </li>
                <li>
                  <a href="mailto:care@krishnayangauraksha.com">
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://docs.krishnayangauraksha.org/donation_page/images/mail.svg" 
                      width="15"
                      height="15" 
                      alt="Email Icon"
                    /> care@krishnayangauraksha.org
                  </a>
                </li>
                <li>
                  <a href="tel:91 8755955000">
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://docs.krishnayangauraksha.org/donation_page/images/phone.svg"
                      width="15" 
                      height="15" 
                      alt="Mobile Icon"
                    /> +91 8755955000
                  </a>
                </li>
              </ul>

              <div className="d-flex d-md-block gap-4 justify-content-between align-items-center">
                <div className="mt-3">
                  <h4 className="text-white">Follow us on</h4>
                  <ul className="social-icons">
                    <li>
                      <a href="https://www.facebook.com/krishnayangauraksha/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/krishnayangauraksha/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ShreeDesi" target="_blank" rel="noreferrer">
                        <img
                          src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/x-twitter.svg"
                          alt="Twitter Icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=YzPUdqw4YP4" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div 
                  data-bs-target="#online-gaushala-visit" 
                  data-bs-toggle="modal"
                  className="text-white burst-12 mt-4 me-4 d-md-none"
                >
                  <span>Online Gaushala Visit</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-3 order-md-2">
              <ul className="footermenu">
                <li><a href="privacy-policy.html" className="text-white">Privacy policy</a></li>
                <li><a href="disclaimer.html" className="text-white">Disclaimer</a></li>
                <li><a href="refund-policy.html" className="text-white">Refund Policy</a></li>
                <li><a href="terms.html" className="text-white">Terms & Conditions</a></li>
                <li><a href="enduser.html" className="text-white">End User Agreement</a></li>
                <li><a href="feedback.html" className="text-white">Feedback & Complaint</a></li>
                <li><a href="faq.html" className="text-white">FAQ's</a></li>
                <li><a href="news.html" className="text-white">Latest News & Updates</a></li>
              </ul>
            </div>

            <div className="col-lg-4 order-2 order-md-3">
              <h4 className="text-white">Subscribe to Our Newsletter</h4>
              <form 
                action="https://www.krishnayangauraksha.org/" 
                className="subscribe-form" 
                id="newsletter" 
                method="post"
                encType="multipart/form-data"
              >
                <input type="hidden" name="csrf_test_name" value="96917cf30c3d5beadb703c907b579053" />
                <p id="subscribe-message"></p>
                <div className="input-group">
                  <input 
                    type="email"
                    name="user_email"
                    className="footerinput form-control"
                    id="user_email"
                    placeholder="*Email"
                    autoComplete="off"
                  />
                  <button 
                    onClick={() => subscribeUser()} 
                    type="button"
                    className="btn text-white btn-primary"
                    id="footer-subscribe-btn"
                  >
                    Join Us
                  </button>
                </div>
              </form>

              <ul className="d-flex mt-3 gap-3 justify-content-center justify-content-md-start">
                <li className="w-100">
                  <a href="https://bit.ly/2KR8VoE" target="_blank" rel="noreferrer">
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://www.krishnayangauraksha.org/new-assets/images/googleplay.svg"
                      width="129"
                      alt="Google Playstore"
                      className="w-100"
                    />
                  </a>
                </li>
                <li className="w-100">
                  <a href="https://apps.apple.com/in/app/krishnayan/id1544026432" target="_blank" rel="noreferrer">
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="new-assets/images/appstore.svg"
                      width="129"
                      alt="iOS Playstore"
                      className="w-100"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <ul className="newsharepanel">
        <li data-bs-toggle="modal" data-bs-target="#socialmodal">
          <div data-bs-toggle="tooltip" data-bs-title="Share us">
            <i className="fa-sharp fa-regular fa-share-nodes fs-12"></i>
          </div>
        </li>
        <li 
          data-bs-toggle="tooltip" 
          data-bs-placement="bottom"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Join Our Whatsapp Channel"
        >
          <a href="https://whatsapp.com/channel/0029VaMv8OV1HspqdZFOAp05" target="_blank" rel="noreferrer">
            <img
              src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              data-src="https://www.krishnayangauraksha.org/new-assets/images/whatsapp-channel.svg"
              width="30"
              alt=""
            />
          </a>
        </li>
      </ul>

      <div className="whatsapp_bg">
        <a 
          href="https://api.whatsapp.com/send?phone=918755955000&text=https://www.krishnayangauraksha.org/%0A%20I%27m%20interested%20to%20know%20more%20about%20this.%20Can%20you%20help?"
          target="_blank"
          rel="noreferrer"
          data-bs-toggle="tooltip"
          data-bs-title="Chat With Us"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <div className="modal fade" id="socialmodal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close btn-close2" data-bs-dismiss="modal"></button>
              <p className="text-center">Each share of yours will bring happiness to mother cows</p>
              <ul className="modalshareicons">
                <li>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.krishnayangauraksha.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img 
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://docs.krishnayangauraksha.org/donation_page/images/facebook.svg"
                      alt="Facebook Icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/share?ref_src=https://www.krishnayangauraksha.org/" 
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://docs.krishnayangauraksha.org/donation_page/images/twitter.svg"
                      alt="Twitter Icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/krishnayangauraksha/" 
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://docs.krishnayangauraksha.org/donation_page/images/instagram.svg"
                      alt="Instagram Icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=&text=https://www.krishnayangauraksha.org/%0A%20I%27m%20interested%20to%20know%20more%20about%20this.%20Can%20you%20help?"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img 
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://docs.krishnayangauraksha.org/donation_page/images/whatsapp.svg"
                      alt="Whatsapp Icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="adoptcanvas">
        <div className="offcanvas-header bg-primary">
          <a href="/" className="offcanvas-title text-white">
            <img
              src="/new-assets/images/logo1.webp" 
              className="me-2"
              width="50"
              alt="Logo"
            />
            Shree Krishnayan Gaushala
          </a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="menu-list">
            <ul id="menu-content" className="menu-content">
              <li>
                <a href="https://gwala.krishnayangauraksha.org/Donor/GauvanshAdoption">
                  <i className="fa-solid fa-circle"></i>Adopt A Gauvansh
                </a>
              </li>
              <li>
                <a href="https://gwala.krishnayangauraksha.org/Donor/GauvanshAdoptionReport">
                  <i className="fa-solid fa-circle"></i>My Adopted Cow
                </a>
              </li>
              <li>
                <a href="https://gwala.krishnayangauraksha.org/Donor/ExtraActivity">
                  <i className="fa-solid fa-circle"></i>Extra Activity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="doantecanvas">
        <div className="offcanvas-header bg-primary">
          <a href="/" className="offcanvas-title text-white">
            <img
              src="/new-assets/images/logo1.webp"
              className="me-2"
              width="50"
              alt="Logo"
            />
            Shree Krishnayan Gaushala
          </a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="menu-list">
            <ul id="menu-content" className="menu-content">
              <li>
                <a href="https://krishnayangauraksha.org/donation-form">
                  <i className="fa-regular fa-hand-holding-dollar"></i>
                  One Time
                  <span className="fa-regular ms-auto fa-chevron-right"></span>
                </a>
              </li>
              <li>
                <a href="https://krishnayangauraksha.org/donation-form#monthly">
                  <i className="fa-regular fa-hands-holding-dollar"></i>
                  Monthly
                  <span className="fa-regular ms-auto fa-chevron-right"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mobile-nav d-md-none">
        <ul>
          <li>
            <a className="showdonatemobilemenu" data-bs-toggle="offcanvas" href="#doantecanvas">
              <i className="fa-regular fa-circle-dollar-to-slot"></i>
              <span>Donate</span>
            </a>
          </li>
          <li>
            <a href="#adoptcanvas" data-bs-toggle="offcanvas">
              <i className="icon-cow"></i>
              <span>Adopt Cow</span>
            </a>
          </li>
          <li>
            <a href="https://gwala.krishnayangauraksha.org/Donor/FamilyCelebrations">
              <i className="fa-regular fa-calendar-star"></i>
              <span>My Events</span>
            </a>
          </li>
          <li>
            <a href="#menucanvas" data-bs-toggle="offcanvas">
              <i className="fa-regular fa-bars-sort"></i>
              <span>Menu</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mobilefootericons d-none">
        <ul>
          <li data-bs-toggle="modal" data-bs-target="#socialmodal">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
              <path
                d="M26.6667 23.8889C27.5694 23.8889 28.3333 24.1744 28.9583 24.7454C29.5833 25.3164 29.8958 25.9954 29.8958 26.7824C29.8958 27.5694 29.5833 28.2485 28.9583 28.8194C28.3333 29.3904 27.5694 29.6759 26.6667 29.6759C25.7639 29.6759 25 29.3904 24.375 28.8194C23.75 28.2485 23.4375 27.5617 23.4375 26.7593C23.4375 26.5741 23.4549 26.358 23.4896 26.1111L15.625 22.037C14.9653 22.5617 14.2014 22.8241 13.3333 22.8241C12.3958 22.8241 11.6059 22.5386 10.9635 21.9676C10.3212 21.3966 10 20.6944 10 19.8611C10 19.0278 10.3212 18.3256 10.9635 17.7546C11.6059 17.1836 12.3958 16.8981 13.3333 16.8981C14.2014 16.8981 14.9653 17.1605 15.625 17.6852L23.4375 13.6574C23.3681 13.3796 23.3333 13.1481 23.3333 12.963C23.3333 12.1296 23.6545 11.4275 24.2969 10.8565C24.9392 10.2855 25.7292 10 26.6667 10C27.6042 10 28.3941 10.2855 29.0365 10.8565C29.6788 11.4275 30 12.1219 30 12.9398C30 13.7577 29.6788 14.4599 29.0365 15.0463C28.3941 15.6327 27.6042 15.9259 26.6667 15.9259C25.7986 15.9259 25.0347 15.6481 24.375 15.0926L16.5625 19.1667C16.6319 19.4444 16.6667 19.6759 16.6667 19.8611C16.6667 20.0463 16.6319 20.2778 16.5625 20.5556L24.4792 24.6296C25.1042 24.1358 25.8333 23.8889 26.6667 23.8889Z"
                fill="white"
              />
            </svg>
          </li>
          <li>
            <a href="tel:8755955000">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                <path
                  d="M29.7221 26.6307L26.9023 29.4279C26.4861 29.8547 25.9344 29.9993 25.3971 30C23.0209 29.9288 20.7748 28.7616 18.9307 27.5631C15.9037 25.3609 13.1262 22.6303 11.3831 19.3305C10.7145 17.9468 9.93004 16.1813 10.005 14.6368C10.0117 14.0558 10.1682 13.4856 10.5774 13.1111L13.3972 10.2927C13.9827 9.7947 14.549 9.9669 14.9237 10.547L17.1922 14.8487C17.431 15.3583 17.294 15.9044 16.9378 16.2685L15.8989 17.3069C15.8348 17.3947 15.7939 17.4947 15.7929 17.6035C16.1913 19.1456 17.3981 20.5669 18.4642 21.545C19.5304 22.5231 20.6763 23.8483 22.1639 24.162C22.3477 24.2133 22.5729 24.2313 22.7045 24.109L23.913 22.88C24.3296 22.5642 24.9311 22.4099 25.3758 22.6681H25.397L29.4889 25.0838C30.0896 25.4603 30.1522 26.188 29.7221 26.6307Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="/donation-form" className="btn btn-grad-yellow">
              Donate Now
            </a>
          </li>
          <li>
            <a href="mailto:care@krishnayangauraksha.org">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                <path
                  d="M27.5 12H12.5C11.8372 12.0007 11.2017 12.2643 10.733 12.733C10.2643 13.2017 10.0007 13.8372 10 14.5V25.2143C10.0007 25.8771 10.2643 26.5126 10.733 26.9813C11.2017 27.45 11.8372 27.7136 12.5 27.7143H27.5C28.1628 27.7136 28.7983 27.45 29.267 26.9813C29.7357 26.5126 29.9993 25.8771 30 25.2143V14.5C29.9993 13.8372 29.7357 13.2017 29.267 12.733C28.7983 12.2643 28.1628 12.0007 27.5 12ZM26.867 16.1353L20.4384 21.1353C20.313 21.2327 20.1588 21.2856 20 21.2856C19.8412 21.2856 19.687 21.2327 19.5616 21.1353L13.133 16.1353C13.0575 16.0782 12.9941 16.0067 12.9464 15.925C12.8987 15.8432 12.8678 15.7528 12.8554 15.659C12.843 15.5651 12.8493 15.4698 12.8741 15.3784C12.8988 15.2871 12.9415 15.2015 12.9996 15.1268C13.0577 15.0521 13.1301 14.9897 13.2125 14.9432C13.2949 14.8967 13.3858 14.867 13.4798 14.8559C13.5738 14.8448 13.669 14.8525 13.76 14.8785C13.851 14.9046 13.9359 14.9484 14.0098 15.0076L20 19.6665L25.9902 15.0076C26.14 14.8945 26.3283 14.8449 26.5143 14.8695C26.7004 14.8941 26.8693 14.991 26.9845 15.1392C27.0997 15.2873 27.152 15.4749 27.13 15.6613C27.108 15.8477 27.0135 16.018 26.867 16.1353Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=918755955000&text=https://www.krishnayangauraksha.org/%0A%20I%27m%20interested%20to%20know%20more%20about%20this.%20Can%20you%20help?">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                <path
                  d="M20.75 30.5C18.8125 30.5 16.9922 30.0312 15.2891 29.0938L8 32L10.9062 24.7109C9.96875 23.0078 9.5 21.1875 9.5 19.25C9.5 17.7188 9.79688 16.2617 10.3906 14.8789C10.9844 13.4961 11.7852 12.3008 12.793 11.293C13.8008 10.2852 14.9961 9.48438 16.3789 8.89062C17.7617 8.29688 19.2188 8 20.75 8C22.2812 8 23.7383 8.29688 25.1211 8.89062C26.5039 9.48438 27.6992 10.2852 28.707 11.293C29.7148 12.3008 30.5156 13.4961 31.1094 14.8789C31.7031 16.2617 32 17.7188 32 19.25C32 20.7812 31.7031 22.2383 31.1094 23.6211C30.5156 25.0039 29.7148 26.1992 28.707 27.207C27.6992 28.2148 26.5039 29.0156 25.1211 29.6094C23.7383 30.2031 22.2812 30.5 20.75 30.5ZM24.5 21.5H23L22.1562 22.25C21.4531 22.0625 20.5898 21.457 19.5664 20.4336C18.543 19.4102 17.9375 18.5469 17.75 17.8438L18.5 17V15.5C18.5 15.2344 18.4062 14.9688 18.2188 14.7031C18.0312 14.4375 17.8242 14.2461 17.5977 14.1289C17.3711 14.0117 17.2109 14 17.1172 14.0938L16.0156 15.1953C15.4062 15.8047 15.3164 16.7539 15.7461 18.043C16.1758 19.332 16.9961 20.582 18.207 21.793C19.418 23.0039 20.668 23.8242 21.957 24.2539C23.2461 24.6836 24.1953 24.5938 24.8047 23.9844L25.9062 22.8828C26 22.7891 25.9883 22.6289 25.8711 22.4023C25.7539 22.1758 25.5625 21.9688 25.2969 21.7812C25.0312 21.5938 24.7656 21.5 24.5 21.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div id="online-gaushala-visit" className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content body-bg">
            <form id="live_request_form" onSubmit={checkValidate_live}>
              <input type="hidden" name="csrf_test_name" value="96917cf30c3d5beadb703c907b579053" />
              <div className="modal-header">
                <h5 className="modal-title text-center w-100">Register for Online Gaushala Visit</h5>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div id="live_status"></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating">
                      <input type="hidden" name="data_from" value="Online Live Gaushala Visit" />
                      <input 
                        type="text"
                        className="form-control"
                        id="live_fname"
                        name="live_fname"
                        placeholder="Full Name"
                      />
                      <label htmlFor="live_fname">Full Name*</label>
                      <small className="text-danger2 error-fullname"></small>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="live_email"
                        name="live_email"
                        placeholder="Email Address*"
                      />
                      <label htmlFor="live_email">Email Address*</label>
                      <small className="text-danger2 error-email"></small>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control py-3"
                      placeholder="Mobile Number*"
                      onKeyPress={isNumberKey}
                    />
                    <small className="text-danger2 error-phone"></small>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control"
                        id="visit_date"
                        name="visit_date"
                        placeholder="Visit Date*"
                      />
                      <label htmlFor="visit_date">Visit Date*</label>
                      <small className="text-danger2 error-visitdate"></small>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating">
                      <select className="form-control" id="visit_time" name="visit_time">
                        <option value="">Select Time</option>
                        <option value="7am - 8am">7am - 8am</option>
                        <option value="8am - 9am">8am - 9am</option>
                        <option value="2pm - 3pm">2pm - 3pm</option>
                        <option value="3pm - 4pm">3pm - 4pm</option>
                        <option value="4pm - 5pm">4pm - 5pm</option>
                      </select>
                      <label htmlFor="visit_time">Visit Time*</label>
                      <small className="text-danger2 error-visittime"></small>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="live_message"
                        name="live_message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="live_message">Message</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group message-btn"></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <input type="hidden" id="livetoken" name="livetoken" />
                <button type="submit" name="livesubmit" id="livesubmit" className="btn btn-primary text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
