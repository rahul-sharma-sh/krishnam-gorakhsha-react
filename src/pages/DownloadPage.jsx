import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const DownloadPage = () => {
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
      <div class="container-fluid">
        <div class="row">




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



              <div class='swiper-slide'><img src='administrator/assets/uploads/static_page/aboutus11.jpg' /></div>            </div>


          </div>



          <div class="cont">
            <h1 class="fw-bold">Downloads</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active">Downloads</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<p>
</p><p></p><div class="col-lg-12 mb-4">
  <section class="container mt-5">
    <div class="row gy-4" id="main">
      <div class="col-lg-12">
        <div class="card rounded-4 border-0 shadow-sm">
          <div class="card-header border-0 bg-pink2">
            <h3 class="mb-0 fs-5 ">Krishnayan Resources</h3>
          </div>
          <div class="card-body">
            <div class="col-lg-12 ">
              <div class="row gy-4">
                <div class="col-lg-3 news-block">
                  <div class="news-block-one">
                    <div class="inner-box">
                      <figure class="image-box mb-0"> 
						  <img alt="Krishnayan Brochure" src="../docs.krishnayangauraksha.org/static_editor_images/19324449872024_04_20.jpg" class="w-100 rounded-3"/>
						   <h2 class="fs-5 my-3">Krishnayan Brochure</h2>
                        <div class="d-flex align-items-center justify-content-between  mt-3">
                          <select class="form-select me-3" id="languageSelect">
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                            <option value="tamil">Tamil</option>
                            <option value="kannada">Kannada</option>
                            <option value="malayalam">Malayalam</option>
                            <option value="marathi">Marathi</option>
                          </select>
                          <button class="btn btn-primary fw-bold text-white" id="downloadButton">Download</button>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
				  <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one">
                    <div class="inner-box">
                      <figure class="image-box"> <img alt="Krishnayan Gaushala Products" src="../docs.krishnayangauraksha.org/static_editor_images/14303296712024_04_20.jpg" class="w-100 rounded-3"/>
                        <h2 class="fs-5 my-3">Krishnayan Products</h2>
                        <a class="btn btn-primary text-white fw-bold" href="assets/images/downloads/SKDG-PRODUCTS-FINAL.pdf">Download</a> </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="card rounded-4 border-0 shadow-sm">
          <div class="card-header border-0 bg-pink2">
            <h3 class="mb-0 fs-5">Krishnayan Books</h3>
          </div>
          <div class="card-body">
            <div class="col-lg-12 ">
              <div class="row gy-4">
                <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one">
                    <div class="inner-box">
                      <figure class="image-box"> <img alt="Maharaj Bhashya Part 1" src="../docs.krishnayangauraksha.org/static_editor_images/2482682972024_04_20.jpg" class="rounded-3"/>
                        <h2 class="fs-5 my-3">Maharaj Bhashya Part 1</h2>
                        <a download="" class="btn btn-primary text-white fw-bold" href="assets/images/downloads/MAHARAJ-BHASHYA-PART-1.pdf">Download</a> </figure>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one">
                    <div class="inner-box">
                      <figure class="image-box"> <img alt="Maharaj Bhashya Part 2" src="../docs.krishnayangauraksha.org/static_editor_images/791438272024_04_20.jpg" class="rounded-3"/>
                        <h2 class="fs-5 my-3">Maharaj Bhashya Part 2</h2>
                        <a href="assets/images/downloads/MAHARAJ-BHASHYA-PART-2.pdf" download="" class="btn btn-primary text-white fw-bold">Download</a> </figure>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one">
                    <div class="inner-box">
                      <figure class="image-box"> <img alt="SHREE KRISHNAYAN" src="../docs.krishnayangauraksha.org/static_editor_images/2455214892024_04_20.jpg" class="rounded-3"/>
                        <h2 class="fs-5 my-3">Shree Krishnayan</h2>
                        <a class="btn btn-primary text-white fw-bold" download="" href="assets/images/downloads/SHREE-KRISHNAYAN-COMPLETE.pdf">Download</a> </figure>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="card rounded-4 border-0 shadow-sm">
          <div class="card-header border-0 bg-pink2">
            <h3 class="mb-0 fs-5 ">Accreditation</h3>
          </div>
          <div class="card-body">
            <div class="col-lg-12 ">
              <div class="row gy-4">
                <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one">
                    <div class="inner-box">
                      <a class="image-box" data-fancybox="gallery" href="assets/images/downloads/d4.jpg"><img alt="Krishnayan Gaushala" src="assets/images/downloads/d4_small.jpg" class="rounded-3"/>  </a>
                      <div class="lower-content">
                        <div class="title-box2">
                          <h4 class="mt-3 mb-0">
                            <a data-fancybox="gallery" class="fs-18 text-dark" href="assets/images/downloads/d4.jpg">Krishnayan Gaushala<br/>
                            <span class="small">(Pan card)</span></a></h4>
                           </div>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one ">
                    <div class="inner-box">
                      <a class="image-box" data-fancybox="gallery" href="assets/images/downloads/animal-welfare-board-chennai.pdf"><img alt="Animal Welfare Board Chennai" class="rounded-3" src="assets/images/downloads/animal-welfare-board-chennai.jpg"/> </a>
                      <div class="lower-content">
                        <div class="title-box2">
                          <h4 class="mt-3 mb-0"><a data-fancybox="gallery" class="fs-18 text-dark" href="assets/images/downloads/animal-welfare-board-chennai.pdf">Animal Welfare Board Chennai</a></h4>
                           </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one ">
                    <div class="inner-box">
                      <a class="image-box" data-fancybox="gallery" href="assets/images/downloads/UTTRAKHAND-ANIMAL-WEFARE-REG-CERT-1-2-2018.pdf">
						  <img alt="Uttrakhand Animal Welfare Reg-Cert (30-1-2018)" class="w-100 rounded-3" src="assets/images/downloads/UTTRAKHAND-ANIMAL-WEFARE-REG-CERT-1-2-2018.jpg"/> </a>
                      <div class="lower-content">
                        <div class="title-box2">
                          <h4 class="mt-3 mb-0"><a data-fancybox="gallery" class="fs-18 text-dark" href="assets/images/downloads/UTTRAKHAND-ANIMAL-WEFARE-REG-CERT-1-2-2018.pdf">Uttrakhand Animal Welfare Reg-Cert (30-1-2018)</a></h4>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
				    <div class="col-lg-3 col-md-6 col-sm-12 news-block">
					  <div class="news-block-one ">
						<div class="inner-box">
						    <a data-fancybox="gallery" class="image-box" href="https://www.qa.krishnayangauraksha.org/assets/images/downloads/Form-CSR1-SKDG.pdf">
							  <img alt="CSR1 Certificate" src="../docs.krishnayangauraksha.org/static_editor_images/19353432372024_04_20.jpg" class="w-100 rounded-3"/> 
							 
							</a>
						  <div class="lower-content">
							<div class="title-box2">
							  <h4 class="mt-3 mb-0"><a data-fancybox="gallery" class="fs-18 text-dark" href="https://www.qa.krishnayangauraksha.org/assets/images/downloads/Form-CSR1-SKDG.pdf">Form CSR1 SKDG</a></h4>
								
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  
				  
				     <div class="col-lg-3 col-md-6 col-sm-12 news-block">
					  <div class="news-block-one ">
						<div class="inner-box">
						    <a data-fancybox="gallery" class="image-box" href="https://www.qa.krishnayangauraksha.org/assets/images/downloads/80g.pdf">
							  <img alt="80G Certificate" src="../docs.krishnayangauraksha.org/static_editor_images/15706520982024_04_20.jpg" class="w-100 rounded-3"/> 
							 
							</a>
						  <div class="lower-content">
							<div class="title-box2">
							  <h4 class="mt-3 mb-0"><a data-fancybox="gallery" class="fs-18 text-dark" href="https://www.qa.krishnayangauraksha.org/assets/images/downloads/80g.pdf">80G</a></h4>
								
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  
				  
				     <div class="col-lg-3 col-md-6 col-sm-12 news-block">
					  <div class="news-block-one ">
						<div class="inner-box">
						    <div class="image-box">
                              <a data-fancybox="gallery" href="https://www.qa.krishnayangauraksha.org/assets/images/downloads/REGISTERATION-2021.pdf"><img alt="Registration 2021" src="../docs.krishnayangauraksha.org/static_editor_images/13776547572024_04_20.jpg" class="w-100 rounded-3"/> </a>
							  
							 
							</div>
						  <div class="lower-content">
							<div class="title-box2">
							  <h4 class="mt-3 mb-0 "><a data-fancybox="gallery" class="fs-18 text-dark" href="https://www.qa.krishnayangauraksha.org/assets/images/downloads/REGISTERATION-2021.pdf">Registration 2021</a></h4>
								
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


</div>
</div>
      <Footer/>
    </div>
  )
}

export default DownloadPage
