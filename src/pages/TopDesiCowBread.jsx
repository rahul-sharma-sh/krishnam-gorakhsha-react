import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const TopDesiCowBread = () => {
  
  return (
    <div>
      <Header />
      <div className="col-lg-12 my-lg-5 my-4">
        <div className="container">
          <div className="row gy-5 g-lg-5">
            <div className="col-lg-12">
              <div className="row align-items-center gy-4">
                <div className="col-lg-5">
                  <div className="meta">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <a href="blog-2.html" className="fs-5">Blogs</a>
                      <i className="fa-regular fs-5 fa-minus opacity-50"></i>
                    </div>
                    <h1 className="mb-3 display-5 fw-bold">
                      Indigenous Cow Breeds in India
                    </h1>
                    <i className="date mb-3 small">
                      <i className="fa-regular fa-calendar"></i>{' '}
                      <span className="text-black-50">Uploaded on </span> 06 Jun 2023
                    </i>
                  </div>
                </div>

                <div className="col-lg-7">
                  <img
                    src="https://docs.krishnayangauraksha.org/blog/09_08_2024_14_07_33_Indigenous Cow Breeds in India.JPG"
                    alt="Indigenous Cow Breeds in India"
                    className="w-100 rounded-4"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <h2>Indigenous Cow Breeds in India</h2>
              <p>
                Cow rearing is practiced all over the world. Farmers are earning good income by doing cow farming. 
                The demand for not only Cow Milk but also for Paneer, Curd, Mawa, and even Cow Dung and Cow Urine 
                (Gaumutra) is increasing in the market.
              </p>
              <h3>Which is the indigenous breed of cow?</h3>
              <p>
                Indian Desi cows have a distinctive hump, which makes them easy to identify. They are usually white, 
                with black hair on their hooves and tail. Their hump is fully developed, and they can weigh between 300 
                to 400 kg.
              </p>
              <h3>Characteristics of Desi Cow</h3>
              <p>
                Apart from milk production, indigenous cows are useful for farming. They have strong immunity, 
                making them resistant to diseases. These cows adapt well to different climatic conditions and 
                continue producing milk consistently.
              </p>
              <h3>Top Indigenous Cow Breeds in India</h3>
              <ul>
                <li>Sahiwal Cow</li>
                <li>Gir Cow</li>
                <li>Tharparkar Cow</li>
                <li>Red Sindhi Cow</li>
                <li>Gavlav Cow</li>
              </ul>
              <h3>Which is the oldest cow breed in India?</h3>
              <p>
                The Kankrej cow breed, found mainly in the dry regions of Gujarat and Rajasthan, is considered 
                one of the oldest breeds. It has strong features like a well-developed hump and sharp horns.
              </p>
              <h3>Some Facts About Indian Cow Breeds</h3>
              <ul>
                <li><b>Smallest Cow Breed:</b> Punganur Dwarf Cow (Andhra Pradesh)</li>
                <li><b>Best Cow Breed:</b> Gir Cow (Gujarat)</li>
                <li><b>Largest Cow Breed:</b> Gaur Cow</li>
                <li><b>Highest Milk Yielding Cow:</b> Red Sindhi Cow</li>
                <li><b>Most Expensive Cow:</b> Nellore (Ongole) Breed</li>
              </ul>

              <h2 className="text-center mt-4">Frequently Asked Questions</h2>
              <div>
                <h4>Which is the indigenous breed of cow?</h4>
                <p>
                  Some of the most famous indigenous breeds include Sahiwal, Gir, Tharparkar, and Red Sindhi.
                </p>

                <h4>What is the indigenous breed of Gir cow?</h4>
                <p>
                  Gir cows are excellent milk producers and are found mainly in Gujarat’s Saurashtra region.
                </p>

                <h4>Which is the oldest cow breed in India?</h4>
                <p>
                  The Kankrej breed is considered the oldest, with historical references dating back to the 
                  Indus Valley Civilization.
                </p>
              </div>
            </div>

            <div className="post-share-option">
              <i className="text-italic small mb-2 mt-4 d-block">
                Share this post with your friends
              </i>
              <ul className="social-icons2">
                <li>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.krishnayangauraksha.org/indian-top-desi-cow-bread.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.krishnayangauraksha.org/indian-top-desi-cow-bread.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopDesiCowBread;
