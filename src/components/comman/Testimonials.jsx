import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonials = () => {
  return (
    <div>
      <section>

<div class="col-lg-12 text-center">
  <h5 class="fw-900 with-bullets mt-5"> Testimonials</h5>
</div>
<div class="col-lg-12 px-0">
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
  <div class="container position-relative sliarrow">
    <div class="swiper test">
      <div class="swiper-wrapper">
      
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="administrator/assets/uploads/testimonial/Picture7.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Shri Yogi Adityanath <br /> (CM, Uttar Pradesh)                            </h4>
              <div class="paragraph-text">
                <p>I was overwhelmed to see the continuous service of thousands of destitute cows in Shree Krishnayan Gaushala. This gaushala can be ideal in the field of Gauseva.</p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="administrator/assets/uploads/testimonial/dhami.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Shri Pushkar Singh Dhami  <br /> (Chief Minister, Uttrakhand)                            </h4>
              <div class="paragraph-text">
                <p>I am really proud to have Shree Krishnayan Desi Gauraksha in Uttrakhand which has exhibited an exemplary in the field of service to destitute cows and bulls.
                </p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="administrator/assets/uploads/testimonial/Governor_Lt_General_Gurmit_Singh_Retd1.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Shri Gurmit Singh <br /> (Governor of Uttarakhand)                            </h4>
              <div class="paragraph-text">
                <p class="MsoNormal"><span lang="EN-US">Shree Krishnayan Gaushala is doing an incredible
                  job in ensuring that our Gaumata/Desi Gauvansh are well-fed and cared for.
                  Their work is truly inspiring, and I am honored to support their cause.<o:p></o:p></span></p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="administrator/assets/uploads/testimonial/pjimage_37_1629161123.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Shri Kailash Kher <br /> (Music Composer & Playback Singer)                            </h4>
              <div class="paragraph-text">
                <p>I am impressed by initiatives taken by Shree Krishnayan Gaushala which give these disregarded gauvansh a happy second life
                </p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="administrator/assets/uploads/testimonial/Picture11.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Shri Trivendra Singh Rawat (Ex-Chief Minister of Uttrakhand, Present MP)                            </h4>
              <div class="paragraph-text">
                <p>Shree Krishnayan Desi Gauraksha is really a Golok dham. I am experiencing inner peace here.</p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="../docs.krishnayangauraksha.org/testimonial/10_04_2024_00_14_14manoj.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Shree Mohan Yadav  (CM, Madhya Pradesh)                            </h4>
              <div class="paragraph-text">
                <p>Grateful to Shree Krishnayan Gaushala. Witnessing the dedication to cow service here is deeply inspiring. A truly great initiative to serve Gaumata and uphold Sanatan Dharma.</p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="profile-image">
              <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src="administrator/assets/uploads/testimonial/Picture14.jpg"
                alt="" class="lazyload" />
            </div>
            <div class="test-content ">
              <h4 class="fs-6 mb-4">
                Sri Ravindra Kumar Ray (Ex-MP)                            </h4>
              <div class="paragraph-text">
                <p>The gausewaks and saints are fortunate that they have got the opportunity to serve gaumata. </p>                            </div>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        </SwiperSlide>

    </div>
    <div class="swiper-slider-prev testswiper-prev"> <i class="fa-regular fa-arrow-left"></i> </div>
    <div class="swiper-slider-next testswiper-next"> <i class="fa-regular fa-arrow-right"></i> </div>
    <div class="swiper-testswiper-bullet swiper-pagination"></div>
  </div>
</div>
<div className="swiper-button-next swiper-slider-next"></div>
  <div className="swiper-button-prev swiper-slider-prev"></div>
</Swiper>
</div>
</section>
    </div>
  )
}

export default Testimonials
