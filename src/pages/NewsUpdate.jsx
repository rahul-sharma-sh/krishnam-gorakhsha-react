import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Testimonials from '../components/comman/Testimonials'

const NewsUpdate = () => {
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

<div class="col-lg-12 pb-5 mt-1">
  <div class="newsheaderbg">
    <h1 class="fs-2 fw-bold text-center my-4">Latest News and <span class="text-primary">Updates</span> </h1>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb2 mx-auto justify-content-center text-dark">
    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Latest News & Updates</li>
  </ol>
</nav>

  </div>
  <div class="container">
    <div class="row gy-4 gx-2 align-items-center justify-content-between mb-4">
      <div class="col-lg-6">
      <select name="" id="news-select"  class="form-select mxw-250 w-100 form-select-lg fs-6 bg-warning border-2 border-primary">
            <option value="all">Publisher Wise</option>
            <option value="jagran">Jagran</option>
            <option value="dd-news-uttrakhand">DD News Uttrakhand</option>
            <option value="news-world-india">News World India</option>
            <option value="india-biogas-association">India Biogas Association</option>
            <option value="tribune">Tribune</option>
            <option value="shramik-mantr">Shramik mantr</option>
            <option value="chamoli-times">Chamoli Times</option>
            <option value="amar-ujala">Amar Ujala</option>
            <option value="meruraibar">Meruraibar</option>
            <option value="upuk-live">UPUK Live</option>
            <option value="dainik-bhaskar">Dainik Bhaskar</option>
            <option value="dd-india">DD India</option>
          </select>
       
      </div>
      <div class="col-lg-6">
      <input type="text" id="filter" class="form-control mxw-250 w-100 ms-auto form-control-lg bg-warning border-2 border-primary fs-6" onkeyup="filterfaq(this)" placeholder="Search here..."/>
      </div>
    </div>
    <div class="row gy-4" id="all_news">
		
		<div class="col-lg-12 selectoption showall showdainik-bhaskar">
        <div class="card border-0">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4"><a href="assets/images/news/9-june-dainik.jpg" class="single_image"><img src="../docs.krishnayangauraksha.org/images/news/9-june-dainik.jpg" class="img-fluid" alt=""/></a> </div>
              <div class="col-lg-6"><a href="https://epaper.dainikbhaskarup.com/view/2084/09-june-2023/4"
                                        target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">CM visit to hospital managed & run by Krishnayan</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 9 June 2023 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Dainik Bhaskar </li>
                </ul>
                <p> </p>
                <a href="https://epaper.dainikbhaskarup.com/view/2084/09-june-2023/4" target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"><img src="../docs.krishnayangauraksha.org/images/news/publisher/dainik.png" class="img-fluid w-100" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
		
      <div class="col-lg-12 selectoption showall showdainik-bhaskar">
        <div class="card border-0">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4"> <a href="assets/images/news/news10.jpg" class="single_image"><img src="../docs.krishnayangauraksha.org/images/news/news10.jpg" class="img-fluid" alt=""/></a> </div>
              <div class="col-lg-6"> <a href="https://epaper.dainikbhaskarup.com/view/2023/25-may-2023/2"
                                        target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">kailash kher visit to krishnayan</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 25 May 2023 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Dainik Bhaskar </li>
                </ul>
                <p> </p>
                <a href="https://epaper.dainikbhaskarup.com/view/2023/25-may-2023/2" target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"><img src="../docs.krishnayangauraksha.org/images/news/publisher/dainik.png" class="img-fluid w-100" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showdd-india ">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4">
                <iframe width="100%" height="242" src="https://www.youtube.com/embed/06rGxD2CV4s" title="JEEV SEVA MAHA SEVA, SHREE KRISHNAYAN DESI GAURAKSHA, KAILASH KHER FOUNDATION, MAHARAJ, KAILASH KHER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div class="col-lg-6"> <a href="https://www.youtube.com/embed/06rGxD2CV4s"
                                        target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">JEEV SEVA MAHA SEVA, SHREE KRISHNAYAN DESI GAURAKSHA, KAILASH KHER FOUNDATION, MAHARAJ, KAILASH KHER</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 20 March 2023 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Kailasa Entertainment Pvt. Ltd. </li>
                </ul>
                <p> </p>
                <a href="https://www.youtube.com/embed/06rGxD2CV4s"
                                        target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"><img src="../docs.krishnayangauraksha.org/images/news/publisher/kk-logo.png" class="img-fluid w-100" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showdd-india ">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://www.facebook.com/story.php?story_fbid=pfbid037yvUbhFYVixmcezkrB5AEzLFgfhBoMoodctwxFYgyFGZ6BZpzEvqtwTz8gDLqacl&amp;id=100004238880867&amp;sfnsn=wiwspmo&amp;mibextid=UuRLhI"
                                        target="_blank"><img src="../docs.krishnayangauraksha.org/images/news/dd-india.jpg" class="img-fluid rounded-3"
                                            alt="Krishnayan Goshala, where 2200 cows are served"/></a> </div>
              <div class="col-lg-6"> <a href="https://www.facebook.com/story.php?story_fbid=pfbid037yvUbhFYVixmcezkrB5AEzLFgfhBoMoodctwxFYgyFGZ6BZpzEvqtwTz8gDLqacl&amp;id=100004238880867&amp;sfnsn=wiwspmo&amp;mibextid=UuRLhI"
                                        target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Krishnayan bio CNG plant haridwar</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 21 March 2023 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : DD India </li>
                </ul>
                <p>We are grateful to you, Miss Kiran Jha the senior Anchor of DD News, For this wonderful and exclusive coverage of Krishnayan bio CNG plant haridwar </p>
                <a href="https://www.facebook.com/story.php?story_fbid=pfbid037yvUbhFYVixmcezkrB5AEzLFgfhBoMoodctwxFYgyFGZ6BZpzEvqtwTz8gDLqacl&amp;id=100004238880867&amp;sfnsn=wiwspmo&amp;mibextid=UuRLhI"
                                        target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"><img class="img-fluid w-100" src="assets/images/news/publisher/DD_India_logo.jpg" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showjagran ">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://www.jagran.com/uttar-pradesh/bijnor-2200-cows-live-comfortably-in-krishnayan-gaushala-19679873.html"
                                        target="_blank"><img src="../docs.krishnayangauraksha.org/images/news/n1.jpg" class="img-fluid rounded-3"
                                            alt="Krishnayan Goshala, where 2200 cows are served"/></a> </div>
              <div class="col-lg-6"> <a href="https://www.jagran.com/uttar-pradesh/bijnor-2200-cows-live-comfortably-in-krishnayan-gaushala-19679873.html"
                                        target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Krishnayan Goshala, where 2200 cows are served</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 18 Oct 2019 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Jagran </li>
                </ul>
                <p>Thousands of cows of different breeds in the gaushala. Proper arrangements for
                  their food, drink, rest and medicine. Not only this, the life of cows is
                  compatible with human life.</p>
                <a href="https://www.jagran.com/uttar-pradesh/bijnor-2200-cows-live-comfortably-in-krishnayan-gaushala-19679873.html"
                                        target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"><img class="img-fluid w-100" src="assets/images/news/publisher/jagran.png" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showjagran">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://www.jagran.com/uttar-pradesh/bijnor-bijn3-sri-krishnayan-gaushala-inaugurated-new-police-post-in-sabalgarh-21211008.html" target="_blank"><img src="../docs.krishnayangauraksha.org/images/news/n2.jpg" class="img-fluid rounded-3"
                                            alt="Inauguration of Shri Krishnayan police post for cow protection"/></a> </div>
              <div class="col-lg-6"> <a href="https://www.jagran.com/uttar-pradesh/bijnor-bijn3-sri-krishnayan-gaushala-inaugurated-new-police-post-in-sabalgarh-21211008.html" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Inauguration of Shri Krishnayan police post for cow protection</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 27 Dec 2019 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Jagran </li>
                </ul>
                <p>JNN, Bijnor : A new police outpost has been constructed in Shri Krishnayan
                  Gaushala premises in village Sabalgarh on the Uttarakhand border under police
                  station.</p>
                <a href="https://www.jagran.com/uttar-pradesh/bijnor-bijn3-sri-krishnayan-gaushala-inaugurated-new-police-post-in-sabalgarh-21211008.html"
                                        target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"> <img class="img-fluid w-100" src="assets/images/news/publisher/jagran.png" alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showdd-news-uttrakhand">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4">
                <iframe width="100%" height="242" src="https://www.youtube.com/embed/H1HVu5J07fg"
                                        title="CNG Plant Shree Krishnayan Gaushala || DD News Uttarakhand Live Bulletin || Importance of Organic"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
              </div>
              <div class="col-lg-7">
                <h2 class="fs-4 fw-bold newssearch">CNG Plant Shree Krishnayan Gaushala || DD News Uttarakhand Live Bulletin || Importance of Organic</h2>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 29 Nov 2021 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : DD News Uttarakhand </li>
                </ul>
                <p>Shree Krishnayan Desi Gauraksha is the largest gaurakshashala in the state of
                  Uttrakhand. We are present in Uttrakhand, Uttar Pradesh, and Madhya Pradesh. We
                  are presently sheltering and serving...</p>
                <a href="https://www.youtube.com/embed/H1HVu5J07fg" target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-1"> <img class="img-fluid w-100" src="assets/images/news/publisher/dd-news.png" alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall shownews-world-india">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4">
                <iframe width="100%" height="242" src="https://www.youtube.com/embed/2XQ_9WNc5dY"
                                        title="Biggest Gaushala in Uttarakhand - Shri Krishnayan Gaushala, Haridwar। Uttarakhandi People"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
              </div>
              <div class="col-lg-7">
                <h2 class="fs-4 fw-bold newssearch">Biggest Gaushala in Uttarakhand - Shri Krishnayan Gaushala, Haridwar। Uttarakhandi People</h2>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 30 Aug 2021 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : News World India </li>
                </ul>
                <p>News World India is India's Fastest Growing News channel known for its quality
                  programs, authentic news, and reliable breaking news. News World India brings
                  you 24/7 Live Streaming, Headlines, Bulletins, Talk Shows, Infotainment and much
                  more...</p>
                <a href="https://www.youtube.com/embed/2XQ_9WNc5dY" target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-1"><img class="img-fluid w-100" src="assets/images/news/publisher/news-world-india.png" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showindia-biogas-association">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://biogas-india.com/bio-cng-plant-at-krishnayan-gaushala-haridwar/" target="_blank"><img src="../docs.krishnayangauraksha.org/images/news/n4.jpg" class="img-fluid rounded-3"
                                            alt="Bio-CNG Plant At Krishnayan Gaushala, Haridwar"/></a> </div>
              <div class="col-lg-6"> <a href="https://biogas-india.com/bio-cng-plant-at-krishnayan-gaushala-haridwar/" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Bio-CNG Plant At Krishnayan Gaushala, Haridwar</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 05 Aug 2020 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Indian Biogas Association </li>
                </ul>
                <p>The connection of biogas with the cow and its manure (dung) is pretty old. In India, Biogas is commonly known as Gobar Gas. </p>
                <a href="https://biogas-india.com/bio-cng-plant-at-krishnayan-gaushala-haridwar/"
                                        target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"><img class="img-fluid w-100" src="assets/images/news/publisher/iba.png" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showtribune">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://www.tribuneindia.com/2012/20120920/dun.htm"
                                        target="_blank"><img src="../docs.krishnayangauraksha.org/images/news/n5.jpg" class="img-fluid rounded-3"
                                            alt="Ashram rescues 95 cows from slaughter house"/></a> </div>
              <div class="col-lg-6"> <a href="https://www.tribuneindia.com/2012/20120920/dun.htm" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Ashram rescues 95 cows from slaughter house </a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 19 Sep 2012 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : The Tribune </li>
                </ul>
                <p>Members of the Shri Krishnayan Desi Gau Raksha Gau Lok Dham Ashram rescued 95 cows from a slaughter house here on Monday night. The cows have been kept at Anand Van and will be taken care of by ashram members. </p>
                <a href="https://www.tribuneindia.com/2012/20120920/dun.htm"
                                        target="_blank" class="btn btn-primary text-white fw-bold mt-2">Read More</a> </div>
              <div class="col-lg-2"> <img class="img-fluid w-100" src="assets/images/news/publisher/tribune.png" alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showshramik-mantr">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://shramikmantr.com/shramik-mantr-206/" target="_blank"><img
                                            src="assets/images/news/n3.jpg" class="img-fluid rounded-3"
                                            alt="Inauguration of Shri Krishnayan police post for cow protection"/></a> </div>
              <div class="col-lg-7"> <a href="https://shramikmantr.com/shramik-mantr-206/" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Chief Minister Dhami participated in the Gopashtami festival organized at Krishnayan Desi Gau Raksha Shala in Haridwar.</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 12 Nov 2021 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Shramik Mantr </li>
                </ul>
                <p>Chief Minister Pushkar Singh Dhami participated in the Gopashtami festival
                  organized at Krishnayan Deshi Gorakshala in Baso Chandrapur located in
                  Gandikhata area of district Haridwar on Thursday.</p>
                <a href="https://shramikmantr.com/shramik-mantr-206/" target="_blank"
                                        class="btn btn-primary text-white fw-bold">Read More</a> </div>
              <div class="col-lg-1"><img class="img-fluid w-100"src="assets/images/news/publisher/shramik.png" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showchamoli-times">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://chamolitimes.com/?p=12674" target="_blank"><img
                                            src="assets/images/news/n6.jpg" class="img-fluid rounded-3"
                                            alt="Inauguration of Shri Krishnayan police post for cow protection"/></a> </div>
              <div class="col-lg-7"> <a href="https://chamolitimes.com/?p=12674" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">CM participated in Gopashtami festival organized at Krishnayan Desi Goraksha Shala in Haridwar</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 11 Nov 2021 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Chamoli Times </li>
                </ul>
                <p>Dehradun. Chief Minister Pushkar Singh Dhami participated in the Gopashtami festival organized at Shri Krishnayan Deshi Gorakshala in Basochandpur located in Gandikhata area of district Haridwar on Thursday. </p>
                <a href="https://chamolitimes.com/?p=12674" target="_blank"
                                        class="btn btn-primary text-white fw-bold">Read More</a> </div>
              <div class="col-lg-1"> <img class="img-fluid w-100" src="assets/images/news/publisher/chameli.png" alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showamar-ujala">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://www.amarujala.com/uttar-pradesh/bijnor/sp-inaugurated-sabalgarh-police-post-nazibabad-news-mrt5177140148" target="_blank"><img
                                            src="assets/images/news/n7.jpg" class="img-fluid rounded-3"
                                            alt="Inauguration of Shri Krishnayan police post for cow protection"/></a> </div>
              <div class="col-lg-6"> <a href="https://www.amarujala.com/uttar-pradesh/bijnor/sp-inaugurated-sabalgarh-police-post-nazibabad-news-mrt5177140148" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">SP inaugurated Sabalgarh police post</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 27 Dec 2020 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Amar Ujala </li>
                </ul>
                <p>Bhaguwala / Najibabad. SP Dr. Dharamveer Singh inaugurated the Krishnayan Gaushala Police Station Sabalgarh. The SP established a police post for crime control in Khadar area.</p>
                <a href="https://www.amarujala.com/uttar-pradesh/bijnor/sp-inaugurated-sabalgarh-police-post-nazibabad-news-mrt5177140148" target="_blank"
                                        class="btn btn-primary text-white fw-bold">Read More</a> </div>
              <div class="col-lg-2"> <img class="img-fluid w-100" src="assets/images/news/publisher/amarujala.png" alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showmeruraibar">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://meruraibar.com/health-camp-organized-by-mobile-medical-van-in-shri-krishnayan-goraksha-shala/" target="_blank"><img
                                            src="assets/images/news/n8.jpg" class="img-fluid rounded-3"
                                            alt="Inauguration of Shri Krishnayan police post for cow protection"/></a> </div>
              <div class="col-lg-6"> <a href="https://meruraibar.com/health-camp-organized-by-mobile-medical-van-in-shri-krishnayan-goraksha-shala/" target="_blank" class="fs-4 fw-bold text-black lh-sm mb-2 d-block newssearch">Health camp organized by mobile medical van at Shri Krishnayan Goraksha Shala:</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 08 Aug 2022 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : Meruraibar </li>
                </ul>
                <p>Health camp organized by mobile medical van at Shri Krishnayan Goraksha Shala under the aegis of Ramakrishna Mission:</p>
                <a href="https://meruraibar.com/health-camp-organized-by-mobile-medical-van-in-shri-krishnayan-goraksha-shala/" target="_blank"
                                        class="btn btn-primary text-white fw-bold">Read More</a> </div>
              <div class="col-lg-2"> <img class="img-fluid w-100" src="assets/images/news/publisher/meru.png" alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 selectoption showall showupuk-live">
        <div class="card border-0">
          <div class="card-body">
            <div class="row gy-4">
              <div class="col-lg-4"> <a href="https://upuklive.com/uttrakhand/मुख्यमंत्री-ने-हरिद्वार-में-कृष्णायन-देशी-गोरक्षा-शाला-में/cid5738281.htm" target="_blank"><img
                                            src="assets/images/news/n9.jpg" class="img-fluid rounded-3"
                                            alt="Inauguration of Shri Krishnayan police post for cow protection"/></a> </div>
              <div class="col-lg-6"> <a href="https://upuklive.com/uttrakhand/मुख्यमंत्री-ने-हरिद्वार-में-कृष्णायन-देशी-गोरक्षा-शाला-में/cid5738281.htm" target="_blank" class="fs-4 fw-bold lh-sm text-black newssearch">The Chief Minister participated in the Gopashtami festival organized at Krishnayan Desi Goraksha Shala in Haridwar.</a>
                <ul class="news-date">
                  <li><img src="https://docs.krishnayangauraksha.org/images/date-solid.svg" width="16px" class="img-fluid" alt="Date Icon"/> Date : 11 Nov 2021 </li>
                  <li><img src="https://docs.krishnayangauraksha.org/images/newspaper-sharp.svg" width="16px" alt="Newspaper Icon"/> Publisher : UPUK Live </li>
                </ul>
                <p>Dehradun. Chief Minister Pushkar Singh Dhami participated in the Gopashtami festival organized at Shri Krishnayan Deshi Gorakshala in Basochandpur located in Gandikhata area of district Haridwar on Thursday.</p>
                <a href="https://upuklive.com/uttrakhand/मुख्यमंत्री-ने-हरिद्वार-में-कृष्णायन-देशी-गोरक्षा-शाला-में/cid5738281.htm" target="_blank"
                                        class="btn btn-primary text-white fw-bold">Read More</a> </div>
              <div class="col-lg-2"> <img class="img-fluid w-100" src="assets/images/news/publisher/upuklive.png" alt="UPUK Live Logo"/> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row gy-4">
      <div class="col-lg-12">
        <div class="nodatafound dnone"> Not Found Any Related Keyword news </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default NewsUpdate
