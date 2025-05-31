import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Testimonials from '../components/comman/Testimonials'

const EventPage = () => {
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
      <div class="mt-3">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-12">

              <h2 class="text-center fw-semibold text-primary fs-4 fs-m-14 d-md-flex justify-content-center gap-2 mt-3 mt-lg-0 mb-1">
                यत्र गाव: प्रसन्नाः स्युः प्रसन्नास्तत्र सम्पदः । <span class="d-block d-md-inline"> यत्र गावो
                  विषण्णाः
                  स्युर्विषण्णास्तत्र सम्पदः ॥</span></h2>
              <h6 class="text-center fw-semibold fs-m-14 fs-5 mb-0 mb-lg-2">Where cows are happy,
                prosperity is there. <span class="d-block d-md-inline"> Where cows are in grief,
                  adversity is there.</span></h6>

            </div>
            <div class="col-lg-8 slider-box krishnayan cart">

              <div class="row gy-4">

                <section class="col-lg-12 px-lg-3 px-0">
                  <div class="swiper mainbanner">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="../docs.krishnayangauraksha.org/dynamic_page/809252652event.jpg" class="d-none d-lg-block rounded-0 w-100 img-fluid"
                          alt="Adopt A Cow Banner"/>
                      </div>
                    </div>
                  </div>

                  <div class="mobile-banner d-lg-none">
                    <div class="swiper mobile-slider2">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img src="https://docs.krishnayangauraksha.org/dynamic_page/55909217617275155181.webp" alt=""/>
                        </div>
                        <div class="swiper-slide">
                          <img src="https://docs.krishnayangauraksha.org/dynamic_page/99604417275155182.webp" alt=""/>
                        </div>
                        <div class="swiper-slide">
                          <img src="https://docs.krishnayangauraksha.org/dynamic_page/62803580117275155183.webp" alt=""/>
                        </div>
                        <div class="swiper-slide">
                          <img src="https://docs.krishnayangauraksha.org/dynamic_page/86617239517275155184.webp" alt=""/>
                        </div>
                        <div class="swiper-slide">
                          <img src="https://docs.krishnayangauraksha.org/dynamic_page/154708586417275155185.webp" alt=""/>
                        </div>
                      </div>
                      <div class="swiper-pagination"></div>
                    </div>
                    <h3>Perform Vedic Rituals on the bank of maa ganga</h3>
                    <p>Protecting & Sheltering Over 21000 Stray & Rescued Gauvansh</p>
                  </div>
                </section>

                <section class="col-lg-12">
                   <div class="second-nav">
                    <div class="swiper secondnav-swiper">
                      <ul class="swiper-wrapper">
                        <li class="swiper-slide"><a href="#video">Video</a></li>
                        <li class="swiper-slide"><a href="#about-ekadashi">About Ekadashi</a></li>
                        <li class="swiper-slide"><a href="#gallery">Gallery</a></li>
                        <li class="swiper-slide"><a href="#whatwedo">What we do</a></li>
                        <li class="swiper-slide"><a href="#about">About us</a></li>
                        <li class="swiper-slide"><a href="#Donors">Donors</a></li>
                      </ul>
                      <div class="paddles">
                        <button class="left-paddle paddle">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#ffffff" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                          </svg>
                        </button>
                        <button class="right-paddle paddle">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#ffffff" d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div> 


                  <h2 class="addbullet">Select Your Sewa</h2>

                  <div class="row g-2 mb-4" id="donatetable">

                    <div class="col-12 position-relative">
                      <h4 class="newheading">Perform Vedic Pooja</h4>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Tuladaan</h3>

                          <img src="https://docs.krishnayangauraksha.org/post_thumbnail/30_12_2024_16_47_08tuladaaan.webp"
                            width="382" height="160" class="img-fluid" alt="Tuladaan"/>

                            <div class="showtwolines paragraph-text"> Tula Daan is a sacred Hindu ritual where items equal to one's weight are donated to the needy. It symbolizes selflessness, charity, and the fulfillment of dharma </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID87"
                              onclick="productmodel(87,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Gaudaan</h3>

                          <img src="../docs.krishnayangauraksha.org/post_thumbnail/09_05_2024_17_12_56gaudaan.jpg"
                            width="382" height="160" class="img-fluid" alt="Gaudaan"/>

                            <div class="showtwolines paragraph-text"> Gaudaan means donation of desi cow to a Saints & Ashram. This donated cow's milk will be fed lifelong to Saint and tapaswis. When that cow grows old and stop giving milk that it will rest in peace in Krishnayan Goshala  for the rest of it's life.  </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID14"
                              onclick="productmodel(14,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>
                    <div class="col-12 position-relative">
                      <h4 class="newheading">Jaap & Navgraha Pooja</h4>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Navagraha shanti</h3>

                          <img src="administrator/assets/uploads/campaign_page/c7b3dab3aa5fdbf117da0ca9d7386b98.jpg"
                            width="382" height="160" class="img-fluid" alt="Navagraha shanti"/>

                            <div class="showtwolines paragraph-text"> Navagraha Rituals (Poojas) is performed to correct the inauspicious & bad effective of Grahas (planets) which can help to get over from hardships and obstacles in life. Navagraha Shanti Pooja is performed by Vedic Brahmins on the Bank of Maa Ganga. You ca </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID12"
                              onclick="productmodel(12,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Pooja and yagya</h3>

                          <img src="../docs.krishnayangauraksha.org/post_thumbnail/16_04_2024_17_20_14pooja-krish.jpg"
                            width="382" height="160" class="img-fluid" alt="Pooja and yagya"/>

                            <div class="showtwolines paragraph-text"> Yagya is performed to invoke Gods for their blessings and to also obtain boons from them. Different kind of Yagya are performed on the foothills of Himalayas. Pooja is worship ritual performed to offer devotional homage and prayer to one or more deities. </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID11"
                              onclick="productmodel(11,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>
                    <div class="col-12 position-relative">
                      <h4 class="newheading">Select Shivabhishek </h4>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Shivabishek</h3>

                          <img src="administrator/assets/uploads/campaign_page/424955c6a6c43040513c18dc319b8779.jpg"
                            width="382" height="160" class="img-fluid" alt="Shivabishek"/>

                            <div class="showtwolines paragraph-text"> Rudrabhishek is a Vedic Ritual to appease Lord Shiva. Different kind of Rudrabhishek is done by full by Brahmins with Vedic ritual on the foothills of Himalayas and on the bank of maa Ganga. You can select from different kind of Rudrabhishek </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID9"
                              onclick="productmodel(9,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>
                    <div class="col-12 position-relative">
                      <h4 class="newheading">Perform Annadaan</h4>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Annadanam</h3>

                          <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_16_09_21ann.webp"
                            width="382" height="160" class="img-fluid" alt="Annadanam"/>

                            <div class="showtwolines paragraph-text"> You can feed saints, Tapaswis, Fakkars, devotees on the foothills of Himalays and on the Bank of Maa Ganga.  Their blessings can change our life.  </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID7"
                              onclick="productmodel(7,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>
                    <div class="col-12 position-relative">
                      <h4 class="newheading">Help Stray Gauvansh</h4>
                    </div>
                    <div class="col-xl-4 col-lg-6  col-6">
                      <div class="card  newcard mncard">
                        <div class="card-body">
                          <h3 class="italic">Feed cows</h3>

                          <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_16_11_48fooder.webp"
                            width="382" height="160" class="img-fluid" alt="Feed cows"/>

                            <div class="showtwolines paragraph-text"> Mix of different types of fodder are being fed to Gauvansh. You can select the fodder type which you want to Feed. </div>
                            <div class="text-warning fs-14  read-more" role="button">Read more</div>


                            <button class="btn  btn-warning   mt-lg-3 d-flex align-items-center  justify-content-center"
                              id="category_ID1"
                              onclick="productmodel(1,5)">
                              <i class="fa-solid fa-cart-shopping"></i> Add
                              Items <span class="ms-1"> to Donate</span></button>

                        </div>
                      </div>
                    </div>


                     
                    <div class="col-12 position-relative">
                      <h4 class="newheading"></h4>
                    </div>
                    <div class="col-md-4 col-6">
                      <div class="card newcard mncard">
                        <div class="card-body ">
                          <h3>Adopt a Cow</h3>
                          <img src="new-assets/images/adopt/adopt-a-cow.html"
                            width="382" height="160" class="img-fluid lazyload"
                            alt="Feed cows"/>

                            <div class=" showtwolines paragraph-text">You can own a cow in Krishnayan. Select your  cow and adopt it. Its your gauvansh which is sheltered in Krishnayan. You will can come and meet it and can see via video call. We will keep you updated on its status like health, milking, calfing etc</div>
                            <div class="text-warning fs-14 read-more" role="button">Read more</div>
                            <div class="d-flex flex-column cont" id="cow_cart_cat">


                              <button
                                class="btn  btn-warning   mt-lg-3 d-flex align-items-center gap-2 justify-content-center triggeradoptmodal"
                              >
                                Add Gauvansh</button>
                            </div>
                        </div>
                      </div>
                    </div>    
                    <div class="col-lg-6 col-xxl-4 col-6">
                      <div class="card newcard mncard">
                        <div class="card-body">
                          <h3>Any Amount</h3>
                          <img src="new-assets/images/money.jpg" class="img-fluid" width="382"
                            height="160" alt="Any Amount"/>

                            <div class="showtwolines paragraph-text"> You can donate any amount of your
                              choice which will be used for fodder to feed cows. </div>
                            <div class="text-warning my-1 read-more fs-14" role="button">Read more</div>
                            <div class="d-flex align-items-md-center justify-content-md-center  mt-lg-3">


                              <input type='hidden' id="session_rowID_custom"
                                value=""/>
                                <div class="position-relative mt-minus-7 w-100">
                                  <input type="number" class="form-control border-black rounded-pill h-42 fs-14 w-100"
                                    placeholder="(Min Rs.350)" id="custom_amount"
                                    onchange="btnPlusMinus(1,'custom_101','custom','custom_102','custom_102',this);"
                                    value=""/>
                                    <div class="fixedaddbtn" onclick="add_custom();" id="custom_id">Add</div>
                                </div>



                            </div>


                        </div>
                      </div>
                    </div>
                  </div>


                  <h4 class="addbullet mt-4 mt-lg-0">Our Other Services</h4>
                  <div class="">
                    <div class="pagescatsliderbg">

                      <div class="swiper pagescatslider">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                             <a href="#catpopup_11" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(11,5)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_18_22medical.webp" class="img-fluid" alt="Medical Help"/>
                                </div>
                                <h5>Medical Help</h5>
                                <p>Once a cow grows old and stop giving milk, their owner disowns them because they are of no use to them.</p>
                                <button>Add Items To Donate</button>
                              </a>
                          </div>
                          <div class="swiper-slide">
                             <a href="#catpopup_7" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(7,14)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_20_16birthday.webp" class="img-fluid" alt=" Celebrate Birthday/ Anniv/ Event"/>
                                </div>
                                <h5> Celebrate Birthday/ Anniv/ Event</h5>
                                <p>We at Krishnayan can help you by making your auspicious day bestowed with abundant blessings and turn your contributions... </p>
                                <button>Celebrate Now</button>
                              </a>
                          </div>
                          <div class="swiper-slide">
                             <a href="#catpopup_5" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(5,15)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_26_06yagya.webp" class="img-fluid" alt="Yagya / Pooja / Food Distribution"/>
                                </div>
                                <h5>Yagya / Pooja / Food Distribution</h5>
                                <p>Yagya is performed to invoke Gods for their blessings and to seek a peaceful and healthy life.</p>
                                <button>Click For Do Pooja</button>
                              </a>
                          </div>
                          <div class="swiper-slide">
                             <a href="#catpopup_9" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(9,16)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_22_08child-food.webp" class="img-fluid" alt=" Food For Under Privileged"/>
                                </div>
                                <h5> Food For Under Privileged</h5>
                                <p>Life is really tough without food. With your support, Krishnayan spread love and happiness through its free food distribution initiative</p>
                                <button>Food Distribution</button>
                              </a>
                          </div>
                          <div class="swiper-slide">
                             <a href="#catpopup_6" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(6,17)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_27_45shradh.webp" class="img-fluid" alt="Shradh for Departed Souls"/>
                                </div>
                                <h5>Shradh for Departed Souls</h5>
                                <p>Shradh is a ritual to pay homage to one's deceased family members or ancestors. You can choos...</p>
                                <button>Add Items for Donate</button>
                              </a>
                          </div>
                          <div class="swiper-slide">
                             <a href="#catpopup_2" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(2,21)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_24_30mother-cow.webp" class="img-fluid" alt="Service to mother cow"/>
                                </div>
                                <h5>Service to mother cow</h5>
                                <p>Shree Krishnayan Desi Gauraksha shelters destitute cows & bulls which are rescued from various locations surrounding our Gaushalas. You can adopt these gauvansh and give them a happy second life. The cows adopted by you will be sheltered, fed and protected by us on your behalf, and Gaumata’s grace will shower on you and your family, and will fill your life with peace, harmony and good health.</p>
                                <button>Add Items For Donate</button>
                              </a>
                          </div>
                          <div class="swiper-slide">
                             <a href="#catpopup_3" data-bs-toggle="modal" class="catsbox"/> 
                              <a onclick="other_services(3,22)" class="catsbox">
                                <div class="imgbx">
                                  <img src="https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_29_46cow-food.webp" class="img-fluid" alt="Feed Mother Cow"/>
                                </div>
                                <h5>Feed Mother Cow</h5>
                                <p>Once a cow grows old and stop giving milk, their owner disowns them because they are of no use to them. Thousands of such innocent cows are left on the street without a home. </p>
                                <button>Add Items To Donate</button>
                              </a>
                          </div>


                        </div>

                      </div>
                      <div class="d-flex align-items-center gap-2 justify-content-center ">
                        <div class="swiper-slider-prev pagescatslider-prev"> <i class="fa-regular fa-arrow-left"></i></div>
                        <div class="swiper-slider-next pagescatslider-next"><i class="fa-regular fa-arrow-right"></i></div>
                      </div>

                    </div>
                  </div>


                   
                  <div class="modal fade" id="catpopup" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-scrollable modal-fullscreen-sm-down">
                      <div class="modal-content bg-primary-5">
                        <div class="modal-body p-0" id="model_other_services">

                        </div>

                        <div class="modal-footer justify-content-center border-top-0 ">
                          <button type="button" class="btn btn-outline-primary  fw-semibold" data-bs-dismiss="modal">Back To
                            Main Cart</button>
                          <button type="button"
                            class="btn btn-primary ms-2 text-white fw-semibold px-4 product_previewBTN dnone"
                            onclick="preview_function()">Proceed</button>
                        </div>
                      </div>
                    </div>
                  </div>

                   
                  <div class="modal" id="newpaymentmodal" tabindex="-1">
                    <div class="modal-dialog modal-fullscreen-md-down">
                      <div class="modal-content">
                        <div class="modal-header bg-primary">
                          <h5 class="modal-title text-white fs-18">Select Payment Method</h5>
                          <button type="button" class="btn-close" id="cls_mothly_inr_popup" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-0">
                          <div class="paymentpopup">
                            <div class="inner-box">
                              <div class="card">
                                 <div class="card-header">
                                  <h5 class="mb-0"></h5>
                                  <button class="btn-close  " id="cls_mothly_inr_popup"></button>
                                </div> 
                                <div class="card-body">

                                  <div class="paymentslinks" role="group">
                                    <input type="radio" class="btn-check" name="btnradio_ownwish" value="card"
                                      id="btnradio11" autocomplete="off"/>
                                      <label class="btn " for="btnradio11">
                                        <img src="new-assets/images/icons/cards.svg" alt=""/>
                                          <div class="">
                                            <h3>Cards <span>Recommended</span> </h3>
                                            <p>Visa, Mastercard or Rupay Credit or Debit Cards</p>
                                          </div>
                                      </label>

                                      <input type="radio" class="btn-check" name="btnradio_ownwish" value="netbanking"
                                        id="btnradio21" autocomplete="off"/>
                                        <label class="btn " for="btnradio21">
                                          <img src="new-assets/images/icons/net-banking.svg"
                                            alt=""/>
                                            <div class="">
                                              <h3>Net banking </h3>
                                              <p>Sign up for an e-mandate with your bank account</p>
                                            </div>
                                        </label>

                                        <input type="radio" class="btn-check" name="btnradio_ownwish" value="upi"
                                          id="btnradio31" autocomplete="off"/>
                                          <label class="btn " for="btnradio31">
                                            <img src="new-assets/images/icons/upi.svg" alt=""/>
                                              <div class="">
                                                <h3>UPI</h3>
                                                <p>Google Pay, Paytm, PhonePe or other UPI apps</p>
                                              </div>
                                          </label>
                                        </div>
                                         <p style={{fontWeight: "bolder", textAlign:"center",display:"none"}} id="own_wish_wait">Please Wait ...<i class="fa fa-spinner fa-spin" style={{fontSize:"24px"}}></i></p> 
                                        <div class="loader-box" id="own_wish_wait" style={{display:"none"}}>
                                          <div class="spinner-border text-warning" role="status">
                                            <span class="visually-hidden">Loading...</span>
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

                      <input type="hidden" id="payment_mode_ownwish" name="payment_mode_ownwish" value=""/>
                        
                                           </section>

                      <section class="col-lg-12">
                        <h3 class="addbullet"><p>Vedic Rituals on the Banks of Maa Ganga</p></h3>
                        <div class="mt-2 text-justify addreadmore"><p>Vedic rituals encompass a rich tapestry of ancient religious ceremonies and practices rooted in the revered texts known as the Vedas. These rituals hold profound significance in our Sanatan Dharma, guiding us through life's milestones from birth to death. For millennia, these traditions have been integral to Hindu spirituality, imparting a touch of divinity to every occasion.<br/><br/>Central to these practices is the Vedic Pooja, a traditional worship involving prayers, offerings, and rituals. It serves as a means to express gratitude and seek blessings from the divine during significant events. From Chhathi Ceremony to Annaprashana and Shraddha, various rituals are conducted through rituals like Havan, Yagna, Shiva Abhishek, and Godaan.<br/><br/><strong>Why Perform Rituals?</strong><br/>In today's age of lavish celebrations, there's a yearning for deeper fulfillment beyond momentary glamour. Vedic rituals offer a path to inner peace and enduring blessings. This gives us a momentary fame at the cost of our money but does not give us inner satisfaction and peace. When we start anything thing new, we look out for an auspicious day so that we get success in our endeavour. Even on the birth of Lord Rama all nakshatra were in place.<br/><br/><i>जोग लगन ग्रह बार तिथि सकल भए अनुकूल।</i><br/><i>चर अरु अचर हर्षजुत राम जनम सुखमूल ।।</i><br/><br/><strong>A Commitment to Sacred Traditions</strong><br/>At Shree Krishnayan Desi Gauraksha, our dedicated team of Vedic Brahmins meticulously performs these rituals, rooted in deep knowledge of Shastra, Vedas, and Puranas. Beginning their day with Japa and Yagya at dawn, they uphold the sanctity of Tirth, ensuring that every good deed bears manifold fruits. This approach not only revitalizes ancient customs but also brings inner peace and lasting satisfaction, resonating with the essence of our spiritual heritage.<br/>Perform Vedic rituals with Shree Krishnayan Gaurakshashala on the banks of Maa Ganga in Haridwar. Our yagya mandap hosts various ceremonies like Yagyas, Pujas, Shivabhishek and Japas performed by Vedic Brahmins. These rituals bring peace and blessings into your life. Our gaushala, home to over 22,000 desi cows, is managed by saints who distribute milk and products free to saints, tapasvis, gausewaks, and ashrams. Join us online or in person for rituals like Gaudan and Shivabhishek to achieve success in studies, career, and personal life.<br/><br/><br/><br/><br data-cke-filler="true"/></p></div>
                          <button class="rmbtn">Read More</button>
                        </section>

                          <section class="col-lg-12">
                            <h3 class="addbullet">Accreditations &amp; Recognitions</h3>
                            <div class="accreco px-0">
                              <div class="mobile-overflow swiper accswiper">
                                <ul class="accrediations swiper-wrapper">
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/80g.webp"
                                    alt="Registered under section 12AA of the Income Tax Act" width="100"
                                    height="100" class="lazyload"/><span> Registered
                                      under section 12AA of the Income Tax Act</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/animal.webp"
                                    alt="Animal Welfare Board of India, Chennai" width="100" height="100"
                                    class="lazyload"/><span>Animal
                                      Welfare Board of India, Chennai</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/gausewa.webp"
                                    alt="Uttar Pradesh Gau Sewa Ayog" width="100" height="100"
                                    class="lazyload"/><span>Uttar
                                      Pradesh Gau Sewa Ayog</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/uttrakhand.webp"
                                    alt="Uttarakhand Animal Development Board" width="100" height="100"
                                    class="lazyload"/><span>Uttarakhand
                                      Animal Development Board</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/mp.webp"
                                    alt="Madhya Pradesh Gausewa Ayog" width="100" height="100"
                                    class="lazyload"/><span>Madhya
                                      Pradesh Gausewa Ayog</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/incometax.webp"
                                    alt="Registered under section 80G of the Income Tax Act" width="100"
                                    height="100" class="lazyload"/><span>Registered
                                      under section 80G of the Income Tax Act</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/fcra.webp"
                                    alt="FCRA under Ministry of Home Affairs" width="100" height="100"
                                    class="lazyload"/><span>FCRA under
                                      Ministry of Home Affairs</span></li>
                                  <li class="swiper-slide"><img
                                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    data-src="https://www.krishnayangauraksha.org/new-assets/images/authorised/niti.webp"
                                    alt="Niti Ayog, Government of India" width="100" height="100"
                                    class="lazyload"/><span>Niti
                                      Ayog,
                                      Government of India</span>
                                  </li>

                                </ul>
                              </div>

                            </div>
                          </section>
                          <section class="col-lg-12">
                            <ul class="achives rainbow ">
                              <li class="ribbon">WE SHELTER & FEED 21000+ INJURED, ABANDONED, STRAY COWS & BULLS. </li>
                              <li class="ribbon">FEED OVER 30 LAKH KG OF FODDER EVERY MONTH</li>
                              <li class="ribbon">WE DON'T SELL MILK OR MILK PRODUCTS</li>
                              <li class="ribbon">Government Certified and Approved</li>
                              <li class="ribbon">We don't sell milk or milk products </li>
                            </ul>
                          </section>
                          <section class="col-lg-12">
                            <div class="swiper iso-slider my-3">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                  <div class="authanim"><img data-src="https://docs.krishnayangauraksha.org/donation_page/images/iso.png"
                                    alt="iSO Certificate logo" class="lazyload"/></div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="authanim"><img data-src="https://docs.krishnayangauraksha.org/donation_page/images/2011.png"
                                    alt="Government Certified Logo" class="lazyload"/></div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="authanim"><img
                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/IAF-logo-removebg-preview1.png"
                                    alt="IAF Logo" class="lazyload"/></div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="authanim"><img data-src="https://docs.krishnayangauraksha.org/donation_page/images/iso.png"
                                    alt="iSO Certificate logo" class="lazyload"/></div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="authanim"><img data-src="https://docs.krishnayangauraksha.org/donation_page/images/2011.png"
                                    alt="Government Certified Logo" class="lazyload"/></div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="authanim"><img
                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/IAF-logo-removebg-preview1.png"
                                    alt="IAF Logo" class="lazyload"/></div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section class="col-lg-12">
                            <div class="share-tags">
                              <h3 class="addbullet"><p>What we do:-</p></h3>
                              <div class="text-justify addreadmore"><p>We perform the following activities for you on the bank of Maa Ganga in Haridwar / Rishikesh.<br/><br/>1)<strong> Online Shiv Abishek </strong>is performed by Vedic Bhramins on the bank of Maa Ganga in Rishikesh. It’s a place which is on the foothills of Himalayas looked upon by Kedarnath and Neelkanth Mahadev. One of the name of Lord Shiv is Ashutosh which means that one who is easily pleased and fulfills our wishes.</p><p><strong>आसुतोष तुम्ह अवढर दानी।</strong><br/><strong>आरति हरहु दीन जनु जानी।।</strong></p><p>Lord Shiv Abhishek removes all hurdles in life. It also fulfills our dreams. In scriptures we find Lord Shiva blessed everyone very easily with boon. Shiva Abhisek is performed and shown to you live. In Ramcharit manas Lord Rama performs Shiv Abhishek and tells the importance of doing it with Gangajal.</p><p><strong>जो गंगाजलु आनि चढ़ाइहि । सो साजुज्य मुक्ति नर पाइहि ⁠।⁠। ( Ramcharit manas)</strong></p><p><strong>Online Yagya </strong>- Our shastra, Ved Puran are filled with different kind of yagya like putresthi, kamesthi yagya etc which fulfills all your wishes and remove hurdles. But all the Yagya will only bear fruits if Havish is pure and proper, the mantra is pronounced by Vedic Brahmins only and that too is correct. Food, attire and living style is pure and proper of the Brahmins. The ghee used in the Yagya should of desi cows only which nowadays is very scarce. We at Krishnayan fully take care of this and see that everything is according to the procedures laid down in our Shastra so that the Yajman reaps fruits.<br/><br/><strong>Annadanam </strong>- You can feed Brahmins, saints, tapasvis and beggars on your auspicious day. They are served proper food in your name. There are many such hidden saints and tapaswis in Haridwar / Rishikesh who may eat your Bhandara on your auspicious day and may bless you.<br/><br/><a href="gaugrass.html"><strong>Gaugrass </strong></a>- 33 crore devi and devtas reside in our Gaumata. If we Feed our Gaumata mata it means we have devoted our offerings to 33 crore devis and devtas. We at Shree Krishnayan Gauraksha is a home to more than 18000 destitute Desi cows which are fed, sheltered and taken care of in all respect.<br/><br/><strong>Online </strong><a href="godaan-2.html"><strong>Godaan</strong></a> - Here in gaushala a vedic Brahmin will perform online Gaudan on the day of your event. This Gaudan will be performed elaborately as per the Vedic scriptures by a priest. The cow donated on your behalf will be milked and fed to saints and tapasvis all throughout its life. On bank of maa Ganga, this Gaudan will make you pure and free from all sins. It will fulfill your Sankalp and will help you in attaining the highest state of eternal bliss.</p> </div>
                                <button class="rmbtn">Read More</button>
                              </div>
                              </section>
                                <section class="col-lg-12" id="video">
                                  <h3 class="addbullet">
                                    Video</h3>
                                  <div class="position-relative sarrows">
                                    <div class="swiper videosSlider">
                                      <div class="swiper-wrapper">
                                        <div class="swiper-slide videowrapper d-none d-lg-block">

                                          <div class="introvideo videoButton " data-video-id="gvpsvza1gIE" role="button">
                                            <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                              data-src="https://img.youtube.com/vi/gvpsvza1gIE/hqdefault.jpg" width="614" height="345"
                                              class="w-100 videothumb lazyload" alt="About Krishnayan Video Thumbnail"/>
                                              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                data-src="https://www.krishnayangauraksha.org/new-assets/images/play-icon.svg" width="70" height="70"
                                                class="play-icon lazyload" alt="Play Icon"/>
                                              </div>

                                          </div>
                                          <div class="swiper-slide videowrapper d-lg-none">
                                            <div class="introvideo videoButton " data-video-id="88u3WnsBNRM" role="button">
                                              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                data-src="https://img.youtube.com/vi/88u3WnsBNRM/hqdefault.jpg" width="1920" height="1080"
                                                class="w-100 videothumb lazyload" alt="About Krishnayan Video Thumbnail"/>
                                                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                  data-src="https://www.krishnayangauraksha.org/new-assets/images/play-icon.svg" width="70" height="70"
                                                  class="play-icon lazyload" alt="Play Icon"/>
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="swiper-button-next vnext"></div>
                                        <div class="swiper-button-prev vprev"></div>
                                      </div>                    </section>

                                    <section class="col-lg-12">
                                      <h3 class="addbullet">Gallery:-</h3>
                                      <div class="sarrows">
                                        <div class="position-relative">
                                          <div class="swiper galleryslider">
                                            <div class="swiper-wrapper">
                                              <div class="swiper-slide">
                                                <a href="../docs.krishnayangauraksha.org/dynamic_page/1834500191event2.jpg" data-fancybox="gallery">
                                                  <img src="../docs.krishnayangauraksha.org/dynamic_page/1834500191event2.jpg" alt=""/>
                                                    <span class="largeicon"><i class="fa fa-expand"
                                                      aria-hidden="true"></i></span>
                                                </a>
                                              </div>
                                              <div class="swiper-slide">
                                                <a href="../docs.krishnayangauraksha.org/dynamic_page/1927797283event3.jpg" data-fancybox="gallery">
                                                  <img src="../docs.krishnayangauraksha.org/dynamic_page/1927797283event3.jpg" alt=""/>
                                                    <span class="largeicon"><i class="fa fa-expand"
                                                      aria-hidden="true"></i></span>
                                                </a>
                                              </div>
                                              <div class="swiper-slide">
                                                <a href="../docs.krishnayangauraksha.org/dynamic_page/1461632536event4.jpg" data-fancybox="gallery">
                                                  <img src="../docs.krishnayangauraksha.org/dynamic_page/1461632536event4.jpg" alt=""/>
                                                    <span class="largeicon"><i class="fa fa-expand"
                                                      aria-hidden="true"></i></span>
                                                </a>
                                              </div>
                                              <div class="swiper-slide">
                                                <a href="../docs.krishnayangauraksha.org/dynamic_page/1041502025event5.jpg" data-fancybox="gallery">
                                                  <img src="../docs.krishnayangauraksha.org/dynamic_page/1041502025event5.jpg" alt=""/>
                                                    <span class="largeicon"><i class="fa fa-expand"
                                                      aria-hidden="true"></i></span>
                                                </a>
                                              </div>
                                              <div class="swiper-slide">
                                                <a href="../docs.krishnayangauraksha.org/dynamic_page/56765282event6.jpg" data-fancybox="gallery">
                                                  <img src="../docs.krishnayangauraksha.org/dynamic_page/56765282event6.jpg" alt=""/>
                                                    <span class="largeicon"><i class="fa fa-expand"
                                                      aria-hidden="true"></i></span>
                                                </a>
                                              </div>
                                              <div class="swiper-slide">
                                                <a href="../docs.krishnayangauraksha.org/dynamic_page/604698615event7.jpg" data-fancybox="gallery">
                                                  <img src="../docs.krishnayangauraksha.org/dynamic_page/604698615event7.jpg" alt=""/>
                                                    <span class="largeicon"><i class="fa fa-expand"
                                                      aria-hidden="true"></i></span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="swiper-button-next gnext"></div>
                                          <div class="swiper-button-prev gprev"></div>
                                        </div>
                                      </div>
                                    </section>

                                    <section class="col-lg-12">
                                      <div class="gallery ">
                                        <h3 class="addbullet">About us:-</h3>
                                        <p> ‘Shree Krishnayan Desi Gauraksha Evam Gaulok Dham Sewa Samiti’ is
                                          one of
                                          the largest Gaurakshashala of desi cows in India. We protect, feed &amp; shelter ailing,
                                          starving, destitute and stray desi cows majority of which are abandoned by their owners
                                          or saved
                                          from butchers. Most of these Gauvansh are milk barren. This gaushala is run and managed
                                          by
                                          saints. We do not sell milk or milk products. We started with just 11 cows in the year
                                          2010 in
                                          Haridwar and presently we shelter and feed more than 21000 cows
                                          We are registered with Animal Welfare Board of India (Chennai) and with animal welfare
                                          board in
                                          various states. </p>
                                        <div class="gy-3 row ">
                                          <a class="fancybox col-md-3 col-6" rel="group"
                                            href="../docs.krishnayangauraksha.org/donation_page/images/about/animal-welfare-board%2c-chennai_page-0001-(1)-big.jpg"><img
                                              src="../docs.krishnayangauraksha.org/donation_page/images/about/1.jpg"
                                              alt="Animal Welfare Board of India Certificate" class="w-100"/></a>
                                          <a class="fancybox col-md-3 col-6" rel="group"
                                            href="../docs.krishnayangauraksha.org/donation_page/images/about/iso-9001-certificate-1.jpg"><img
                                              src="../docs.krishnayangauraksha.org/donation_page/images/about/iso-9001-certificate-2.jpg"
                                              alt="ISO Certificate of Krishnayan Gauraksha" class="w-100"/></a>
                                          <a class="fancybox col-md-3 col-6" rel="group"
                                            href="../docs.krishnayangauraksha.org/donation_page/images/about/CERTIFICATE-UTTAR-PRADESH-GAUSHALA-REGISTERATION_page-0001-big.jpg"><img
                                              src="../docs.krishnayangauraksha.org/donation_page/images/about/2.jpg"
                                              alt="Nibandhan Certificate" class="w-100"/></a>
                                          <a class="fancybox col-md-3 col-6" rel="group"
                                            href="../docs.krishnayangauraksha.org/donation_page/images/about/IMG-20210227-WA0057-big.jpg"><img
                                              src="../docs.krishnayangauraksha.org/donation_page/images/about/3.jpg"
                                              alt="Uttrakhand Animal Welfare Board" class="w-100"/></a>
                                        </div>
                                      </div>
                                    </section>


                                    <section class="col-lg-12">
                                      <h3 class="addbullet">Recent Donors:-</h3>
                                      <div class="testimonials-two">

                                        <div class="donars_list">
                                          <div class="row">
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Tapas Ghosh                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:51:33                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Manisha Belvalkar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:51:06                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Suhagbhai Ganeshbhai Patel                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:48:21                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Gaurav Jauhari                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:33:40                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Gunjan Das                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:25:03                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      PRADYOT KUMAR DUTTA                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:14:10                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mehul Thakkar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:12:05                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Kamal Kishore SetPalani                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 08:00:40                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Alka Gupta                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:58:06                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Narasimham Ayyagari                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:53:16                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mahesh Kumar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:50:54                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Kanika                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:48:50                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sattiraju Srinivas                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:45:06                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mikul Mayank Makim                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:11:38                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      UPADHYAY NIRMANYU MANOJ                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 07:00:35                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vedashri Gajanan Joshi                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:57:05                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Nilay Banerjee                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:54:21                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vikas Thakur                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:45:46                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Neelkamal Podder                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:45:39                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Atul Kumar Singh                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:32:51                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      RAKESH                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:10:22                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vijay Kathavate                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 06:02:21                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mamillapally Ravindra                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 05:54:45                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sampatraj P Jain                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 05:15:51                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Ganesh Kumar Ramasamy                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 05:00:32                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mude Keerthi Priya                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 03:44:01                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Swetha Muthu                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 02:16:21                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Satyam Pandey                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 01:48:57                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Rachana Ravinni                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 12:21:36                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Reeshab Gupta                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 12:09:45                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shubham Sharma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 12:06:13                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Satyanarayana Murthy Parupudi                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 12:05:29                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Pritesh Soni                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 12:04:29                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Teresa Baiju                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      01-03-2025 12:01:16                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Dr Chanchal Mittal                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:40:14                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sachin Chauhan                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:37:53                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Venkat Sairam Kanishk Modekurt                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:35:50                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Priyanka                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:33:57                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      BEDANTA CHAKRABORTTY                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:17:05                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Rudhir Bhaskar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:08:21                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Hridaya Kulkarni                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:59:33                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Balasaheb Pandurang Gaikwad                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:55:45                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Rishabhenvirogmailcom                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:51:26                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Swarnaprava                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:46:17                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Anant Shukla                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:24:53                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sushant Kalaskar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:20:38                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Ganesan Iyer                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:03:47                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      DEEPAK PANDEY                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:03:22                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shubham Swarnkar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:54:46                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Aswad Modak                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:35:00                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Abhishek                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:32:32                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Kayomus                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:15:23                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Kailash Kumar Gupta                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:12:44                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      KRISHNA LATA SINGH                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:09:33                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Anamika Radhakishan Udewal                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 09:07:55                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Himendra K                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:53:58                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Birendra Bhardwaj                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:51:40                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Jeetesh Yadav                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:49:03                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vinay Sudheer                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:48:29                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Abhay Kumar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:47:41                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Dipti Bhejwal                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:46:07                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Harish Kumar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:42:58                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sudhakar Matey                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:17:07                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Amit Singh                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:12:20                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Arpit Saxena                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:02:41                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Susanta Kumar Dash                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 08:02:37                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Jyoti Bareja                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:58:42                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shruti Bhatt                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:48:20                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Harsh Bajpai                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:41:22                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mahendra Kumar Sharma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:34:27                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      ASHISH MAJUMDAR                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:28:49                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shivani                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:28:33                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Atul Chavan                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:23:51                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Kamal Sharma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:22:26                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      N Suresh Kumar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 07:05:49                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Ranjit Kumar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 06:49:22                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Krishna Sakha                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 06:47:34                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shayan Italiya                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 06:08:40                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Ishwar S Rajpurohit                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 06:07:19                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Narasimha Rao Athota                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 06:01:06                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      VireshJasmin                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:52:57                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Anonymous                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:43:54                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Aditya                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:29:08                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Omer Farooq                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:24:12                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sri Lakshmi Ladies Pg Pune                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:24:08                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      JAYANTHI K                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:23:50                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Monica Srivastava                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:13:18                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sivagurunathan                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:07:11                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Gopal                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 05:06:49                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Abhishek Mishra                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 04:48:09                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Anil                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 04:33:20                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Parveen Gupta                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 04:32:00                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vijay Sharma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 04:29:42                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Raj Sekhar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 04:09:43                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Regina George Zaleski                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 04:03:35                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      SUNIL CHANDRAKANT PARIKH                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 03:52:24                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      C RUSHENDRA KUMAR                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 03:47:42                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shruti Karchalkar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 03:41:04                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shreya Sinha                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 03:19:18                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      ADM Chachi Pending Amount                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 03:17:11                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Aniruddh Govind Lal Malpani                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 03:07:52                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Yaksh Chauhan                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:57:50                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vishal Waghade                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:56:42                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Deepika Taterway                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:56:15                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Pragyan Bharati Sahoo                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:48:58                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sunil Tiwari                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:47:40                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Dilip Halder                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:41:12                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sabbisetti Narsingarao                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:38:23                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Nathan Mbela                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:36:25                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Shrabanti Kumar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:33:30                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Kirtie Nandoe Randhawa                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:28:13                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Vikram                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:21:00                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Archana Dongre                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:18:35                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      MOHIT CHAUHAN                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:17:59                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Seetha Subramanian                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 02:17:34                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Pramita Dubey                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:54:25                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Devesh Parashar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:45:41                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      ASHISH PANDEY                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:43:15                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Neha Gupta                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:38:44                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Nandini Chittumalla                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:35:08                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Prabhat Ravi Chandan                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:31:53                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sidharth Sahai                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:27:10                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Parvati Rai                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:23:15                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Pinal Patel                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:22:28                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Siddhant Khatri                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 01:06:16                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Ghanshyam Tiwari                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:54:38                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Naman Parashar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:37:55                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Uday Abrol                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:35:13                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Geeta Jayesh Shah                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:32:59                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Mohit Gupta                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:30:03                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Anupriya Sharma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:26:43                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Aditya Kumar Iyer                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:08:38                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Gaurav                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:05:53                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Dinesh Nishar                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 12:04:07                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Madhu Sharma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:58:33                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Deependra Verma                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:55:07                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Akanshi                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:54:13                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      R Ganesh                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:48:16                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Abhishek Tewari                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:39:37                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Ganesh                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:23:14                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Aayra Singh                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:18:03                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Hariom                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 11:16:31                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Skp                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:53:40                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Nitin Salvi                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:48:52                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Sweta                                                     </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:47:19                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Narendra Mhatre                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:44:07                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Deepti Jain                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:31:57                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      NAZMI SINGH                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:30:56                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Pradeep Nepalia                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:30:28                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-md-4">
                                              <div class="card mb-3">
                                                <div class="d-flex align-items-center p-2">
                                                  <div class="me-2"> <img
                                                    data-src="https://docs.krishnayangauraksha.org/donation_page/images/user.png"
                                                    class="img-fluid rounded-start lazyload" alt="donor"/>
                                                  </div>
                                                  <div class="lh-base">
                                                    <h5 class="card-title mb-0 fs-6 ">
                                                      Karthik Raman                                                    </h5>
                                                    <p class="m-0"><small class="text-muted">
                                                      28-02-2025 10:22:49                                                        </small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>

                                  </div>











                                   <section class="template__section daily_updates pt-3" id="Updates">
                                    <h3 class=" heading border-bottom-2" id="about">Updates:-</h3>
                                    <div class="updates_list">
                                    </div>
                                  </section> 

                                </div>
                                <div class="col-lg-4 anchor hide-mobile sidebar-shift ">
                                  <div class="fixed-donationcart sticky stick">
                                    <div class="right-cart bg-transparent shadow-none">
                                      <div class="row align-items-center">

                                        <div class="col-12">
                                          <div class="card rounded-4 border-0 shadow-sm">
                                            <div class="card-body">
                                              <div class="banner-tag text-center sankalp  mb-3">
                                                <p class="lh-sm">Tax exempted under section 80G(5)(iii) of Income tax vide registration No
                                                  AAGAS2376C22LK02
                                                  <span class="d-block my-2 opacity-75 fw-normal"> Sankalp video for
                                                    contribution above Rs 2000 </span>
                                                </p>
                                              </div>

                                              <div id="grand_total">
                                                <div class="add_cart_pro bg-primary text-center rounded-2">
                                                  <div class="top-bottom4">

                                                    <button class="share-now  btn bg-red-gradiant d-center d-md-none">
                                                      <i class="fa-regular fa-share-nodes  fa-shake "></i>
                                                    </button>
                                                    <a href="#donatetable" id="grand_without_item"
                                                      class=" text-decoration-none blinking-text text-center  btn"
                                                      onclick="return validateDonate1();">Add Your
                                                      Sewa</a>
                                                    <a href="https://wa.me/918755955000?text=I'm%20interested%20to%20%20know%20more%20about%20this,%20Can%20you%20Help?"
                                                      class="btn btn-whatsapp d-md-none"><i class="fa-brands fa-whatsapp"></i></a>


                                                  </div>

                                                  <input type="hidden" name="validate_value" id="validate_value"
                                                    value="0"
                                                    class="w-100"/>
                                                    <div class="_donation3 p-3  position-relative" style={{display:"none"}} id="grandTotal">

                                                      <div class="g-totals">

                                                        <span id='setGrandTotal'
                                                          class="dnone"></span>

                                                        <button type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                                                          data-bs-title="Reset List Items" class="reset-icon " id="resetBTN"
                                                          onclick="empty_cart(2);">
                                                          <i class="fa fa-repeat" aria-hidden="true"></i>
                                                        </button>
                                                        
                                                        <span id="adopt_cow_donateBTN"
                                                          class="dnone">
                                                        </span>
                                                        
                                                      </div>
                                                       <button class="top-bottom3 btn btn-light px-4 fw-bold d-none " type="button"
                                                        onclick="return validateDonate1();">Donate Now</button> 
                                                      <button class=" btn-light  btn fw-bold w-100" type="button" id="previewBTN"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions">Donate Now</button>

                                                    </div>




                                                </div>
                                                <small class="text-black-50 w-100 text-center d-block my-3 mt-0 mt-lg-3">All Cards &amp; Net banking
                                                  Accepted</small>
                                                <img src="assets/images/payments-icons.png" class="mx-auto d-block mt-2" alt=""/>
                                              </div>
                                            </div>



                                          </div>

                                        </div>

                                        <div class="col-lg-12 d-none d-lg-block" id="qrcode-panel">
                                          <div class="card direct-bank rounded-4 border-0  mt-4 shadow-sm">

                                            <div class="card-body">
                                              <div class="row g-3">
                                                <div class="col-12">
                                                  <h4 class="fs-6 fw-semibold text-primary mb-0">You can pay via QR code / UPI /
                                                    Bank Transfer</h4>
                                                </div>
                                                <div class="col-lg-6">
                                                  <h5 class="fs-14 fw-semibold">QR Code / UPI</h5>
                                                  <div class="innerbx">
                                                    <div class="overlay"></div>
                                                    <img src="assets/images/qrcode-pay.png" alt=""/>
                                                      <a href="donation-form73e9.html?meth=0" class="btn btn-primary btn-sm">Generate
                                                        QR</a>
                                                  </div>

                                                </div>

                                                <div class="col-lg-6">
                                                  <h5 class="fs-14 fw-semibold ">Bank Account Number </h5>
                                                  <div class="innerbx p-2">
                                                    <div class="overlay"></div>
                                                    <img src="new-assets/images/Axis_Bank_logo.svg" class="opacity-25" alt=""/>
                                                      <a href="donation-form2f21.html?meth=1" class="btn btn-primary btn-sm">Bank
                                                        Account</a>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                              </div>
                                <Testimonials />
                                <Footer />
                              </div>
                                )
}

                                export default EventPage
