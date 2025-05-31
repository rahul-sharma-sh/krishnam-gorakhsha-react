import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const GalleryPage = () => {
  return (
    <div>
      <Header />
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
      <div class="container-fluid">
        <div class="row"><div class="loading" id="loader" style={{ display: "none" }}>Loading&#8230;</div>




          <div class="col-lg-12 p-0 mt-lg-1  position-relative">

            <div class="m-header-1 d-lg-none">
              <button class="btn btn-warning" onclick="goBack();"><i class="fa-regular fa-arrow-left"></i></button>
            </div>

            <div class="all-pages-header">

              <div class="container-fluid">
                <div class="row align-items-center">


                  <div class="col-lg-12 text-center px-0">

                    <div class="swiper pagesslider ">
                      <div class="swiper-wrapper">



                        <div class='swiper-slide'><img src='administrator/assets/uploads/custom_page/aboutus.jpg' /></div>            </div>


                    </div>



                    <div class="cont">
                      <h1 class="fw-bold">Gallery</h1>
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li class="breadcrumb-item active">Gallery</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul class="compact-gallery">


            <li >
              <a href="photogallery/7.html" class="category_link">

                <img alt="Krishnayan Gauraksha Activities" src="administrator/assets/uploads/gallery/activity_1.jpg" />
                <div class="title text-center">activity</div>
              </a>
            </li>


            <li >
              <a href="photogallery/3.html" class="category_link">

                <img alt="Our CNG Plant" src="administrator/assets/uploads/gallery/cng-plant_2.jpg" />
                <div class="title text-center">CNG Plant</div>
              </a>
            </li>


            <li >
              <a href="photogallery/10.html" class="category_link">

                <img alt="Events in Gaushala" src="administrator/assets/uploads/gallery/Untitled_design_(1)2.jpg" />
                <div class="title text-center">Events</div>
              </a>
            </li>


            <li >
              <a href="photogallery/2.html" class="category_link">

                <img alt="Our Biggest Gaushala In India" src="administrator/assets/uploads/gallery/gaushala_3.jpg" />
                <div class="title text-center">Gaushala</div>
              </a>
            </li>


            <li >
              <a href="photogallery/8.html" class="category_link">

                <img alt="Yagya And Pooja In Krishnayan Gauraksha" src="administrator/assets/uploads/gallery/pooja_4.jpg" />
                <div class="title text-center">Yagya & Pooja</div>
              </a>
            </li>




          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage
