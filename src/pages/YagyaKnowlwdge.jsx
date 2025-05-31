import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const YagyaKnowlwdge = () => {
  return (
    <div>
      <Header/>
      <header class="w-100">
        <div class="container-fluid">
          <div class="row gy-3">
            <div class="col-lg-12 d-none d-lg-block">
              <div class="header-2">

                <div class="header-panel">
                  <a href="index.html">
                    <img src="new-assets/images/logo1.html"
                      height="108" width="108" alt="Krishnayan Logo" />
                  </a>
                </div>
                <div class="header-panel text-center">
                  <img src="new-assets/images/logo2.html" height="108"
                    alt="Krishnayan Brand Logo" weight="108" class="mx-auto" />
                </div>
                <div class="header-panel">
                  <div class="d-flex align-items-center justify-content-end gap-4 me-md-3">
                    <div data-bs-target="#online-gaushala-visit" data-bs-toggle="modal"
                      class="text-white  burst-12 "> <span>Online Gaushala Visit</span></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Footer/>
    </div>
  )
}

export default YagyaKnowlwdge
