import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

const ContactUsPage = () => {

  const checkValidate = (e) => {
    // Validation logic here (if any)
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="page-title2 d-flex align-items-center py-5"
              style={{ backgroundImage: 'url(new-assets/images/contactbg.html)', backgroundPosition: 'center' }}>
              <div className="container">
                <div className="row align-items-center text-center">
                  <div className="col-md-12">
                    <h1 className="fw-bold display-6">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0 justify-content-center gap-3">
                        <li className=""><a href="#">Home</a></li>
                        <li className="   active"><a href='/contact-us' >Contact Us</a></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="col-lg-12 mb-5">
            <div className="row justify-content-center gy-4">
              <div className="col-lg-10">
                <div className="row justify-content-center gy-4">
                  <div className="col-lg-12 text-center">
                    <h2 className="with-bullets font-secondary text-center mx-auto mt-4 mt-lg-5">Shree Krishnayan Desi Gauraksha</h2>
                  </div>

                  <div className="col-lg-6 info-column">
                    <div id="content_block_09">
                      <div className="content-box bg-primary p-lg-4 rounded-4 p-3">
                        <form action="https://www.krishnayangauraksha.org/contact-us.html#contact_us" className="default-form"
                          id="contact_us" onSubmit={checkValidate} encType="multipart/form-data" method="post" acceptCharset="utf-8">
                          <input type="hidden" name="csrf_test_name" value="96917cf30c3d5beadb703c907b579053" />

                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="input-group">
                                <span className="input-group-text"><i className="far fa-user"></i></span>
                                <div className="form-floating">
                                  <input type="text" name="data[first_name]" id="first_name" placeholder="First Name*" required className="form-control" />
                                  <label htmlFor="first_name">First Name</label>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="input-group">
                                <span className="input-group-text"><i className="far fa-user"></i></span>
                                <div className="form-floating">
                                  <input type="text" name="data[last_name]" id="last_name" placeholder="Last Name*" required className="form-control" />
                                  <label htmlFor="last_name">Last Name</label>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="input-group">
                                <span className="input-group-text"><i className="far fa-envelope"></i></span>
                                <div className="form-floating">
                                  <input type="email" name="data[email]" id="email" required placeholder="Email Address*" className="form-control" />
                                  <label>Email Address</label>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="input-group">
                                <span className="input-group-text"><i className="fas fa-mobile-alt"></i></span>
                                <div className="form-floating">
                                  <input type="text" name="data[phone_number]" id="phone_number" required placeholder="Phone Number*" className="form-control" />
                                  <label htmlFor="phone_number">Phone Number</label>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-floating">
                                <textarea name="data[message]" id="message" placeholder="Your Message" className="form-control h-auto"></textarea>
                                <label>Message</label>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <input type="text" disabled className="text-center form-control h-100 fs-5 letter-spacing-1" readOnly value="6619" />
                            </div>

                            <div className="col-md-6">
                              <div className="form-floating">
                                <input type="text" name="captcha" id="captcha" required placeholder="Enter Captcha" className="form-control" />
                                <label>Captcha</label>
                              </div>
                              <input type="hidden" name="confirm_captcha" value="6619" />
                            </div>

                            <div className="col-lg-12 text-center">
                              <div className="form-group message-btn">
                                <input type="hidden" id="token" name="token" />
                                <button type="submit" name="submit" id="save" className="btn py-3 mt-2 w-100 btn-dark fw-bold">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="google-map-area rounded-4 overflow-hidden h-100">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=...your map iframe URL here..."
                        width="100%" height="100%" className="rounded-4 overflow-hidden" frameBorder="0"
                        style={{ border: 0, margin: 0, padding: 0 }} allowFullScreen=""></iframe>
                    </div>
                  </div>

                  <div className="col-lg-12 contacts-css mt-5">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="mb-0">Head Office</h4>
                      </div>
                      <div className="card-body">
                        <strong>Shree Krishnayan Desi Gauraksha Evam Gaulok Dham</strong><br />
                        Haripur Kalaan, <br />Near Prem Vihar chowk, <br />Haridwar, <br />
                        District-Dehradun (Uttarakhand)<br />
                        <i className="fas fa-envelope"></i> enquiry@krishnayangauraksha.org<br />
                        <i className="fas fa-mobile"></i> Contact No. <a href="tel:9760202306">+91 9760202306</a><br />
                        <i className="fas fa-mobile"></i> Contact No. <a href="tel:7060103000">+91 7060103000</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
   
  )
}

export default ContactUsPage;
