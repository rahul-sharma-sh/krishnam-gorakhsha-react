import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const FaqPage = () => {
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
      <div class="container">
        <div class="row justify-content-center gy-4">
          <div class="col-lg-12">
            <h1 class="fs-2 fw-bold text-center my-4">Frequently Asked <span class="text-primary"> Questions</span> </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb2 mx-auto justify-content-center text-dark fw-normal mb-4">
                <li class="breadcrumb-item"><a href="index.html" class="fw-normal">Home</a></li>
                <li class="breadcrumb-item active fw-normal" aria-current="page">Latest News & Updates</li>
              </ol>
            </nav>
          </div>
          <div class="col-lg-3">
            <select name="" id="faq-select" class="form-select form-select-lg fs-6 bg-warning border-2 border-primary">
              <option value="faq-all">All Category</option>
              <option value="faq-about-gaushala">About Gaushala</option>
              <option value="faq-domestic">Domestic Donation</option>
              <option value="faq-internationl">International Donation</option>
              <option value="faq-monthly-donation">Monthly Donation</option>
              <option value="faq-application">Krishnayan Application</option>
              <option value="faq-adopt-a-cow">Adopt a Cow</option>
              <option value="faq-birthday">Birthday / Anniversary / Shradh Approcahing </option>
              <option value="faq-yagya-pooja">Yagya and Pooja</option>
              <option value="faq-gaudan">Gaudan</option>
              <option value="faq-shradh">Shradh</option>
            </select>
          </div>
          <div class="col-lg-9">
            <input type="text" id="filter" class="form-control form-control-lg bg-warning  w-md-50 mx-auto border-2 border-primary fs-6" placeholder="Search here your query..." onkeyup="filterfaq(this)" />
          </div>
          <div class="col-lg-12">
            <div id="all_qu" class="d-flex flex-column gap-3">
              <div id="faq-about-gaushala"
                class="position-relative mh-50px selectoption showfaq-about-gaushala showfaq-all">
                <div class="faqheading" data-bs-toggle="collapse" data-bs-target="#heading1"
                  aria-expanded="false">About Gaushala<span class="faqarrow"></span> </div>
                <div id="heading1" class="accordion-collapse collapse">
                  <div class="accordion" id="accordionsecond">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#c11" aria-expanded="true">What is the main Aim (Mission) of Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti? </button>
                      </h2>
                      <div id="c11" class="accordion-collapse collapse"
                        data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> <strong> Shree Krishnayan Desi Gauraksha Avam
                          Golokdham Sewa Samiti’s</strong> main aim is to protect indigenous
                          (Desi) Gauvansh, including cows and bulls. It is a non-profit organization
                          with a noble aim to provide shelter & medical facility to stray cows and
                          improve the health of infirm, unproductive, diseased and abandoned Gauvansh.
                          <br />
                          <br />
                          <strong>For more information, <a href="index.html">Homepage</a></strong>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c12" aria-expanded="false">Where is this Gaushala (Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti) located?</button>
                      </h2>
                      <div id="c12" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> <strong> Shree Krishnayan Desi
                          Gauraksha
                          Avam Golokdham Sewa
                          Samiti’s</strong> is presently located in various locations in many
                          States likes Uttrakhand, Uttar Pradesh, Madhya Pradesh, Gujarat, Jharkhand.
                          Shree Krishnayan Desi gauraksha is continuously increasing its reach in
                          various locations. <br />
                          <br />
                          <strong>For more information, <a href="about-us.html">About Us
                          </a></strong>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c13" aria-expanded="false">At present, how many cows are being protected and served in the Gaushala?
                        </button>
                      </h2>
                      <div id="c13" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> <strong> Shree Krishnayan Desi
                          Gauraksha
                          Avam Golokdham Sewa
                          Samiti’s</strong> is sheltering more than 21000+ Gauvansh (both cows &
                          bulls) in various shelters in many States in India. We started with just 11
                          cows in the year 2010 in Haridwar, and presently we shelter and feed more
                          than 21000 cows & Bulls in various locations all put together. This number
                          is ever-increasing as stray Desi Cows & Bulls mostly deserted by their owner
                          are brought to our Gaurakshashala every day. <br />
                          <br />
                          <strong>For more information, <a href="about-us.html">About Us
                          </a></strong>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c14" aria-expanded="false">Do Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti keep all Gauvansh lifelong in shelter? </button>
                      </h2>
                      <div id="c14" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> Yes,<strong> Shree Krishnayan Desi
                          Gauraksha Avam Golokdham Sewa
                          Samiti</strong> keep them lifelong. Any gauvansh which comes
                          to
                          our gaushala is sheltered lifelong and fully taken care, no
                          matter
                          in what condition they are. </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c15" aria-expanded="false">Do Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti protect injured and disabled gauvansh? </button>
                      </h2>
                      <div id="c15" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> Yes, <strong> Shree Krishnayan Desi Gauraksha Avam
                          Golokdham Sewa Samiti </strong>protect injured and disabled gauvansh.
                          Shree Krishnayan Desi Gaurakshashala's team of doctors & paid Gausewaks look
                          after them and shelter them lifelong. <br />
                          <br />
                          <strong>For more information <a href="activities.html">Our Activities</a></strong>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c16" aria-expanded="false">What Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti does with All Gauvansh? </button>
                      </h2>
                      <div id="c16" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"><strong>Shree Krishnayan Desi Gauraksha Avam
                          Golokdham Sewa Samiti</strong> is dedicated to protect and shelter our
                          indigenous cows. It was founded with the aim of providing a peaceful life
                          for cows and preventing them from being subjected to cruelty. <br />
                          <br />
                          <strong>For more information, <a href="our-activities.html">Our Activities</a></strong>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c17" aria-expanded="false">Who looks after all Cows and Bulls in Gaushala? </button>
                      </h2>
                      <div id="c17" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body">In<strong> Shree Krishnayan Desi Gauraksha Avam
                          Golokdham Sewa Samiti,</strong> there's a special team of dedicated
                          professionals, including veterinarians and other medical experts, who work
                          tirelessly to provide the best possible care to all Gauvansh, or cows.
                          Additionally, supported by a large team of gausewaks, or cow caretakers, who
                          work around the clock to ensure that the cows receive the food, shelter, and
                          attention they need to thrive. The team of professionals and volunteers work
                          to create a safe and nurturing environment for cows in need. Through their
                          tireless efforts, the Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa
                          Samiti is making a significant impact in promoting the welfare and
                          protection of cows in India. </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c18" aria-expanded="false">Is there's any Facility in-house in Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti?</button>
                      </h2>
                      <div id="c18" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> Yes, in <strong> Shree Krishnayan Desi Gauraksha
                          Avam Golokdham Sewa Samiti </strong>, there are many shelters for
                          Gauvansh. Our shelters have full-fledged in-house facility which includes
                          animal hospital, husk stores, cowsheds etc. In Gaushala, A team of doctors
                          and hundreds of gausewaks works round the clock in gaushala.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c19" aria-expanded="false">Why there's only Desi cows shelters in Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti ? </button>
                      </h2>
                      <div id="c19" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> <strong> Shree Krishnayan Desi
                          Gauraksha
                          Avam Golokdham Sewa
                          Samiti</strong> operates Desi cow & Bulls shelters because
                          these
                          Gauvansh are considered sacred in Hinduism and are an integral
                          part
                          of Indian culture. Additionally, It represents Mother Earth, as
                          it
                          is a source of goodness and its milk nourishes all creatures.
                          Its is
                          the only creature in the world which inhale and exhale oxygen.
                          Gaumata purifies the environment and thus balances the negative
                          effect of current modernisation. Its cow dung and gaumutra cures
                          thousands of diseases. The ghee of desi cow can only used for
                          Yagya
                          and has magical medical benefits. <br />
                          <br />
                          The message given by Shri Krishna is even more relevant today : <br />
                          <br />
                          <i>“Humans need cows more than cows need humans. Cows need to be
                            protected for humans to survive.”</i>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c20" aria-expanded="false">Why should Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti protect Cows? </button>
                      </h2>
                      <div id="c20" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body">
                          <p>Cow is the only animal in the world which breathes in oxygen and exhale
                            out oxygen. That&rsquo;s why it&rsquo;s a heavenly divine creature. Cow
                            dung and gaumutra purifies the soil and thus completely balances the
                            environment.</p>
                          Panchagavya (5 Cow Products): Milk, curd, Gay ghrut (Ghee), gomutra, gomay
                          form a Holy union of panchagavya ayurvedic medicine. when all cow product
                          mixed in different measures and with different other components forms a
                          range of medicines. These medicines have proved to be effective to address a
                          lot of medical problems. They have reportedly cured many chronic ailments
                          and are the only alternatives to modern medical sciences. These medicines do
                          not cost much dent to the pocket as they are made from all cow based
                          products those are easily available<br />
                          <br />
                          <strong> For more information, <a href="benefits-of-cow.html">Benefits Of Cow</a></strong>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c21" aria-expanded="false">What's the difference between desi cow and other breed?</button>
                      </h2>
                      <div id="c21" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> Desi Cows are native breeds of cows
                          that
                          are indigenous to the Indian subcontinent, while other breeds
                          are
                          non-native and have been imported from other countries. Desi
                          cows
                          have a hump on their back, long ears, and a dewlap under their
                          neck.
                          Other breeds do not have these characteristics.<br />
                          <br />
                          Desi cows have a lower milk yield compared to other breeds.
                          However,
                          the milk of Desi cows is considered to be of higher quality,
                          with a
                          higher nutritional value and better taste. Desi cows are
                          considered
                          sacred in Hinduism and are an integral part of Indian culture. <br />
                          <br />
                          Desi cows are native to India and have physical, nutritional,
                          and
                          cultural significance that sets them apart from other breed. <br />
                          <br />
                          <strong>For more information, <a href="benefits-of-cow.html">Benefits Of Cow</a></strong>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c22" aria-expanded="false">How many shelters do we have Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti? </button>
                      </h2>
                      <div id="c22" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> At present, apart from Uttarakhand, we have a
                          Gaushala in Madhya Pradesh, Uttar Pradesh, Jharkhand & Gujarat where
                          thousands of cows are being served.<br />
                          <br />
                          <strong>For more information, <a href="contact-us.html">Contact Us</a></strong>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c23" aria-expanded="false">How Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti protect gauvansh?</button>
                      </h2>
                      <div id="c23" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> Presently more than 21000 destitute
                          cows
                          are living a happy and peaceful life. Such cows are brought to
                          our
                          Gaushala from horrible time in which some are disabled or deeply
                          injured even fighting for their life. All these cows are fed,
                          sheltered, and looked after. Hundreds of gausewaks work round
                          the
                          clock to look after them. Gaushala has a team of expert doctors
                          &
                          professionals who look after these cows. </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c24" aria-expanded="false">Is milk sold in Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti?</button>
                      </h2>
                      <div id="c24" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> No. As these cows are protected by Saints /
                          Tapaswis, Scriptures don’t allow us to sell milk or milk products. That’s
                          why we don't sell milk. Our main objective is to protect and serve
                          indigenous (desi) cows. We do not exploit these cows for milk but distribute
                          it free to saints / tapaswis / Gausewaks / Ashrams / needy / hospital.<br />
                          <br />
                          <strong>For more information, <a href="our-activities.html">Our Activities</a></strong>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c25" aria-expanded="false">What are the main activities of Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti? </button>
                      </h2>
                      <div id="c25" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> Shree Krishnayan Desi Gauraksha Avam
                          Golokdham Sewa Samiti provide shelter, protection, and medical
                          facilities for cows, as well as nutritious fodder and breeding
                          programs. Aalso provide training for farmers on how to care for
                          cows, use cow dung and urine for organic farming, and make
                          products
                          from cow products. It has units for processing cow dung and
                          urine
                          into biofuels and fertilizers, and some generate electricity
                          using
                          biogas plants. In addition to promoting sustainable agriculture,
                          gaushala also organize community meals, cultural events, and
                          yagya
                          to promote the spiritual and cultural significance of cows in
                          Hinduism.<br />
                          <br />
                          <strong> For more information, <a href="our-activities.html">Our Activities</a></strong>


                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c26" aria-expanded="false">Why we organises Yagya in Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti? </button>
                      </h2>
                      <div id="c26" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> As a matter of fact, pure environment
                          and
                          pure ghee of desi cow is needed for the Yagya, which is rarely
                          available nowadays. That's why Gaushala is an ideal place for
                          Yagya.
                          Not only this, milk, ghee, cow urine, cow dung are used to make
                          the
                          yagya fruitful, which pleases all the deities. </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c27" aria-expanded="false">How much fodder is required in the Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti? </button>
                      </h2>
                      <div id="c27" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> In <strong> Shree Krishnayan Desi
                          Gauraksha
                          Avam Golokdham Sewa Samiti </strong>, it require millions
                          Kilogram of fodder every month which includes husk ( wheat
                          straw),
                          Wheat Bran ( Chokkar). Green grass, Mustard Cake, jaggery (Gud),
                          Mineral Mixture etc. </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c28" aria-expanded="false">Is any kind of charge taken for sheltering the gauvansh in Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti?</button>
                      </h2>
                      <div id="c28" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> No charge is taken for serving cows in
                          Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti, but
                          you
                          all are free to donate any amount to Gaushala. <br />
                          <br />
                          <strong><a href="donation-form.html">Donation Form</a></strong>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c29" aria-expanded="false">Is Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti recognized by the Government of India? </button>
                      </h2>
                      <div id="c29" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> <strong>Yes, Shree Krishnayan Desi Gauraksha Avam
                          Golokdham Sewa Samiti recognized and Registered with the State
                          Government of Uttrakhand, Uttar Pradesh & Madhya Pradesh & also with the
                          Government of India. We have received various awards & accolades for our
                          work.</strong> <br />
                          <br />
                          <strong>For more information, <a href="about-us.html">About Us</a></strong>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c30" aria-expanded="false">How will I know that Shree
                          Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti is genuine and not a fraud? </button>
                      </h2>
                      <div id="c30" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body">
                          <ul class="faq-list">
                            <li>Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa
                              Samiti
                              is registered with the Animal Welfare Board of India
                              (Chennai) and with the animal welfare board in various
                              states. </li>
                            <li>You can visit Shree Krishnayan Desi Gauraksha Avam
                              Golokdham
                              Sewa Samiti anytime. </li>
                            <li>Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa
                              Samiti
                              received various awards &amp; accolades for our work.
                              Gaushala recognised and Registered with the State
                              Government
                              of various states. </li>
                            <li>There is quarterly strict audit by both internal &amp;
                              external agencies. </li>
                            <li>You can also online visit Shree Krishnayan Desi
                              Gauraksha
                              Avam Golokdham Sewa Samiti online by registering on the
                              online gaushala visit link on the website. <br /> <a
                                href="index.html">Homepage</a> </li>
                          </ul>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c32" aria-expanded="false">Please tell the address of the official website of Shri Krishnayan Gaushala. </button>
                      </h2>
                      <div id="c32" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> <strong> The official address of our website is :</strong>
                          <a
                            href="index.html">Homepage</a>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c33" aria-expanded="false">What is the easy process to contact Shree Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti? </button>
                      </h2>
                      <div id="c33" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> To contact Shree Krishnayan Desi
                          Gauraksha,
                          you can contact our Head office at this Address, Mobile number
                          and
                          Mail id:<br />
                          Shree Krishnayan Desi Gauraksha Evam Gaulok Dham, Haripur
                          Kalaan,
                          Near Prem Vihar chowk, Haridwar, District-Dehradun
                          (Uttrakhand)<br />
                          <br />
                          <p class="mb-2"><img src="assets/images/faq-email.svg" alt="Email Icon" width="30" /> <a href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a></p>

                          <p class="mb-2"><img src="assets/images/faq-call.svg" width="30" alt="Phone Call Icon" /> <a href="tel:+91 8755955000">+91 8755955000</a></p>
                          <p class="mb-0"><img src="assets/images/faq-whatsapp.svg" width="30" alt="Whatsapp Icon" /> <a
                            href="https://api.whatsapp.com/send?phone=917830241288&amp;text=https://www.krishnayangauraksha.org/%0A%20I%27m%20interested%20to%20know%20more%20about%20this.%20Can%20you%20help?"
                            target="_blank"> +91 8755955000</a></p>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#c34" aria-expanded="false">Please share the process of
                          registration for online Gaushala Visit.</button>
                      </h2>
                      <div id="c34" class="accordion-collapse collapse" data-bs-parent="#accordionsecond">
                        <div class="accordion-body"> For online visit registration of
                          Gaushala,
                          if you visit our website (<a
                            href="index.html">Homepage</a>),
                          then the option of Online Gaushala Visit will be visible on the
                          top
                          right side of the home page. On clicking here, the page of
                          Register
                          for Online Gaushala Visit will open. From here you fill in the
                          requested information and submit it. In this way your Goshala's
                          online visit registration is complete. </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div id="faq-domestic" class="position-relative mh-50px selectoption showfaq-domestic showfaq-all">
                <div class="faqheading" data-bs-toggle="collapse" data-bs-target="#heading2"
                  aria-expanded="false">Domestic Donation <span class="faqarrow"></span> </div>
                <div id="heading2" class="accordion-collapse collapse">
                  <div class="accordion" id="accordionfourth">
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e1" aria-expanded="false">How can we donate to Shree
                          Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti from India? </button>
                      </h2>
                      <div id="e1" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body"> You can donate to the
                          Goshala through both online and offline means. For
                          this, if you visit our website
                          (<a href="index.html">Homepage</a>), you will see
                          the option of Donate on the right side top of the
                          home page. Payment page will open as soon as you
                          click on it. From here you can Donate on a One time
                          or Monthly basis by providing payment information.
                          Here you will get many payment options.<br />
                          <br />
                          Apart from this, on the home page of our Gaushala's
                          website, by clicking on the Menu tab located at the
                          top right side and going to the donation option, you
                          can get various types of donations and related
                          information. Apart from this, you can also contact
                          <a href="%2b91%208755955000.html">+91 8755955000</a>  for donation related information.
                          <ul class="faq-list my-4">
                            <li>You can donate online through your Debit
                              Card / Credit Card / Net banking / UPI / QR
                              code / Wallet from the following Link.
                              <a href="gaugrass.html" target="_blank">Gaugrass</a>
                            </li>
                          </ul>
                          <strong>Receipts will be generated manually through the
                            following options </strong>
                          <ul class="faq-list mt-2">
                            <li>You can send your cheque in favour of 'Shree
                              Krishnayan Desi Gauraksha' and send it to
                              the following address: <br />
                              <p class="bg-warning py-2 px-3 fw-semibold mt-2  rounded-2">Shree Krishnayan Desi Gauraksha Evam Gaulok
                                Dham<br />
                                Haripur Kalaan,<br />
                                Near Prem Vihar chowk,<br />
                                Haridwar,<br />
                                District-Dehradun (Uttrakhand) </p>
                            </li>
                          </ul>

                          <ul class="faq-list">
                            <li>( Only for IMPS, NEFT, RTGS )

                              <p class="bg-warning py-2 px-3 fw-semibold mt-2 mb-1 rounded-2">Shree Krishnayan Desi Gauraksha,<br />
                                YES Bank <br />
                                IFSC- YESB0CMSNOC<br />
                                (4th character is ZERO)<br />
                                A/c Number- GOMATA<br />
                              </p>
                              <p>(Please add your mobile number at the end of the
                                account number for easy identification<br />
                                Example- If your mobile number is 8755955000,
                                then mention the account number as
                                GOMATA8755955000)</p>

                            </li>
                          </ul>

                          <ul class="faq-list">
                            <li>Please use the following UPI ID for
                              transferring money through UPI from
                              Application like Paytm, Gpay etc <p>8755955000@okbizaxis</p></li>
                          </ul>

                          <ul class="faq-list">
                            <li>Paytm / Gpay / PhoenPe number<p>8755955000</p></li>

                          </ul>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e2" aria-expanded="false">My donation is failing,
                          what's the solution? </button>
                      </h2>
                      <div id="e2" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>Failed payments can occur from both the donor's
                            end and the organization's end.<br />
                            A donor often experiences payment failure due to
                            a faulty internet connection, entering incorrect
                            payment details, Insufficient funds or wrong
                            card number, card date or CVC.<br />
                            In case of online failed payment you can
                            directly transfer the amount to our bank account
                            :<br />
                            ( Only for IMPS, NEFT, RTGS )<br />
                            <p class="bg-warning p-2 rounded-2 fw-semibold"> Shree Krishnayan Desi Gauraksha,<br />
                              YES Bank <br />
                              IFSC- YESB0CMSNOC<br />
                              (4th character is ZERO)<br />
                              A/c Number- GOMATA</p>

                            (Please add your mobile number at the end of the
                            account number for easy identification<br />
                            Example- If your mobile number is 8755955000,
                            then mention the account number as
                            GOMATA8755955000) </p>
                          <p>In case of any help or query, You can also call
                            our direct number <a href="%2b91%207830241288.html">+91 7830241288</a>  / <a href="8448987587.html">8448987587</a>  </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e3" aria-expanded="false">My money is deducted, but I
                          haven't received a receipt:</button>
                      </h2>
                      <div id="e3" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>Sometimes, it take a day for the bank to confirm
                            the amount and in some cases the payment fails
                            and money deducted is refunded back to you in a
                            few days.<br />
                            In suck case please fill the following form and
                            we will resolve it at the earliest<br />
                            <a href="feedback-2.html">Feedback</a>
                          </p>


                          <p class="mb-2"><img src="assets/images/faq-email.svg" alt="Email Icon" width="30" /> <a href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a></p>

                          <p class="mb-2"><img src="assets/images/faq-call.svg" width="30" alt="Phone Call Icon" /> <a href="tel:+91 8755955000">+91 8755955000</a> / <a href="tel:7830241288">7830241288</a></p>
                          <p class="mb-0"><img src="assets/images/faq-whatsapp.svg" width="30" alt="Whatsapp Icon" /> <a
                            href="https://api.whatsapp.com/send?phone=917830241288&amp;text=https://www.krishnayangauraksha.org/%0A%20I%27m%20interested%20to%20know%20more%20about%20this.%20Can%20you%20help?"
                            target="_blank"> +91 8755955000</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e4" aria-expanded="false">Can we send cash? </button>
                      </h2>
                      <div id="e4" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>We generally don&rsquo;t accept cash greater than
                            a certain limit. But you can call our direct
                            number <a href="%2b91%207830241288.html">+91 7830241288</a>  / <a href="8448987587.html">8448987587</a>  </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e5" aria-expanded="false">Can we deposit directly in a
                          bank account? </button>
                      </h2>
                      <div id="e5" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>Yes, you can deposit it directly to our bank
                            account and the bank details for the domestic
                            transaction are as follows<br />
                            Shree Krishnayan Desi Gauraksha,<br />
                            YES Bank <br />
                            IFSC- YESB0CMSNOC<br />
                            (4th character is ZERO)<br />
                            A/c Number- GOMATA<br />
                            (Please add your mobile number at the end of the
                            account number for easy identification<br />
                            Example- If your mobile number is 8755955000,
                            then mention the account number as<br />
                            GOMATA8755955000) </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e6" aria-expanded="false">Can we send a cheque ? </button>
                      </h2>
                      <div id="e6" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>You can send your cheque in favour of 'Shree
                            Krishnayan Desi Gauraksha' and send it to the
                            following address </p>
                          <p>Shree Krishnayan Desi Gauraksha Evam Gaulok
                            Dham<br />
                            Haripur Kalaan,<br />
                            Near Prem Vihar chowk,<br />
                            Haridwar,<br />
                            District-Dehradun (Uttrakhand) </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e7" aria-expanded="false">Do you have Paytm, GPay, or
                          Phonepe Number? </button>
                      </h2>
                      <div id="e7" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body"> Yes you can send money from
                          Gpay / PhonePe / Paytm on 8755955000 </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e8" aria-expanded="false">How do we get our receipt? </button>
                      </h2>
                      <div id="e8" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body"> You will get a receipt
                          automatically on your mail and WhatsApp after you
                          make the donation </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e9" aria-expanded="false">I haven't received my receipt
                          / Lost my receipt / regenerate receipt? </button>
                      </h2>
                      <div id="e9" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>You can directly download your 80G receipt from
                            KRISHNAYAN apps from Google Play Store or Apple
                            Store. </p>
                          <p>Krishnayan Application Link<br />
                            Google Play Store- <a
                              href="https://bit.ly/2KR8VoE">Playstore</a><br />
                            Apple Store- <a
                              href="https://apple.co/3ryJwAk">Apple Store</a><br />
                            Website link- <a
                              href="https://gwala.krishnayangauraksha.org/">Login Page</a>
                          </p>
                          <p>In suck case please fill the following form and
                            we will resolve it at the earliest<br />
                            <p class="mb-2"><img src="assets/images/faq-email.svg" width="24" alt="Email Icon" />
                              <a href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a></p>
                            <p class="mb-2"><img src="assets/images/faq-call.svg" width="24" alt="Phone Icon" /> <a href="tel:+91 8755955000">+91 8755955000</a>  / <a href="tel:7830241288">7830241288</a> </p>
                            <p class="mb-0"><img src="assets/images/faq-whatsapp.svg" width="24" alt="Whatsapp Icon" /> <a href="https://bit.ly/K_FAQ" target="_blank"> bit.ly/K_FAQ</a></p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e10" aria-expanded="false">How can I get a consolidated
                          receipt for my donation? </button>
                      </h2>
                      <div id="e10" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>You can directly download your consolidated
                            receipt from KRISHNAYAN application which is
                            available in Google Play Store or Apple Store.
                            You have to go to<br />
                            Krishnayan Application&lt; My Donation &lt;
                            Consolidated Receipt </p>
                          <p>Google Play Store-. <a href="https://bit.ly/2KR8VoE">Playstore</a> <br />
                            Apple Store- <a href="https://apple.co/3ryJwAk">Apple Store</a> </p>
                          Website link- <a href="https://gwala.krishnayangauraksha.org/">Login Page</a>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e11" aria-expanded="false">How to download FORM 10BE
                          receipt for income tax</button>
                      </h2>
                      <div id="e11" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body"> You will immediately get it after the donation on
                          your mail & WhatsApp. You can also download it from krishnayan application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e12" aria-expanded="false">How do I get a confirmation that my amount has reached Gaushala?</button>
                      </h2>
                      <div id="e12" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body"> Yes you can send money from
                          Gpay / PhonePe / Paytm on 8755955000 </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e13" aria-expanded="false">I had donated to Gaushala but not received related video, please help? </button>
                      </h2>
                      <div id="e13" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>You can contact Krishnayan to resolve this issue. </p>
                          <ul>
                            <li>Fill the following form and we will resolve
                              it at the earliest </li>
                          </ul>
                          <p> <a href="feedback-2.html">Feedback</a>
                          </p>
                          <p class="mb-2"><img src="assets/images/faq-email.svg" width="24" alt="Email Icon" />
                            <a href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a></p>
                          <p class="mb-2"><img src="assets/images/faq-call.svg" width="24" alt="Phone Icon" /> <a href="tel:+91 8755955000">+91 8755955000</a>  / <a href="tel:7830241288">7830241288</a> </p>
                          <p class="mb-2"><img src="assets/images/faq-whatsapp.svg" width="24" alt="Whatsapp Icon" /> <a href="https://bit.ly/K_FAQ" target="_blank"> bit.ly/K_FAQ</a></p>

                          <p>care@krishnayangauraksha.org or contact on +91
                            8755955000. Your issue will be resolved with
                            priority. </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#e14" aria-expanded="false">Will I get tax related
                          benefits on the financial support given to Shri Krishna Nayan Gaushala? </button>
                      </h2>
                      <div id="e14" class="accordion-collapse collapse" data-bs-parent="#accordionfourth">
                        <div class="accordion-body">
                          <p>The entirety of your donation is a tax-deductible
                            according to the full extent of the law and you
                            will be issued a receipt for that amount. 50 %
                            of the donated amount will be reduced from your
                            taxable income. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="faq-international"
                class="position-relative mh-50px selectoption showfaq-internationl showfaq-all">
                <div class="faqheading" data-bs-toggle="collapse" data-bs-target="#heading3"
                  aria-expanded="false">International
                  Donation <span class="faqarrow"></span> </div>
                <div id="heading3" class="accordion-collapse collapse">
                  <div class="accordion" id="accordionfive">
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f1" aria-expanded="false">How can we donate Shree
                          Krishnayan Desi Gauraksha Avam Golokdham Sewa Samiti from Abroad (in foreign currency other than Indian currency)?</button>
                      </h2>
                      <div id="f1" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body">
                          <p>You can contribute financially to the cowshed
                            through online medium. For this visit our
                            website (https://www.krishnayangauraksha.org/).
                            Donate option will appear on the right side top
                            of the home page. Payment page will open as soon
                            as you click on it. From here you can donate on
                            a one time or monthly basis by providing payment
                            information. Here you will get many payment
                            options. </p>
                          <p>You can also donate to Shree Krishnayan Desi
                            Gauraksha Avam Golokdham Sewa Samiti online
                            through your Debit Card / Credit Card / PayPal
                            from the following Link:<br />
                            <a href="gaugrass.html"
                              target="_blank">Gaugrass</a><br />
                            On the Payment Page choose your currency from
                            top (if you don&rsquo;t find your currency than
                            please choose US DOLLAR (USD). <br />
                            You can also send money through Western Union /
                            WISE or other service provider to the following
                            account :
                          </p>
                          <p>Swami Ishwar Dass<br />
                            State Bank of India<br />
                            Account No : 39995747778<br />
                            Swift Code : SBININBB104<br />
                            IFSC Code&nbsp;:&nbsp;SBIN0000691 </p>
                          <p>In case of any help or query, You can also call
                            our direct number +91 9760202306 / 7060103000 </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f2" aria-expanded="false">Do we get any tax exemption by donating in any other country</button>
                      </h2>
                      <div id="f2" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body"> Presently, We are
                          registered with tax authorities in India only </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f3" aria-expanded="false">My donation is failing, what's the solution?</button>
                      </h2>
                      <div id="f3" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body">
                          <p>Failed payments can occur from both the donor's
                            end and the organization's end. A donor often
                            experiences payment failure due to a faulty
                            internet connection, entering incorrect payment
                            details, Insufficient funds or wrong card
                            number, card date or CVC.<br />
                            In case of online failed payment you can do the
                            following </p>
                          <ul class="faq-list">
                            <li>You can also send money through Western
                              Union / WISE or other service provider to
                              the following account : <br />
                              <p class="bg-warning p-2 rounded-2 mt-2">Swami Ishwar Dass<br />
                                State Bank of India<br />
                                Account No : 39995747778<br />
                                Swift Code : SBININBB104<br />
                                IFSC Code&nbsp;:&nbsp;SBIN0000691 </p>
                            </li>
                          </ul>


                          <ul class="faq-list">
                            <li>Directly transfer the amount to our bank
                              account: ( Only from foreign banks located
                              outside India and in foreign currency only) <br />
                              <p class="bg-warning p-2 rounded-2 mt-2">Shree Krishnayan Desi Gauraksha,<br />
                                State Bank of India<br />
                                Account No : 39995747778<br />
                                Swift Code : SBININBB104<br />
                                IFSC Code&nbsp;:&nbsp;SBIN0000691 </p>
                            </li>
                          </ul>

                          <p class="fw-semibold">In case of any help or query, You can also call
                            our direct number <a href="%2b91%209760202306.html">+91 9760202306</a>  / <a href="7060103000.html">7060103000</a>  </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f4" aria-expanded="false">My money is deducted, but I
                          haven't received a receipt:</button>
                      </h2>
                      <div id="f4" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body">
                          <p>Sometimes, it take a day for the bank to confirm
                            the amount and in some cases the payment fails
                            and money deducted is refunded back to you in a
                            few days.<br />
                            In suck case please fill the following form and
                            we will resolve it at the earliest<br />

                            <p class="mb-2"><img src="assets/images/faq-email.svg" alt="Email Icon" width="30" /> <a href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a></p>

                            <p class="mb-2"><img src="assets/images/faq-call.svg" width="30" alt="Phone Call Icon" /> <a href="tel:+91 8755955000">+91 8755955000</a> / <a href="tel:7830241288">7830241288</a></p>
                            <p class="mb-0"><img src="assets/images/faq-whatsapp.svg" width="30" alt="Whatsapp Icon" /> <a
                              href="http://bit.ly/K_FAQ"
                              target="_blank"> bit.ly/K_FAQ</a></p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f5" aria-expanded="false">Can we send cash? </button>
                      </h2>
                      <div id="f5" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body"> We don’t accept cash from
                          abroad. But you can call our direct number <a href="tel:+91
                                            9760202306">+91 9760202306</a>  / <a href="tel:7060103000">7060103000</a>  </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f6" aria-expanded="false">Can we deposit directly in a
                          bank account?</button>
                      </h2>
                      <div id="f6" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body">
                          <p>Yes, you can directly transfer the amount to our
                            bank account: ( Only from foreign banks located
                            outside India and in foreign currency only)<br />
                            Shree Krishnayan Desi Gauraksha,<br />
                            State Bank of India<br />
                            Account No : 39995747778<br />
                            Swift Code : SBININBB104<br />
                            IFSC Code&nbsp;:&nbsp;SBIN0000691 </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#f7" aria-expanded="false">Can we send a cheque ? </button>
                      </h2>
                      <div id="f7" class="accordion-collapse collapse" data-bs-parent="#accordionfive">
                        <div class="accordion-body">
                          <p>You can send your cheque in favour of 'Shree
                            Krishnayan Desi Gauraksha' and send it to the
                            following address </p>
                          <p>Shree Krishnayan Desi Gauraksha Evam Gaulok
                            Dham<br />
                            Haripur Kalan,<br />
                            Near Prem Vihar chowk,<br />
                            Haridwar,<br />
                            District-Dehradun (Uttrakhand)<br />
                            India <br />
                            Pin 249410</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="faq-monthly-donation"
                class="position-relative mh-50px selectoption showfaq-monthly-donation showfaq-all">
                <div class="faqheading" data-bs-toggle="collapse" data-bs-target="#heading4"
                  aria-expanded="false">Monthly
                  Donation (Recurring Donation) <span class="faqarrow"></span></div>
                <div id="heading4" class="accordion-collapse collapse">
                  <div class="accordion" id="accordionsixth">
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g11" aria-expanded="false"> What is monthly donation? </button>
                      </h2>
                      <div id="g11" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body"> It is a recurring donation. Your donation
                          amount is automatically
                          deducted every month on a stipulated date and credited to
                          Krishnayan’s account. You don’t have to worry about initiating a
                          transaction every month as it automatically deducts it. </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g12" aria-expanded="false">How can I make regular monthly donation? </button>
                      </h2>
                      <div id="g12" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>You can can make regular monthly donation either from Krishnayan
                            application or from krishnayan website, the link of which are given
                            below </p>
                          <p>Website: <a href="donation-form.html">Donation Form</a>
                            ( select monthly donation from top) </p>
                          <p>Krishnayan Application&lt; Online Donation &lt; Monthly Donation </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g13" aria-expanded="false">What are the different modes for monthly donation? </button>
                      </h2>
                      <div id="g13" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>There are two modes </p>
                          <ul class="faq-list">
                            <li>ACH- Here the monthly donation is created in Krishnayan Application
                              only. Here you can authorise it only through net banking and debit
                              card. In this method, bank charges are the least or minimal.</li>
                            <li>Other Mode- here you can create it from website or krishnayan
                              application. You can create it from UPI / Net Banking / Credit and
                              Debit cards. In this method, charges are bit higher. </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g14" aria-expanded="false">My monthly donation is failing? </button>
                      </h2>
                      <div id="g14" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>Failed monthly donations can occur from both the donor's end and the
                            organization's end.<br />
                            A donor often experiences payment failure due to a faulty internet
                            connection, entering incorrect payment details, Insufficient funds or
                            wrong card number, card date or CVC.<br />
                            In case of online failed monthly donation, you can follow these steps:
                          </p>
                          <ul class="faq-list">
                            <li>Reverify the transaction link sent on your WhatsApp and email to
                              start the monthly donation</li>
                            <li>Reinitiate a new monthly donation form the following link
                              https://www.krishnayangauraksha.org/donation-form.html</li>
                            <li>Raise a complaint so that we can get to you and resolve the issue <a
                              href="feedback-2.html">Feedback</a>
                            </li>
                            <li>write a mail to <a
                              href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a>
                            </li>
                            <li>Call / WhatsApp +91 8755955000 / 7830241288 or initiate a WhatsApp
                              Chat <a href="https://bit.ly/K_FAQ" target="_blank">bit.ly/K_FAQ</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g15" aria-expanded="false">My Monthly Donation is not
                          deducting- </button>
                      </h2>
                      <div id="g15" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>The following may be the reasons</p>
                          <ul class="faq-list">
                            <li>Your monthly donation may not be active</li>
                            <li>Some of your instalments may be paused</li>
                            <li>There may be a problem with your bank</li>
                            <li>Your a last few instalments may have being returned unpaid
                              by your bank </li>
                            <li>Technical Reasons</li>
                          </ul>
                          <p>When such happens than you can</p>
                          <ul class="faq-list">
                            <li>write a mail to <a
                              href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a>
                            </li>
                            <li>Raise Complaint <a
                              href="feedback-2.html">Feedback</a>
                            </li>
                            <li>Call helpline <a href="tel:+91 8755955000">+91 8755955000</a>  / <a href="7830241288.html">7830241288</a> </li>
                            <li>Initiate a WhatsApp Chat <a href="https://bit.ly/K_FAQ" target="_blank">Click Here</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g16" aria-expanded="false">On what date does it deduct every month? </button>
                      </h2>
                      <div id="g16" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>For ACH it is 10th, 20th or 26th of every month (depends on what
                            you select at the time of creation). For other mode it is
                            deducted on the day you created it. </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g17" aria-expanded="false">Do I get a Updates/Prior
                          notification? </button>
                      </h2>
                      <div id="g17" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body"> Yes, you are intimated on
                          email/SMS/WhatsApp prior to deduction of
                          the monthly donation. Your bank also sends you a prior notification </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g18" aria-expanded="false">How do I get the receipt for my donation? </button>
                      </h2>
                      <div id="g18" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body"> The receipt is sent on your Email / SMS /
                          WhatsApp after the
                          decution. </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g19" aria-expanded="false">Can I pause my donation for certain days? If yes, then How? </button>
                      </h2>
                      <div id="g19" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>Yes, you can pause your monthly donation. </p>
                          <ul>
                            <li>For ACH- Please write a mail on <a
                              href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a>
                              or intitate it directicly from krishnayan application.</li>
                          </ul>
                          <p>Krishnayan Application &lt; My Donation &lt; Monthly Donation</p>
                          <ul>
                            <li>For Other Modes.- Please write a mail on <a
                              href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a>
                              or initiate it directly from krishnayan application.</li>
                          </ul>
                          <p>Krishnayan Application &lt; My Donation &lt; Monthly Donation<br />
                            Or you can directly pause it from the link sent through SMS by
                            your bank every month prior to deduction. </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g20" aria-expanded="false">How do I permanently stop monthly donations </button>
                      </h2>
                      <div id="g20" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <ul>
                            <li>For ACH- Please write a mail on <a
                              href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a>
                              or initiate it directly from krishnayan application.</li>
                          </ul>
                          <p>Krishnayan Application &lt; My Donation &lt; Monthly Donation</p>
                          <ul>
                            <li>For Other Modes.- Please write a mail on <a
                              href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a>
                              or initiate it directly from krishnayan application.</li>
                          </ul>
                          <p>Krishnayan Application &lt; My Donation &lt; Monthly Donation<br />
                            Or you can directly stop it from the link sent through SMS by
                            your bank every month prior to deduction. </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#g21"
                          aria-expanded="false">Monthly lump sum amount is being deducted from my bank account for Gauseva, what should I do to increase that amount? </button>
                      </h2>
                      <div id="g21" class="accordion-collapse collapse" data-bs-parent="#accordionsixth">
                        <div class="accordion-body">
                          <p>You can start a new monthly donation of the additional amount
                            from the following link </p>
                          <a href="donation-form.html">Donation Form</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-lg-12">
              <div class="nodatafound dnone">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h2 class="mt-5 mb-4">Can’t find your answer? </h2>
                    <ul class="d-flex gap-3 text-black fs-5 align-items-center w-100 justify-content-center mb-5 mt-2">
                      <li>Call us at- <a href="tel:+918755955000">+91 8755955000</a></li>
                      <li>Email- <a href="mailto:care@krishnayangauraksha.org">care@krishnayangauraksha.org</a></li>
                      <li><a href="https://api.whatsapp.com/send?phone=917830241288&amp;text=https://www.krishnayangauraksha.org/%0A%20I%27m%20interested%20to%20know%20more%20about%20this.%20Can%20you%20help?" target="_blank"><img src="assets/donation_page/images/social/whatsapp.svg" width="30" alt="" /> +91 8755955000</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>



      <Footer />
    </div>


  )
}

export default FaqPage
