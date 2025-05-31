import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Testimonials from '../components/comman/Testimonials';
const HomePage = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const impactData = [
    { count: "21k +", text: "Gauvansh Sheltered" },
    { count: "65k +", text: "Gauvansh Medicated" },
    { count: "31k +", text: "Gauvansh Rescued" },
    { count: "500k +", text: "Food Distributed" },
    { count: "5", text: "Number of States" },
    { count: "11", text: "Number of Gaushala" },
  ];

  const accreditationData = [
    {
      img: "new-assets/images/authorised/80g.html",
      text: "Registered under section 12AA of the Income Tax Act",
    },
    {
      img: "new-assets/images/authorised/animal.html",
      text: "Animal Welfare Board of India, Chennai",
    },
    {
      img: "new-assets/images/authorised/gausewa.html",
      text: "Uttar Pradesh Gau Sewa Ayog",
    },
    {
      img: "new-assets/images/authorised/uttrakhand.html",
      text: "Uttarakhand Animal Development Board",
    },
    {
      img: "new-assets/images/authorised/mp.html",
      text: "Madhya Pradesh Gausewa Ayog",
    },
    {
      img: "new-assets/images/authorised/incometax.html",
      text: "Registered under section 80G of the Income Tax Act",
    },
    {
      img: "new-assets/images/authorised/fcra.html",
      text: "FCRA under Ministry of Home Affairs",
    },
    {
      img: "new-assets/images/authorised/niti.html",
      text: "Niti Ayog, Government of India",
    },
  ];

  const sewaItems = [
  {
    img: "https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_18_22medical.webp",
    alt: "Medical Help",
    title: "Medical Help",
    desc: "Once a cow grows old and stops giving milk, their owner disowns them because they are of no use to them.",
    link: "medical-help-2.html",
    buttonText: "Add Items To Donate",
  },
  {
    img: "https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_20_16birthday.webp",
    alt: "Celebrate Birthday/ Anniv/ Event",
    title: "Celebrate Birthday/ Anniv/ Event",
    desc: "We at Krishnayan can help you by making your auspicious day bestowed with abundant blessings and turn your contributions...",
    link: "vedic-celebration-2.html",
    buttonText: "Celebrate Now",
  },
  {
    img: "https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_26_06yagya.webp",
    alt: "Yagya / Pooja / Food Distribution",
    title: "Yagya / Pooja / Food Distribution",
    desc: "Yagya is performed to invoke Gods for their blessings and to seek a peaceful and healthy life.",
    link: "event.html",
    buttonText: "Click For Do Pooja",
  },
  {
    img: "https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_24_30mother-cow.webp",
    alt: "Service to mother cow",
    title: "Service to mother cow",
    desc: "Shree Krishnayan Desi Gauraksha shelters destitute cows & bulls which are rescued from various locations...",
    link: "/godaan",
    buttonText: "Add Items For Donate",
  },
  {
    img: "https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_22_08child-food.webp",
    alt: "Food For Under Privileged",
    title: "Food For Under Privileged",
    desc: "Life is really tough without food. With your support, Krishnayan spreads love and happiness through its free food distribution initiative.",
    link: "/food-distribution-2",
    buttonText: "Food Distribution",
  },
  {
    img: "https://docs.krishnayangauraksha.org/post_thumbnail/16_09_2024_14_27_45shradh.webp",
    alt:"Shradh for Departed Souls",
    title: "Shradh for Departed Souls",
    desc: "Shradh is a ritual to pay homage to one's deceased family members or ancestors. You can choose..",
    link: "/shradh",                                
    buttonText: "Add Items for Donate",
  }
];


  useEffect(() => {
    setTimeout(() => {
      const nextButton = document.querySelector(".accreconext");
      const prevButton = document.querySelector(".accrecoprev");

      if (nextButton && prevButton) {
        nextButton.classList.remove("swiper-button-disabled");
        prevButton.classList.remove("swiper-button-disabled");
      }
    }, 500); // Ensure buttons are active after DOM load
  }, []);

  return (
    <div>
      <Header />
      <header className="w-100">
        <div className="container-fluid">

          <div className="row gy-3">
            <div className="col-lg-12 d-none d-lg-block">
              <div className="header-2">
                <div className="header-panel">
                  <a href="/">
                    <img
                      src="/new-assets/images/logo1.webp"
                      height="108"
                      width="108"
                      alt="Krishnayan Logo"
                    />
                  </a>
                </div>
                <div className="header-panel text-center">
                  <img
                    src="/new-assets/images/logo2.webp"
                    height="108"
                    width="108"
                    alt="Krishnayan Brand Logo"
                    className="mx-auto"
                  />
                </div>
                <div className="header-panel">
                  <div className="d-flex align-items-center justify-content-end gap-4 me-md-3">
                    <div
                      data-bs-target="#online-gaushala-visit"
                      data-bs-toggle="modal"
                      className="text-white burst-12"
                    >
                      <span>Online Gaushala Visit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="heroslider"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-0">
                  <a href="#">
                    <img
                      alt="Free Milk Distribution"
                      src="https://docs.krishnayangauraksha.org/post_thumbnail/23_06_2024_11_27_56milk.webp"
                      className="w-100 d-none d-md-block"
                    />
                    <img
                      alt="Free Milk Distribution"
                      src="https://docs.krishnayangauraksha.org/mobile_image/mob06_04_2024_14_35_30milk-mobile.jpg"
                      className="w-100 d-md-none"
                    />
                  </a>
                  <div className="herocontent">
                    <h2>Free Milk Distribution</h2>
                    <p>
                      We give away a limited amount of milk from our gaushala to saints, gausewaks,
                      ashrams, and hospitals in Haridwar/Rishikesh, supporting spiritual, animal
                      welfare, and charitable causes without commercial sales, promoting sharing and
                      compassion in our community.
                    </p>
                    <a href="#" className="btn-dark btn mt-4">
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-0">
                  <a href="gaugrass.html">
                    <img
                      alt="Stray Gauvansh Feeding Program"
                      src="https://docs.krishnayangauraksha.org/post_thumbnail/16_05_2024_10_50_39fodder2.webp"
                      className="w-100 d-none d-md-block"
                    />
                    <img
                      alt="Stray Gauvansh Feeding Program"
                      src="https://docs.krishnayangauraksha.org/mobile_image/mob16_05_2024_11_01_30fooder-mobile.webp"
                      className="w-100 d-md-none"
                    />
                  </a>
                  <div className="herocontent">
                    <h2>Stray Gauvansh Feeding Program</h2>
                    <p>
                      We feed all the stray gauvansh (cows and bulls) sheltered in our gaushala with
                      proper green fodder, husk, jaggery, bran etc. We ensure that our mother cows
                      are happy and satisfied.
                    </p>
                    <a href="gaugrass.html" className="btn-dark btn mt-4">
                      Donate Fodder <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-0">
                  <a href="medical-help-2.html">
                    <img
                      alt="Rescuing & Caring for Gauvansh"
                      src="https://docs.krishnayangauraksha.org/post_thumbnail/16_05_2024_11_11_09rescue.webp"
                      className="w-100 d-none d-md-block"
                    />
                    <img
                      alt="Rescuing & Caring for Gauvansh"
                      src="https://docs.krishnayangauraksha.org/mobile_image/mob16_05_2024_11_37_51rescue-mobile.webp"
                      className="w-100 d-md-none"
                    />
                  </a>
                  <div className="herocontent">
                    <h2>Rescuing & Caring for Gauvansh</h2>
                    <p>
                      We rescue gauvansh with the help of various machineries from critical
                      condition and shelter them in our gaushala. We provide them with proper food,
                      care, and medical facilities.
                    </p>
                    <a href="medical-help-2.html" className="btn-dark btn mt-4">
                      Help Now <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-0">
                  <a href="food-distribution-2.html">
                    <img
                      alt="Food Distribution Initiatives"
                      src="https://docs.krishnayangauraksha.org/post_thumbnail/16_05_2024_11_40_51child.webp"
                      className="w-100 d-none d-md-block"
                    />
                    <img
                      alt="Food Distribution Initiatives"
                      src="https://docs.krishnayangauraksha.org/mobile_image/mob16_05_2024_11_43_08cm.webp"
                      className="w-100 d-md-none"
                    />
                  </a>
                  <div className="herocontent">
                    <h2>Food Distribution Initiatives</h2>
                    <p>
                      We distribute healthy food to needy people, children in need. We also provide
                      them with other necessities required for their daily needs.
                    </p>
                    <a href="food-distribution-2.html" className="btn-dark btn mt-4">
                      Donate Food <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          {/* <div className="swiper-button-next heronext"></div>
          <div className="swiper-button-prev heroprev"></div> */}
        </div>
      </div>
    </div>

      <section>
        <marquee class="marqueecss" behavior="" direction="" loop="infinite"> <ul><li>Become A Volunteer, <a href="volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li><li>Become A Volunteer, <a href="/volunteer-experience">Click here</a></li></ul> </marquee>
      </section>

      <section class="section-spacing py-lg-5">
        <div class="container-fluid ">
          <div class="row align-items-center justify-content-center gy-4  gy-lg-5">

            <div class="col-lg-5 text-center text-lg-start">
              <h2 class="with-bullets fw-900 mb-3 d-lg-none">Know Us</h2>
              <div class="introvideo videoButton d-none d-lg-block" data-video-id="ijoyg3L5kFk" role="button">
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  data-src="https://img.youtube.com/vi/ijoyg3L5kFk/maxresdefault.jpg" width="614" height="345"
                  class="w-100 videothumb lazyload" alt="About Krishnayan Video Thumbnail" />
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  data-src="https://www.krishnayangauraksha.org/new-assets/images/play-icon.svg" width="70" height="70"
                  class="play-icon lazyload" alt="Play Icon" />
              </div>

              <div class="introvideo videoButton d-lg-none" data-video-id="t0OPGYA5AX0" role="button">
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  data-src="https://img.youtube.com/vi/t0OPGYA5AX0/maxresdefault.jpg" width="614" height="345"
                  class="w-100 videothumb lazyload" alt="About Krishnayan Video Thumbnail" />
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  data-src="https://www.krishnayangauraksha.org/new-assets/images/play-icon.svg" width="70" height="70"
                  class="play-icon lazyload" alt="Play Icon" />
              </div>

            </div>
            <div class="col-lg-5 text-center text-lg-start ps-lg-5">
              <h2 class="with-bullets fw-900 d-none d-lg-inline-block">Know Us</h2>
              <p class="mt-lg-3  text-m-15 fw-medium text-justify">Shree Krishnayan Desi Gauraksha Evam Gaulok Dham Sewa Samiti’ is one
                of the largest Gaurakshashala of Desi cows in India. We protect, feed & shelter ailing, starving, destitute and
                stray Desi Cows & Bulls, the majority of which are abandoned by their owners or saved from
                butchers. Most of these Gauvansh are milk barren. These cows are brought to our Gaushala from
                tough conditions. All these cows are fed, sheltered, and looked after by hundreds of Gausewaks
                who work round the clock.</p>
              <a href="/about-us">Read More <i class="fa-regular fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>
      </section>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={3}      // Show 3 slides per view
        spaceBetween={30}      // Space between slides
        centeredSlides={true} // Disable centeredSlides for better loop behavior
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={{
          nextEl: '.swiper-slider-next',
          prevEl: '.swiper-slider-prev',
        }}
        loop={true}  // Enable loop functionality
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="card newcard3">
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-lg-12">
                  <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    data-src="new-assets/images/pages/home/protection.html"
                    className="img-fluid lazyload"
                    alt="Protection"
                    style={{ width: '100%', height: 'auto' }} // Resize the image here
                  />
                </div>
                <div className="col-lg-12">
                  <div className="desktopreadmore">
                    <h4>Protection</h4>
                    <p>
                      As on date 21,000+ stray/ destitute Desi Indian Cows / bulls and
                      her progenies are being sheltered in our Gaurakshashala which
                      are brought through various channels such as Police, Government,
                      NGOs, Farmers etc. We give these gauvansh a second life. We
                      shelter, feed and take care of them completely. We have in-house
                      medical facility for them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="card newcard3">
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-lg-12">
                  <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    data-src="new-assets/images/pages/home/shelter.html"
                    className="img-fluid lazyload"
                    alt="Shelter"
                    style={{ width: '100%', height: 'auto' }} // Resize the image here
                  />
                </div>
                <div className="col-lg-12">
                  <div className="desktopreadmore">
                    <h4>Shelter</h4>
                    <p>
                      We have a very big adequate facility to provide good shelters to
                      these rescued gauvansh. We continue building cow sheds as the
                      number of cows being protected is increasing day by day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="card newcard3">
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-lg-12">
                  <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    data-src="new-assets/images/pages/home/medical.html"
                    className="img-fluid lazyload"
                    alt="Medical"
                    style={{ width: '100%', height: 'auto' }} // Resize the image here
                  />
                </div>
                <div className="col-lg-12">
                  <div className="desktopreadmore">
                    <h4>Medical Facility</h4>
                    <p>
                      We have doctors available 24/7, providing comprehensive in-house
                      medical facilities. We maintain ample stocks of necessary
                      medicine and vaccinations. Our services extend to both essential
                      medical assistance and support for accidental cows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card newcard3">
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-lg-12">
                  <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    data-src="new-assets/images/pages/home/medical.html"
                    className="img-fluid lazyload"
                    alt="Medical"
                    style={{ width: '100%', height: 'auto' }} // Resize the image here
                  />
                </div>
                <div className="col-lg-12">
                  <div className="desktopreadmore">
                    <h4>Medical Facility</h4>
                    <p>
                      We have doctors available 24/7, providing comprehensive in-house
                      medical facilities. We maintain ample stocks of necessary
                      medicine and vaccinations. Our services extend to both essential
                      medical assistance and support for accidental cows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}

        {/* Navigation buttons */}
        <div className="swiper-button-next swiper-slider-next"></div>
        <div className="swiper-button-prev swiper-slider-prev"></div>
      </Swiper>


      <section className="section-spacing pb-lg-5">
        <div className="container">
          <div className="row gy-3 gy-lg-5 justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="fw-900 with-bullets">Our Achievements</h2>
              <p className="opacity-75 mt-1 text-m-15 mb-0 add-moverlay">
                We, at Shree Krishnayan take immense pride in our accomplishments, which reflect our unwavering dedication to the welfare of Gauvansh (cows) and the broader community...
              </p>
            </div>

            <div className="col-12 px-0 position-relative arrow-out">
              <Swiper
                modules={[Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                loop={true}
                pagination={{
                  el: '.swiper-pagination',
                  type: 'fraction',
                }}
                navigation={{
                  prevEl: '.swiper-slider-prev',
                  nextEl: '.swiper-slider-next',
                }}
              >
                <SwiperSlide>
                  <div className="card rounded-4 double-border">
                    <div className="card-body">
                      <div className="row gy-3">
                        <div className="col-lg-12">
                          <img
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/ac-2.html"
                            className="rounded-2 w-100 lazyload"
                            alt="Humanitarian Assistance and Community Support"
                            width="380"
                            height="264"
                          />
                        </div>
                        <div className="col-lg-12">
                          <div class="desktopreadmore px-0">
                            <h3 className="fs-5 fw-bold text-primary border-top-half-primary">
                              Humanitarian Assistance and Community
                              Support</h3>
                            <p className="text-m-15 mb-0 ">In addition to our efforts for cow
                              welfare, we have also been greatly recognized
                              for our
                              contributions to human welfare. During ecological disasters, our
                              organization
                              has provided
                              vital humanitarian assistance which has earned appreciation from
                              various State
                              Governments
                              for our swift and effective response at times of crisis.
                              Furthermore, we have
                              consistently
                              catered to the needs of the poor and needy by offering them
                              vital support and
                              assistance.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card rounded-4 double-border">
                    <div className="card-body">
                      <div className="row gy-3">
                        <div className="col-lg-12">
                          <img
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/ac-3.html"
                            className="rounded-2 w-100 lazyload"
                            alt="Media Coverage and Public Recognition"
                            width="380"
                            height="264"
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className="desktopreadmore px-0">
                            <h3 className="fs-5 text-primary poppins-bold border-top-half-primary">
                              Media Coverage and Public Recognition</h3>
                            <p className="text-m-15 mb-0 ">Our activities have not gone unnoticed by
                              the public or the <a
                                href="photogallery/10.html"> media</a>.
                              Local
                              newspapers, news
                              channels & other print media have covered our initiatives,
                              shedding light on the
                              positive
                              impact we are making in our communities. This recognition serves
                              as a testament
                              to the
                              significance of our work and inspires us to continue striving
                              for excellence in
                              all our
                              endeavours.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card rounded-4 double-border">
                    <div className="card-body">
                      <div className="row gy-3">
                        <div className="col-lg-12">
                          <img
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/ac-4.html"
                            className="rounded-2 w-100 lazyload"
                            alt="Expanding Impact Across India"
                            width="380"
                            height="264"
                          />
                        </div>
                        <div className="col-lg-12">
                          <div class="desktopreadmore px-0">
                            <h3 class="fs-5 text-primary poppins-bold border-top-half-primary">
                              Expanding Impact Across India</h3>
                            <p class="text-m-15 ">What began as a humble initiative in
                              Uttarakhand has grown into a pan-Indian
                              force for good.
                              From the serene landscapes of Uttarakhand to the vibrant regions
                              of Uttar
                              Pradesh, Madhya
                              Pradesh, Jharkhand , Gujarat etc we have expanded our reach,
                              touching the lives
                              of countless
                              individuals and Gauvansh across the country.</p>
                            <p>In summary, our achievements stand as a testament to our
                              unwavering commitment to
                              the welfare
                              of Gauvansh and our broader community. Through dedication,
                              compassion, and a
                              steadfast
                              commitment to our values, we continue to make a positive impact,
                              enriching the
                              lives of both
                              humans and Gauvansh alike.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card rounded-4 double-border">
                    <div className="card-body">
                      <div className="row gy-3">
                        <div className="col-lg-12">
                          <img
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/bio-gas.html"
                            className="rounded-2 w-100 lazyload"
                            alt="Environmental Protection Achievements"
                            width="380"
                            height="264"
                          />
                        </div>
                        <div className="col-lg-12">
                          <h3 className="fs-5 fw-bold text-primary border-top-half-primary">
                            Environmental Protection Achievements
                          </h3>
                          <p className="text-m-15 mb-0">
                            We have successfully reduced our carbon footprint through the implementation of renewable energy solutions...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card rounded-4 double-border">
                    <div className="card-body">
                      <div className="row gy-3">
                        <div className="col-lg-12">
                          <img
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/goals.html"
                            className="rounded-2 w-100 lazyload"
                            alt="Aligned with Global Goals"
                            width="380"
                            height="264"
                          />
                        </div>
                        <div className="col-lg-12">
                          <h3 className="fs-5 text-primary poppins-bold border-top-half-primary">
                            Aligned with Global Goals
                          </h3>
                          <p className="text-m-15 mb-0">
                            As proud contributors to the United Nations Sustainable Development Goals, we actively support 16 out of the 17 Goals...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card rounded-4 double-border">
                    <div className="card-body">
                      <div className="row gy-3">
                        <div className="col-lg-12">
                          <img
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/bio-gas.html"
                            className="rounded-2 w-100 lazyload"
                            alt="Environmental Protection Achievements"
                            width="380"
                            height="264"
                          />
                        </div>
                        <div className="col-lg-12">
                          <h3 className="fs-5 fw-bold text-primary border-top-half-primary">
                            Environmental Protection Achievements
                          </h3>
                          <p className="text-m-15 mb-0">
                            We have successfully reduced our carbon footprint through the implementation of renewable energy solutions...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>

              {/* Pagination */}
              <div className="swiper-pagination"></div>

              {/* Navigation Arrows */}
              <div className="swiper-slider-prev achiveprev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="swiper-slider-next achivenext">
                <i className="fa-regular fa-arrow-right"></i>
              </div>

            </div>
          </div>
        </div>
      </section>





      <section className="bg-primary-5">
      <div className="container impactparent">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="impactarrows">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3} // Show 3 slides at a time
                spaceBetween={20} // Space between slides
                loop={true} // Infinite loop
                navigation={{
                  nextEl: ".impactnext",
                  prevEl: ".impactprev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
              >
                {impactData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="impact-card">
                      <div className="circle-layer">
                        <span className="counter">{item.count}</span>
                      </div>
                      <h5>{item.text}</h5>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              {/* <div className="swiper-slider-prev achiveprev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="swiper-slider-next achivenext">
                <i className="fa-regular fa-arrow-right"></i>
              </div> */}
            </div>
          </div>
          <div className="col-lg-3 px-0">
            <div className="savegauvansh">
              <h6 className="fs-5 fw-bold border-top-half-white">
                Our Goal is to <span className="d-lg-block"> Save Gauvansh</span>
              </h6>
              <a href="/volunteer-experience">
                Become Volunteer <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-primary-5 mt-lg-0 pb-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h3 className="mb-3 fw-900 with-bullets">Accreditations & Recognitions</h3>
            <p className="opacity-75 mt-1 text-m-15 mb-0 add-moverlay">
              We are registered with the Animal Welfare Board of India (Chennai) and various state animal welfare boards.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="accreco mb-lg-5">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                navigation={{
                  nextEl: ".accreconext",
                  prevEl: ".accrecoprev",
                }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {accreditationData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="accrediation-card">
                      <img src={item.img} alt={item.text} width="100" height="100" loading="lazy" />
                      <span>{item.text}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="swiper-slider-prev accrecoprev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="swiper-slider-next accreconext">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing text-center">
      <h2 className="fw-900 with-bullets">Book Your Sewa</h2>
      <p className="mb-4 mb-lg-5 px-lg-5 px-2">
        Spreading kindness through gaudaan, food distribution, pooja, and many more.
      </p>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".sewaprev", nextEl: ".sewanext" }}
        grabCursor={true}
        slidesPerView={3}      // Show 3 slides per view
        spaceBetween={30}      // Space between slides
        centeredSlides={true} // Disable centeredSlides for better loop behavior
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
       
        loop={true}  
        className="mySwiper"
      
      >
        {sewaItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="card-body">
                <img src={item.img} width="315" height="220" alt={item.alt} className="lazyload" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.link} className="btn btn-primary w-100 fw-medium py-2 rounded-pill">
                  {item.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev sewaprev"></div>
        <div className="swiper-button-next sewanext"></div>
      </Swiper>

      
    </section>

      <section class="section-spacing text-center sewasliderbg">

        <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload incomtx"
          data-src="https://www.krishnayangauraksha.org/new-assets/images/income.webp" width="251" height="112"
          alt="Income Tax Icon" />
        <h2 class="fw-900 with-bullets">Adopt A Cow</h2>
        <p class=" mb-5 px-lg-5">Select your mother cow / calf/ bull and adopt them & interact with it.</p>

        <div class="swiper cow-slider">
          <div class="swiper-wrapper ">
          <Swiper
                modules={[Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                loop={true}
                pagination={{
                  el: '.swiper-pagination',
                  type: 'fraction',
                }}
                navigation={{
                  prevEl: '.swiper-slider-prev',
                  nextEl: '.swiper-slider-next',
                }}
              >
            <SwiperSlide>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1515205875_04_10_2024_07_58_57_PM_1_528.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>23-Sep-2019</span></li>
                    <li><span> Age </span> <span>5 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1677389601_05_10_2024_12_17_51_PM_1_562.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>23-Sep-2019</span></li>
                    <li><span> Age </span> <span>5 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
             <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1752616924_05_10_2024_12_16_12_PM_1_472.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-Feb-2024</span></li>
                    <li><span> Age </span> <span>8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1867475351_05_10_2024_12_20_13_PM_1_568.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>23-Sep-2019</span></li>
                    <li><span> Age </span> <span>5 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/135427586_04_10_2024_07_55_42_PM_1_554.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Sep-2017</span></li>
                    <li><span> Age </span> <span>7 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/108012663_04_10_2024_07_57_29_PM_1_540.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>16-Sep-2020</span></li>
                    <li><span> Age </span> <span>4 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/396203540_04_10_2024_06_00_58_PM_1_453.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>29-Nov-2023</span></li>
                    <li><span> Age </span> <span>11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/908273752_05_10_2024_12_20_44_PM_1_532.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Sep-2018</span></li>
                    <li><span> Age </span> <span>6 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1336496288_05_10_2024_12_19_14_PM_1_589.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>23-Sep-2019</span></li>
                    <li><span> Age </span> <span>5 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/209185807_05_10_2024_12_29_37_PM_1_478.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>06-Nov-2023</span></li>
                    <li><span> Age </span> <span>11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1956475057_04_10_2024_06_52_08_PM_1_531.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Sep-2020</span></li>
                    <li><span> Age </span> <span>4 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/123122634_04_10_2024_07_56_58_PM_1_524(1).jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>14-Sep-2017</span></li>
                    <li><span> Age </span> <span>7 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1410707787_05_10_2024_12_17_18_PM_1_494.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>07-Jun-2023</span></li>
                    <li><span> Age </span> <span>1 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1633038920_10_10_2024_08_13_37_PM_1_538.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Oct-2018</span></li>
                    <li><span> Age </span> <span>6 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1508388188_10_10_2024_08_14_11_PM_1_556.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>11-Oct-2018</span></li>
                    <li><span> Age </span> <span>6 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2049689134_10_10_2024_08_15_52_PM_1_518.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>18-Aug-2020</span></li>
                    <li><span> Age </span> <span>4 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/972402090_10_10_2024_08_15_22_PM_1_519.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>10-Jul-2020</span></li>
                    <li><span> Age </span> <span>5 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1148730246_11_10_2024_03_06_29_PM_1_593.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>11-Jul-2017</span></li>
                    <li><span> Age </span> <span>8 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/301044065_11_10_2024_03_04_34_PM_1_586.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>11-Jul-2017</span></li>
                    <li><span> Age </span> <span>7 year 3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/891996443_11_10_2024_03_08_23_PM_1_533.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>19-Apr-2017</span></li>
                    <li><span> Age </span> <span>7 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1698765999_11_10_2024_03_07_34_PM_1_569.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>23-Apr-2024</span></li>
                    <li><span> Age </span> <span>6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/827914452_17_10_2024_08_43_42_PM_1_514.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Sep-2023</span></li>
                    <li><span> Age </span> <span>1 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1676331554_17_10_2024_08_40_15_PM_1_596.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>12-Sep-2023</span></li>
                    <li><span> Age </span> <span>1 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1702025039_17_10_2024_08_44_29_PM_1_594.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>09-Sep-2020</span></li>
                    <li><span> Age </span> <span>4 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1190929565_17_10_2024_08_37_06_PM_1_523.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>25-Sep-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/368336624_17_10_2024_08_36_08_PM_1_591.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>02-Oct-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1542550044_17_10_2024_08_38_01_PM_1_516.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>08-Mar-2023</span></li>
                    <li><span> Age </span> <span>1 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/729787547_17_10_2024_08_41_29_PM_1_595.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>17-Jul-2024</span></li>
                    <li><span> Age </span> <span>3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/526416309_17_10_2024_08_44_57_PM_1_600.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>09-Sep-2020</span></li>
                    <li><span> Age </span> <span>4 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/856718800_17_10_2024_08_42_39_PM_1_561.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>07-Mar-2023</span></li>
                    <li><span> Age </span> <span>1 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/713172242_04_11_2024_01_41_24_PM_1_627.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Aug-2024</span></li>
                    <li><span> Age </span> <span>3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/730223204_04_11_2024_01_36_49_PM_1_616.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>20-Oct-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1628145165_04_11_2024_01_39_15_PM_1_625.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>20-Oct-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/143200445_04_11_2024_02_42_18_PM_1_661.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>25-Oct-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1195939201_04_11_2024_02_38_00_PM_1_643.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Oct-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1371189163_04_11_2024_02_41_44_PM_1_667.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>25-Oct-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1663270149_04_11_2024_02_44_04_PM_1_691.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Oct-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/984921378_04_11_2024_06_45_06_PM_1_10297.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>6 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1199547548_05_11_2024_04_59_00_PM_1_645.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2017</span></li>
                    <li><span> Age </span> <span>7 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/249656138_05_11_2024_04_59_40_PM_1_665.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2017</span></li>
                    <li><span> Age </span> <span>7 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/994507984_05_11_2024_05_00_25_PM_1_670.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2019</span></li>
                    <li><span> Age </span> <span>5 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1416165344_10_11_2024_06_28_47_PM_1_639.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jul-2018</span></li>
                    <li><span> Age </span> <span>6 year 5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1436275083_10_11_2024_06_14_04_PM_1_655.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jun-2024</span></li>
                    <li><span> Age </span> <span>5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1727891669_10_11_2024_06_12_39_PM_1_676.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jun-2024</span></li>
                    <li><span> Age </span> <span>5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1552240122_10_11_2024_06_16_16_PM_1_695.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Apr-2024</span></li>
                    <li><span> Age </span> <span>7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1579010066_10_11_2024_06_18_04_PM_1_631.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Apr-2024</span></li>
                    <li><span> Age </span> <span>7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/640711067_10_11_2024_06_29_31_PM_1_644.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jul-2017</span></li>
                    <li><span> Age </span> <span>7 year 5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/95378303_10_11_2024_06_19_51_PM_1_615.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jul-2024</span></li>
                    <li><span> Age </span> <span>4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/681402831_10_11_2024_06_31_31_PM_1_666.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jul-2017</span></li>
                    <li><span> Age </span> <span>7 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/444311775_10_11_2024_06_30_26_PM_1_642.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jul-2021</span></li>
                    <li><span> Age </span> <span>3 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/530465775_12_11_2024_11_44_45_AM_1_657.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Bull</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>7 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/326183110_12_11_2024_01_18_32_PM_1_630.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2021</span></li>
                    <li><span> Age </span> <span>4 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/42369271_12_11_2024_01_22_46_PM_1_654.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>7 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/274438855_12_11_2024_01_19_31_PM_1_677.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>7 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1022981591_12_11_2024_01_17_36_PM_1_660.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Bull</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>6 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/580747855_12_11_2024_11_47_16_AM_1_633.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2019</span></li>
                    <li><span> Age </span> <span>5 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/135608886_12_11_2024_01_16_21_PM_1_687.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>6 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1278654114_12_11_2024_01_24_01_PM_1_672.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2126672461_12_11_2024_01_24_24_PM_1_620.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1969541397_16_11_2024_08_21_56_PM_1_530.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jul-2023</span></li>
                    <li><span> Age </span> <span>1 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1833013070_17_11_2024_06_36_13_PM_1_499.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>25-Mar-2024</span></li>
                    <li><span> Age </span> <span>8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1977729795_17_11_2024_06_33_27_PM_1_636.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>07-Sep-2023</span></li>
                    <li><span> Age </span> <span>1 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/325369114_17_11_2024_06_31_56_PM_1_632.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>15-Nov-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1664764065_17_11_2024_06_55_35_PM_1_296.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>12-Jul-2023</span></li>
                    <li><span> Age </span> <span>1 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1220683058_17_11_2024_06_50_59_PM_1_271.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Sep-2023</span></li>
                    <li><span> Age </span> <span>1 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1309537307_17_11_2024_06_53_03_PM_1_635.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>03-Jul-2024</span></li>
                    <li><span> Age </span> <span>4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1668378392_17_11_2024_06_57_50_PM_1_253.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>02-Jul-2024</span></li>
                    <li><span> Age </span> <span>4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/585760217_17_11_2024_06_53_50_PM_1_604.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>11-Jul-2023</span></li>
                    <li><span> Age </span> <span>1 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/275949032_29_11_2024_08_35_41_PM_1_710.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>28-Sep-2023</span></li>
                    <li><span> Age </span> <span>1 year 3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/341766180_29_11_2024_08_30_56_PM_1_705.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>06-Nov-2024</span></li>
                    <li><span> Age </span> <span>2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/977177980_29_11_2024_08_31_56_PM_1_706.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>18-Nov-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2010810866_29_11_2024_08_58_27_PM_1_727.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>28-Feb-2024</span></li>
                    <li><span> Age </span> <span>9 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2005146238_29_11_2024_08_34_56_PM_1_709.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Nov-2024</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/427255568_29_11_2024_08_30_03_PM_1_704.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>22-May-2024</span></li>
                    <li><span> Age </span> <span>6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/190462613_04_12_2024_11_17_03_AM_1_718.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Apr-2023</span></li>
                    <li><span> Age </span> <span>1 year 8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1120273823_04_12_2024_11_08_05_AM_1_726.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>06-Nov-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1570174280_04_12_2024_11_12_39_AM_1_722.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>15-Nov-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1852085454_04_12_2024_11_15_27_AM_1_720.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Oct-2023</span></li>
                    <li><span> Age </span> <span>1 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1080323901_07_12_2024_06_54_56_PM_1_759.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>20-Nov-2024</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2052323900_07_12_2024_06_57_55_PM_1_751.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>12-Dec-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1594397842_07_12_2024_06_58_27_PM_1_754.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>12-Dec-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1246709649_12_11_2024_11_40_41_AM_1_613.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>7 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/264908836_12_11_2024_11_40_14_AM_1_678.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2019</span></li>
                    <li><span> Age </span> <span>6 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/446504599_12_11_2024_11_41_10_AM_1_685.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2018</span></li>
                    <li><span> Age </span> <span>7 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1776754901_07_12_2024_06_52_55_PM_1_755.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Apr-2024</span></li>
                    <li><span> Age </span> <span>8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1802912481_07_12_2024_06_55_45_PM_1_757.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>18-Sep-2024</span></li>
                    <li><span> Age </span> <span>3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/688752663_12_03_2024_06_30_22_PM_1_1000274026.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>15-Feb-2017</span></li>
                    <li><span> Age </span> <span>7 year 10 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1858957902_23_03_2024_05_19_50_PM_1_1000278087.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>19-Jan-2024</span></li>
                    <li><span> Age </span> <span>11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1438106888_21_04_2024_12_41_11_PM_1_1000287050.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>09-Jan-2024</span></li>
                    <li><span> Age </span> <span>11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/391709553_16_05_2024_04_09_41_PM_1_248.jpeg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>MEWATI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>11-Jun-2016</span></li>
                    <li><span> Age </span> <span>8 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/860536439_21_12_2023_07_54_21_PM_1_IMG-20231221-WA0005.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Dec-2014</span></li>
                    <li><span> Age </span> <span>10 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1435510999_21_12_2023_08_23_52_PM_1_IMG-20231221-WA0011.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Dec-2020</span></li>
                    <li><span> Age </span> <span>4 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2005682830_23_12_2023_05_35_05_PM_1_IMG-20231223-WA0060.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Ox</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>23-Dec-2021</span></li>
                    <li><span> Age </span> <span>4 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2006363126_10_02_2024_06_59_21_PM_1_146bg.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>06-Feb-2022</span></li>
                    <li><span> Age </span> <span>2 year 10 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/931050122_20_02_2024_10_21_58_AM_1_1000264507.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>15-Feb-2017</span></li>
                    <li><span> Age </span> <span>7 year 10 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1697385349_07_03_2024_07_03_26_PM_1_1000271896.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>07-Mar-2017</span></li>
                    <li><span> Age </span> <span>7 year 9 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/654766259_28_08_2024_06_29_10_PM_1_558.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Aug-2019</span></li>
                    <li><span> Age </span> <span>5 year 4 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1026086896_13_01_2024_02_45_18_PM_1_IMG-20231225-WA0020.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Dec-2023</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1484018766_04_09_2024_04_53_52_PM_1_477.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Bull</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jun-2017</span></li>
                    <li><span> Age </span> <span>8 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1350534959_04_09_2024_05_11_43_PM_1_496.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Bull</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>14-Jun-2016</span></li>
                    <li><span> Age </span> <span>8 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/39317038_29_12_2024_06_23_32_PM_1_629.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Dec-2024</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/277020283_29_12_2024_06_24_18_PM_1_637.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Dec-2024</span></li>
                    <li><span> Age </span> <span></span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/916460842_08_08_2023_02_28_09_PM_10317.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>15-Jul-2019</span></li>
                    <li><span> Age </span> <span>6 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/632549969_05_08_2024_08_53_27_PM_1_381.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Aug-2019</span></li>
                    <li><span> Age </span> <span>6 year 5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/629589885_17_03_2024_08_13_46_AM_1_1000275424.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-May-2017</span></li>
                    <li><span> Age </span> <span>8 year 8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1175073320_05_01_2024_05_09_24_PM_1_IMG_20240101_142359.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Bull</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>05-Jan-2014</span></li>
                    <li><span> Age </span> <span>11 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/672845032_24_02_2024_08_53_03_AM_1_1000268383.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-Feb-2016</span></li>
                    <li><span> Age </span> <span>9 year 11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1446138144_10_02_2024_06_18_55_PM_1_123.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Ox</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-Jun-2022</span></li>
                    <li><span> Age </span> <span>3 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/470188890_08_05_2024_03_09_31_PM_1_222.jpeg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>11-Apr-2024</span></li>
                    <li><span> Age </span> <span>9 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/459825615_08_05_2024_03_15_40_PM_1_230.jpeg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>05-Mar-2024</span></li>
                    <li><span> Age </span> <span>10 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1176552872_09_05_2024_11_12_17_PM_1_295.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>12-Apr-2017</span></li>
                    <li><span> Age </span> <span>8 year 9 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/115415647_15_02_2024_02_21_42_PM_1_10193bg.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>09-Feb-2019</span></li>
                    <li><span> Age </span> <span>6 year 11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/210356372_23_03_2024_03_18_18_PM_1_1000278039.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>07-Mar-2017</span></li>
                    <li><span> Age </span> <span>8 year 10 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/760490610_21_12_2023_08_30_24_PM_1_IMG-20231221-WA0013.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Dec-2020</span></li>
                    <li><span> Age </span> <span>5 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1068884923_29_01_2024_08_02_36_PM_1_10181.jpeg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>29-Jan-2018</span></li>
                    <li><span> Age </span> <span>7 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1009552330_24_04_2024_09_54_17_AM_img_1.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Mar-2017</span></li>
                    <li><span> Age </span> <span>8 year 11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1158461871_13_01_2024_02_57_47_PM_1_IMG-20231225-WA0025.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>20-Dec-2023</span></li>
                    <li><span> Age </span> <span>2 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1376450269_29_01_2024_07_59_48_PM_1_10097.jpeg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>29-Jan-2014</span></li>
                    <li><span> Age </span> <span>11 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/66403200_29_01_2024_08_00_31_PM_1_10109.jpeg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>29-Jan-2016</span></li>
                    <li><span> Age </span> <span>9 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/142360207_04_12_2024_11_18_12_AM_1_717.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>BADRI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Sep-2024</span></li>
                    <li><span> Age </span> <span>5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1860775235_28_08_2024_06_33_11_PM_1_582.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>HARIANA</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Aug-2017</span></li>
                    <li><span> Age </span> <span>8 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/547949786_13_01_2024_11_23_08_AM_1_IMG_20240113_112254.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Jan-2021</span></li>
                    <li><span> Age </span> <span>4 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1825603773_17_03_2024_08_11_49_AM_1_1000275412.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>09-Mar-2020</span></li>
                    <li><span> Age </span> <span>5 year 11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1150447481_10_02_2024_06_29_00_PM_1_170bg.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Ox</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-Jun-2022</span></li>
                    <li><span> Age </span> <span>3 year 8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1501938042_23_03_2024_03_07_51_PM_1_1000278035.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Ox</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>14-Mar-2021</span></li>
                    <li><span> Age </span> <span>4 year 11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1902378868_21_12_2023_08_16_22_PM_1_IMG-20231221-WA0008.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Dec-2014</span></li>
                    <li><span> Age </span> <span>11 year 2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1536133760_10_02_2024_06_55_38_PM_1_171bg.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>GIR</span>
                    </li>
                    <li><span> Date of Birth </span> <span>19-Jan-2016</span></li>
                    <li><span> Age </span> <span>9 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Ox</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Sep-2022</span></li>
                    <li><span> Age </span> <span>3 year 5 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/304571929_20_02_2024_10_13_59_AM_1_1000264493.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>16-Jan-2024</span></li>
                    <li><span> Age </span> <span>1 year 1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/831578684_23_03_2024_03_13_12_PM_1_1000278022.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>22-Mar-2020</span></li>
                    <li><span> Age </span> <span>5 year 11 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1014858635_06_02_2025_02_33_18_PM_1_698.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Dec-2024</span></li>
                    <li><span> Age </span> <span>2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/851547039_06_02_2025_02_34_37_PM_1_728.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Jan-2025</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/811493370_06_02_2025_02_46_27_PM_1_730.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Nov-2024</span></li>
                    <li><span> Age </span> <span>3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2013813814_06_02_2025_02_52_57_PM_1_766.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Female_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Dec-2024</span></li>
                    <li><span> Age </span> <span>2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1997397391_19_10_2023_08_55_01_AM_1000214786.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>26-May-2018</span></li>
                    <li><span> Age </span> <span>7 year 9 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1348127213_19_10_2023_09_23_29_AM_1000214794.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>21-Feb-2022</span></li>
                    <li><span> Age </span> <span>3 year </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1160173441_15_02_2024_02_19_28_PM_1_10069bg.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>SAHIWAL</span>
                    </li>
                    <li><span> Date of Birth </span> <span>09-Aug-2020</span></li>
                    <li><span> Age </span> <span>5 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/188641723_15_02_2024_01_28_16_PM_1_10056bg.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-Jun-2022</span></li>
                    <li><span> Age </span> <span>3 year 8 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1448780632_06_02_2025_03_10_13_PM_1_770.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>24-Dec-2024</span></li>
                    <li><span> Age </span> <span>2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/651024141_28_08_2024_06_22_27_PM_1_511.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Aug-2016</span></li>
                    <li><span> Age </span> <span>9 year 6 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/913189008_20_02_2024_10_17_06_AM_1_1000264498.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Cow</span></li>
                    <li><span> Breed </span>
                      <span>RED SINDHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Jul-2021</span></li>
                    <li><span> Age </span> <span>4 year 7 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/1793320030_24_12_2023_12_18_58_PM_1_IMG-20231223-WA0053.jpg" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>13-Nov-2023</span></li>
                    <li><span> Age </span> <span>2 year 3 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/37939396_20_02_2025_04_10_31_PM_1_601.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>17-Dec-2024</span></li>
                    <li><span> Age </span> <span>2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/982373617_20_02_2025_04_19_03_PM_1_647.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>KANKREJ</span>
                    </li>
                    <li><span> Date of Birth </span> <span>15-Jan-2025</span></li>
                    <li><span> Age </span> <span>1 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="card-body">
                  <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="lazyload"
                    data-src="https://gwala.krishnayangauraksha.org/upload/CowImages/2012974113_20_02_2025_04_21_38_PM_1_697.png" width="380" height="220" alt="Adopt a Cow" />
                  <ul>
                    <li><span> Category </span> <span>Male_calf</span></li>
                    <li><span> Breed </span>
                      <span>RATHI</span>
                    </li>
                    <li><span> Date of Birth </span> <span>01-Dec-2024</span></li>
                    <li><span> Age </span> <span>2 month </span></li>
                  </ul>
                  <a href="adopt-a-cow06d1.html?trig=triggeradoptmodal"
                    class="btn btn-primary w-100 rounded-pill">Adopt A Cow</a>
                </div>
              </div> */}
            
            </Swiper>

            


            <div className="swiper-button-prev sewaprev"></div>
            <div className="swiper-button-next sewanext"></div>
          </div>
          </div>
      </section>

      <section class=" section-spacing position-relative overflow-hidden d-none">
        <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          data-src="https://www.krishnayangauraksha.org/new-assets/images/rangoli.webp" width="600" height="609"
          class="rotatingleft rangleft lazyload" alt="Rangoli Image" />
        <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          data-src="https://www.krishnayangauraksha.org/new-assets/images/rangoli.webp" width="600" height="609"
          class="rotatingright rangleft2 lazyload" alt="Rangoli image" />
        <div class="container">
          <div class="row justify-content-center align-items-center gy-4">
            <div class="col-lg-12 text-center">
              <h2 class="fw-900 with-bullets">Free Astrology</h2>
              <p>Navigate life's cosmic journey with the guidance of the stars.</p>
            </div>

            <div class="col-lg-12">
              <div class="swiper astrologyslider">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/kundali" class="card">
                      <div class="card-body">
                        <span>
                          <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="new-assets/images/dash-astro/kundali.html"
                            alt="Kundali" width="120" height="76" class="lazyload" /></span>
                        <h5>Kundali</h5>
                      </div>
                    </a>
                  </div>

                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/matchmaking" class="card">
                      <div class="card-body">
                        <span> <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/dash-astro/match-making.html"
                          alt="Match Making" width="120" height="75" class="lazyload" /></span>
                        <h5>Match Making</h5>
                      </div>
                    </a>
                  </div>

                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/knowYourBirthTithi" class="card">
                      <div class="card-body">
                        <span> <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/dash-astro/birth-tithi.html"
                          alt="Birth Tithi" width="70" height="95" class="lazyload" /></span>
                        <h5>Birth Tithi</h5>
                      </div>
                    </a>
                  </div>

                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/horoscope" class="card">
                      <div class="card-body">
                        <span> <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/dash-astro/horoscope.html"
                          alt="Horoscope" width="108" height="108" class="lazyload" /></span>
                        <h5>Horoscope</h5>
                      </div>
                    </a>
                  </div>

                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/panchang" class="card">
                      <div class="card-body">
                        <span> <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/dash-astro/panchang.html"
                          alt="Panchang" width="100" height="108" class="lazyload" /></span>
                        <h5>Panchang</h5>
                      </div>
                    </a>
                  </div>

                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/PalmAstrology" class="card">
                      <div class="card-body">
                        <span> <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/dash-astro/palmistry.html"
                          width="120" height="76" alt="Palmistry" class="lazyload" /></span>
                        <h5>Palmistry</h5>
                      </div>
                    </a>
                  </div>

                  <div class="swiper-slide">
                    <a href="https://gwala.krishnayangauraksha.org/Donor/Numerology" class="card">
                      <div class="card-body">
                        <span> <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          data-src="new-assets/images/dash-astro/number.html"
                          alt="Numerology" width="90" height="102" class="lazyload" /></span>
                        <h5>Numerology</h5>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>



            <div class="col-lg-7">
              <a href="https://gwala.krishnayangauraksha.org/Donor/MeetAstrologer"
                class="d-flex align-items-center gap-lg-4 gap-2  text-center text-lg-start justify-content-center flex-wrap">
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  data-src="https://www.krishnayangauraksha.org/new-assets/images/astrology/vedic.webp" width="244"
                  height="248" class="lazyload" alt="Vedic Astrologer Icon" />

                <h2 class="fs-2 poppins-bolder talk-text flex-fill-1 text-m-16 mb-0">
                  Talk With Our <span>Vedic Astrologer</span>
                  <i class="fa-regular ms-1 fa-arrow-up-right"></i>
                </h2>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section class="section-spacing">
    <div class="container">
        <div class="row gy-lg-5 gy-3 align-items-center">
            <div class="col-8">
                <h2 class="fw-900 mb-0">Blogs</h2>
            </div>
            <div class="col-4">
                <div class="d-flex align-items-end h-100 gap-2 justify-content-end">
                    <button class="blogprev btn btn-primary d-flex align-items-center py-3"> <i class="fa fa-arrow-left"></i> </button>
                    <button class="blognext btn btn-primary d-flex align-items-center py-3"> <i class="fa fa-arrow-right"></i></button>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="swiper blogs-slider">
                    <div class="swiper-wrapper">
                    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={3}      // Show 3 slides per view
        spaceBetween={30}      // Space between slides
        centeredSlides={true} // Disable centeredSlides for better loop behavior
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={{
          nextEl: '.blognext',
          prevEl: '.blogprev',
        }}
        loop={true}  // Enable loop functionality
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
                 
                        <div class="swiper-slide">
                            <div class="blog-card">
                            
                                <a href="blog/astrology-at-shree-krishnayan-gaushala.html">
                                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                                         data-src="https://docs.krishnayangauraksha.org/blog/05_08_2024_15_23_46_Astrology - Krishanayan.png"
                                         alt="Astrology at Shree Krishnayan Gaushala" width="419" height="268"
                                         class="w-100 rounded-4 lazyload"/>
                                </a>
                                <a href="astrology-at-shree-krishnayan-gaushala.html" class="text-dark mt-3 d-block mb-0">
                                    <h3>Astrology At Shree Krishnayan Gaushala</h3>
                                </a>
                                <ul class="shdates">
                                    <li><span>26 Jun 2024</span></li>
                                </ul>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                  
                        
                        <div class="swiper-slide">
                            <div class="blog-card">
                                <a href="blog/all-about-vedic-rituals.html">
                                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                         data-src="https://docs.krishnayangauraksha.org/blog/05_06_2024_17_00_40_vedic.webp"
                                         alt="All about Vedic Rituals" width="419" height="268"
                                         class="w-100 rounded-4 lazyload"/>
                                </a>
                                <a href="all-about-vedic-rituals.html" class="text-dark mt-3 d-block mb-0">
                                    <h3>All About Vedic Rituals</h3>
                                </a>
                                <ul class="shdates">
                                    <li><span>05 Jun 2024</span></li>
                                </ul>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                  
                        
                  <div class="swiper-slide">
                      <div class="blog-card">
                          <a href="blog/all-about-vedic-rituals.html">
                              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                   data-src="https://docs.krishnayangauraksha.org/blog/05_06_2024_17_00_40_vedic.webp"
                                   alt="All about Vedic Rituals" width="419" height="268"
                                   class="w-100 rounded-4 lazyload"/>
                          </a>
                          <a href="all-about-vedic-rituals.html" class="text-dark mt-3 d-block mb-0">
                              <h3>All About Vedic Rituals</h3>
                          </a>
                          <ul class="shdates">
                              <li><span>05 Jun 2024</span></li>
                          </ul>
                      </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  
                        
                  <div class="swiper-slide">
                      <div class="blog-card">
                          <a href="blog/all-about-vedic-rituals.html">
                              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                   data-src="https://docs.krishnayangauraksha.org/blog/05_06_2024_17_00_40_vedic.webp"
                                   alt="All about Vedic Rituals" width="419" height="268"
                                   class="w-100 rounded-4 lazyload"/>
                          </a>
                          <a href="all-about-vedic-rituals.html" class="text-dark mt-3 d-block mb-0">
                              <h3>All About Vedic Rituals</h3>
                          </a>
                          <ul class="shdates">
                              <li><span>05 Jun 2024</span></li>
                          </ul>
                      </div>
                  </div>
                  </SwiperSlide>
                        </Swiper>

                    </div>

                
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <div class="col-lg-12 text-center">
                <a href="blog-2.html" class="btn btn-outline-primary">View All</a>
            </div>
        </div>
    </div>
</section>

<Testimonials />



   
    


      <div id="videoModal">
        <span class="close"><i class="fa-regular fa-close"></i></span>
        <div id="videoContainer">

          <iframe id="videoFrame" src="#" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default HomePage
