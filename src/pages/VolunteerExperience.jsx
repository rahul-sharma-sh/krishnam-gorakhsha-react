import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const VolunteerExperience = () => {
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
      <div class="contact_wrap mb-5 overflow-hidden">
        <div class="container">
          <form id="user-volunteer-form" name="user-volunteer-form" >
            <input type="hidden" name="csrf_test_name" value="96917cf30c3d5beadb703c907b579053" />
            <div class="row g-4 justify-content-center" >
            <div class="col-md-9 text-center mt-0">
              <h1 class="fs-2 fw-bold text-center mt-5 mb-4">Volunteer<span class="text-primary"> Registration</span>
              </h1>
              <p class="opacity-75 mt-1 fw-medium text-m-15 mb-0 add-moverlay">Discover the joy of service and compassion by registering as a volunteer with Shree Krishnayan
                Gaushala. Our sacred haven for Mother cows welcomes individuals who wish to contribute their time
                and energy to the well-being of our beloved Gau Mata. As a volunteer, you'll have the opportunity to
                engage in various activities, from caring for the cows to supporting desi gauvansh in your area.
                <br /><span class="mt-2 d-block"> Join us in nurturing a harmonious environment for our Mother Cows and Gauvansh.</span>
              </p>

            </div>

            <div class="col-lg-7">
              <div class="row gy-3">
                <div class="col-lg-6">
                  <div class="">
                    <label class="col-form-label fw-semibold text-black-50 d-none d-lg-block">Name</label>
                    <input type="text" class="form-control border-0 shadow-sm text-capitalize" name="full_name" id="full_name" placeholder="Name" />
                    <small class="text-danger2 error-fullname"></small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="">
                    <label class="col-form-label fw-semibold text-black-50 d-none d-lg-block">Email</label>
                    <input type="email" class="form-control border-0 shadow-sm" name="email" id="email" placeholder="Email" />
                    <small class="text-danger2 error-email"></small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="">
                    <label class="col-form-label fw-semibold text-black-50 d-none d-lg-block">Occupation</label>
                    <select class="form-select border-0 shadow-sm" id="occupation" name="occupation">
                      <option value="">Occupation</option>
                      <option value="animal_lover">Animal Lover</option>
                      <option value="business">Business</option>
                      <option value="industrialist">Industrialist</option>
                      <option value="information_technology">Information Technology</option>
                      <option value="other">Other</option>
                      <option value="professional">Professional</option>
                      <option value="salaried">Salaried</option>
                      <option value="self_employed">Self Employed</option>
                      <option value="social_activist">Social Activist</option>
                      <option value="student">Student</option>
                      <option value="veterinarian">Veterinarian</option>
                    </select>
                    <input type="text" class="form-control border-0 shadow-sm mt-2" style={{display:"none"}} name="o_occupation" id="o_occupation" placeholder="Enter Occupation" />
                    <small class="text-danger2 error-occupation"></small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <label class="col-form-label fw-semibold text-black-50 d-none d-lg-block">Mobile</label>
                  <div class="row g-3">
                    <div class="col-lg-9 col-9">
                      <input type="text" id="phone" class="form-control border-0 shadow-sm phonenumber1 phone" name="phone" placeholder="Phone Number" />
                      <small class="text-danger2 error-phone"></small>
                      <input type="hidden" name="isd_code" id="isd_code" value="91" />
                    </div>
                    <div class="col-lg-3 col-3" data-bs-toggle="tooltip" data-bs-title="Uncheck for whtsapp">
                      <div class="form-check bg-white shadow-sm h-100 rounded-2 p-1 d-flex align-items-center justify-content-center gap-2 ">
                        <input class="form-check-input fs-5 m-0 p-0" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked" >
                          <i class="fa-brands fa-whatsapp fs-18"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <label for="" class="col-form-label fw-semibold text-black-50">Address</label>
                  <div class="row g-4">

                    <div class="col-lg-3">
                      <select name="country" id="country_name" class="form-select border-0 shadow-sm w-100 select2">
                        <option data-iso="af" value="Afghanistan">
                          Afghanistan                                            </option>
                        <option data-iso="al" value="Albania">
                          Albania                                            </option>
                        <option data-iso="dz" value="Algeria">
                          Algeria                                            </option>
                        <option data-iso="as" value="American Samoa">
                          American Samoa                                            </option>
                        <option data-iso="ad" value="Andorra">
                          Andorra                                            </option>
                        <option data-iso="ao" value="Angola">
                          Angola                                            </option>
                        <option data-iso="ai" value="Anguilla">
                          Anguilla                                            </option>
                        <option data-iso="aq" value="Antarctica">
                          Antarctica                                            </option>
                        <option data-iso="ag" value="Antigua And Barbuda">
                          Antigua And Barbuda                                            </option>
                        <option data-iso="ar" value="Argentina">
                          Argentina                                            </option>
                        <option data-iso="am" value="Armenia">
                          Armenia                                            </option>
                        <option data-iso="aw" value="Aruba">
                          Aruba                                            </option>
                        <option data-iso="au" value="Australia">
                          Australia                                            </option>
                        <option data-iso="at" value="Austria">
                          Austria                                            </option>
                        <option data-iso="az" value="Azerbaijan">
                          Azerbaijan                                            </option>
                        <option data-iso="bs" value="Bahamas The">
                          Bahamas The                                            </option>
                        <option data-iso="bh" value="Bahrain">
                          Bahrain                                            </option>
                        <option data-iso="bd" value="Bangladesh">
                          Bangladesh                                            </option>
                        <option data-iso="bb" value="Barbados">
                          Barbados                                            </option>
                        <option data-iso="by" value="Belarus">
                          Belarus                                            </option>
                        <option data-iso="be" value="Belgium">
                          Belgium                                            </option>
                        <option data-iso="bz" value="Belize">
                          Belize                                            </option>
                        <option data-iso="bj" value="Benin">
                          Benin                                            </option>
                        <option data-iso="bm" value="Bermuda">
                          Bermuda                                            </option>
                        <option data-iso="bt" value="Bhutan">
                          Bhutan                                            </option>
                        <option data-iso="bo" value="Bolivia">
                          Bolivia                                            </option>
                        <option data-iso="ba" value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina                                            </option>
                        <option data-iso="bw" value="Botswana">
                          Botswana                                            </option>
                        <option data-iso="bv" value="Bouvet Island">
                          Bouvet Island                                            </option>
                        <option data-iso="br" value="Brazil">
                          Brazil                                            </option>
                        <option data-iso="io" value="British Indian Ocean Territory">
                          British Indian Ocean Territory                                            </option>
                        <option data-iso="bn" value="Brunei">
                          Brunei                                            </option>
                        <option data-iso="bg" value="Bulgaria">
                          Bulgaria                                            </option>
                        <option data-iso="bf" value="Burkina Faso">
                          Burkina Faso                                            </option>
                        <option data-iso="bi" value="Burundi">
                          Burundi                                            </option>
                        <option data-iso="kh" value="Cambodia">
                          Cambodia                                            </option>
                        <option data-iso="cm" value="Cameroon">
                          Cameroon                                            </option>
                        <option data-iso="ca" value="Canada">
                          Canada                                            </option>
                        <option data-iso="cv" value="Cape Verde">
                          Cape Verde                                            </option>
                        <option data-iso="ky" value="Cayman Islands">
                          Cayman Islands                                            </option>
                        <option data-iso="cf" value="Central African Republic">
                          Central African Republic                                            </option>
                        <option data-iso="td" value="Chad">
                          Chad                                            </option>
                        <option data-iso="cl" value="Chile">
                          Chile                                            </option>
                        <option data-iso="cn" value="China">
                          China                                            </option>
                        <option data-iso="cx" value="Christmas Island">
                          Christmas Island                                            </option>
                        <option data-iso="cc" value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands                                            </option>
                        <option data-iso="co" value="Colombia">
                          Colombia                                            </option>
                        <option data-iso="km" value="Comoros">
                          Comoros                                            </option>
                        <option data-iso="cg" value="Republic Of The Congo">
                          Republic Of The Congo                                            </option>
                        <option data-iso="cd" value="Democratic Republic Of The Congo">
                          Democratic Republic Of The Congo                                            </option>
                        <option data-iso="ck" value="Cook Islands">
                          Cook Islands                                            </option>
                        <option data-iso="cr" value="Costa Rica">
                          Costa Rica                                            </option>
                        <option data-iso="ci" value="Cote D'Ivoire (Ivory Coast)">
                          Cote D'Ivoire (Ivory Coast)                                            </option>
                        <option data-iso="hr" value="Croatia (Hrvatska)">
                          Croatia (Hrvatska)                                            </option>
                        <option data-iso="cu" value="Cuba">
                          Cuba                                            </option>
                        <option data-iso="cy" value="Cyprus">
                          Cyprus                                            </option>
                        <option data-iso="cz" value="Czech Republic">
                          Czech Republic                                            </option>
                        <option data-iso="dk" value="Denmark">
                          Denmark                                            </option>
                        <option data-iso="dj" value="Djibouti">
                          Djibouti                                            </option>
                        <option data-iso="dm" value="Dominica">
                          Dominica                                            </option>
                        <option data-iso="do" value="Dominican Republic">
                          Dominican Republic                                            </option>
                        <option data-iso="tp" value="East Timor">
                          East Timor                                            </option>
                        <option data-iso="ec" value="Ecuador">
                          Ecuador                                            </option>
                        <option data-iso="eg" value="Egypt">
                          Egypt                                            </option>
                        <option data-iso="sv" value="El Salvador">
                          El Salvador                                            </option>
                        <option data-iso="gq" value="Equatorial Guinea">
                          Equatorial Guinea                                            </option>
                        <option data-iso="er" value="Eritrea">
                          Eritrea                                            </option>
                        <option data-iso="ee" value="Estonia">
                          Estonia                                            </option>
                        <option data-iso="et" value="Ethiopia">
                          Ethiopia                                            </option>
                        <option data-iso="xa" value="External Territories of Australia">
                          External Territories of Australia                                            </option>
                        <option data-iso="fk" value="Falkland Islands">
                          Falkland Islands                                            </option>
                        <option data-iso="fo" value="Faroe Islands">
                          Faroe Islands                                            </option>
                        <option data-iso="fj" value="Fiji Islands">
                          Fiji Islands                                            </option>
                        <option data-iso="fi" value="Finland">
                          Finland                                            </option>
                        <option data-iso="fr" value="France">
                          France                                            </option>
                        <option data-iso="gf" value="French Guiana">
                          French Guiana                                            </option>
                        <option data-iso="pf" value="French Polynesia">
                          French Polynesia                                            </option>
                        <option data-iso="tf" value="French Southern Territories">
                          French Southern Territories                                            </option>
                        <option data-iso="ga" value="Gabon">
                          Gabon                                            </option>
                        <option data-iso="gm" value="Gambia The">
                          Gambia The                                            </option>
                        <option data-iso="ge" value="Georgia">
                          Georgia                                            </option>
                        <option data-iso="de" value="Germany">
                          Germany                                            </option>
                        <option data-iso="gh" value="Ghana">
                          Ghana                                            </option>
                        <option data-iso="gi" value="Gibraltar">
                          Gibraltar                                            </option>
                        <option data-iso="gr" value="Greece">
                          Greece                                            </option>
                        <option data-iso="gl" value="Greenland">
                          Greenland                                            </option>
                        <option data-iso="gd" value="Grenada">
                          Grenada                                            </option>
                        <option data-iso="gp" value="Guadeloupe">
                          Guadeloupe                                            </option>
                        <option data-iso="gu" value="Guam">
                          Guam                                            </option>
                        <option data-iso="gt" value="Guatemala">
                          Guatemala                                            </option>
                        <option data-iso="xu" value="Guernsey and Alderney">
                          Guernsey and Alderney                                            </option>
                        <option data-iso="gn" value="Guinea">
                          Guinea                                            </option>
                        <option data-iso="gw" value="Guinea-Bissau">
                          Guinea-Bissau                                            </option>
                        <option data-iso="gy" value="Guyana">
                          Guyana                                            </option>
                        <option data-iso="ht" value="Haiti">
                          Haiti                                            </option>
                        <option data-iso="hm" value="Heard and McDonald Islands">
                          Heard and McDonald Islands                                            </option>
                        <option data-iso="hn" value="Honduras">
                          Honduras                                            </option>
                        <option data-iso="hk" value="Hong Kong S.A.R.">
                          Hong Kong S.A.R.                                            </option>
                        <option data-iso="hu" value="Hungary">
                          Hungary                                            </option>
                        <option data-iso="is" value="Iceland">
                          Iceland                                            </option>
                        <option selected data-iso="in" value="India">
                          India                                            </option>
                        <option data-iso="id" value="Indonesia">
                          Indonesia                                            </option>
                        <option data-iso="ir" value="Iran">
                          Iran                                            </option>
                        <option data-iso="iq" value="Iraq">
                          Iraq                                            </option>
                        <option data-iso="ie" value="Ireland">
                          Ireland                                            </option>
                        <option data-iso="il" value="Israel">
                          Israel                                            </option>
                        <option data-iso="it" value="Italy">
                          Italy                                            </option>
                        <option data-iso="jm" value="Jamaica">
                          Jamaica                                            </option>
                        <option data-iso="jp" value="Japan">
                          Japan                                            </option>
                        <option data-iso="xj" value="Jersey">
                          Jersey                                            </option>
                        <option data-iso="jo" value="Jordan">
                          Jordan                                            </option>
                        <option data-iso="kz" value="Kazakhstan">
                          Kazakhstan                                            </option>
                        <option data-iso="ke" value="Kenya">
                          Kenya                                            </option>
                        <option data-iso="ki" value="Kiribati">
                          Kiribati                                            </option>
                        <option data-iso="kp" value="Korea North">
                          Korea North                                            </option>
                        <option data-iso="kr" value="Korea South">
                          Korea South                                            </option>
                        <option data-iso="kw" value="Kuwait">
                          Kuwait                                            </option>
                        <option data-iso="kg" value="Kyrgyzstan">
                          Kyrgyzstan                                            </option>
                        <option data-iso="la" value="Laos">
                          Laos                                            </option>
                        <option data-iso="lv" value="Latvia">
                          Latvia                                            </option>
                        <option data-iso="lb" value="Lebanon">
                          Lebanon                                            </option>
                        <option data-iso="ls" value="Lesotho">
                          Lesotho                                            </option>
                        <option data-iso="lr" value="Liberia">
                          Liberia                                            </option>
                        <option data-iso="ly" value="Libya">
                          Libya                                            </option>
                        <option data-iso="li" value="Liechtenstein">
                          Liechtenstein                                            </option>
                        <option data-iso="lt" value="Lithuania">
                          Lithuania                                            </option>
                        <option data-iso="lu" value="Luxembourg">
                          Luxembourg                                            </option>
                        <option data-iso="mo" value="Macau S.A.R.">
                          Macau S.A.R.                                            </option>
                        <option data-iso="mk" value="Macedonia">
                          Macedonia                                            </option>
                        <option data-iso="mg" value="Madagascar">
                          Madagascar                                            </option>
                        <option data-iso="mw" value="Malawi">
                          Malawi                                            </option>
                        <option data-iso="my" value="Malaysia">
                          Malaysia                                            </option>
                        <option data-iso="mv" value="Maldives">
                          Maldives                                            </option>
                        <option data-iso="ml" value="Mali">
                          Mali                                            </option>
                        <option data-iso="mt" value="Malta">
                          Malta                                            </option>
                        <option data-iso="xm" value="Man (Isle of)">
                          Man (Isle of)                                            </option>
                        <option data-iso="mh" value="Marshall Islands">
                          Marshall Islands                                            </option>
                        <option data-iso="mq" value="Martinique">
                          Martinique                                            </option>
                        <option data-iso="mr" value="Mauritania">
                          Mauritania                                            </option>
                        <option data-iso="mu" value="Mauritius">
                          Mauritius                                            </option>
                        <option data-iso="yt" value="Mayotte">
                          Mayotte                                            </option>
                        <option data-iso="mx" value="Mexico">
                          Mexico                                            </option>
                        <option data-iso="fm" value="Micronesia">
                          Micronesia                                            </option>
                        <option data-iso="md" value="Moldova">
                          Moldova                                            </option>
                        <option data-iso="mc" value="Monaco">
                          Monaco                                            </option>
                        <option data-iso="mn" value="Mongolia">
                          Mongolia                                            </option>
                        <option data-iso="ms" value="Montserrat">
                          Montserrat                                            </option>
                        <option data-iso="ma" value="Morocco">
                          Morocco                                            </option>
                        <option data-iso="mz" value="Mozambique">
                          Mozambique                                            </option>
                        <option data-iso="mm" value="Myanmar">
                          Myanmar                                            </option>
                        <option data-iso="na" value="Namibia">
                          Namibia                                            </option>
                        <option data-iso="nr" value="Nauru">
                          Nauru                                            </option>
                        <option data-iso="np" value="Nepal">
                          Nepal                                            </option>
                        <option data-iso="an" value="Netherlands Antilles">
                          Netherlands Antilles                                            </option>
                        <option data-iso="nl" value="Netherlands The">
                          Netherlands The                                            </option>
                        <option data-iso="nc" value="New Caledonia">
                          New Caledonia                                            </option>
                        <option data-iso="nz" value="New Zealand">
                          New Zealand                                            </option>
                        <option data-iso="ni" value="Nicaragua">
                          Nicaragua                                            </option>
                        <option data-iso="ne" value="Niger">
                          Niger                                            </option>
                        <option data-iso="ng" value="Nigeria">
                          Nigeria                                            </option>
                        <option data-iso="nu" value="Niue">
                          Niue                                            </option>
                        <option data-iso="nf" value="Norfolk Island">
                          Norfolk Island                                            </option>
                        <option data-iso="mp" value="Northern Mariana Islands">
                          Northern Mariana Islands                                            </option>
                        <option data-iso="no" value="Norway">
                          Norway                                            </option>
                        <option data-iso="om" value="Oman">
                          Oman                                            </option>
                        <option data-iso="pk" value="Pakistan">
                          Pakistan                                            </option>
                        <option data-iso="pw" value="Palau">
                          Palau                                            </option>
                        <option data-iso="ps" value="Palestinian Territory Occupied">
                          Palestinian Territory Occupied                                            </option>
                        <option data-iso="pa" value="Panama">
                          Panama                                            </option>
                        <option data-iso="pg" value="Papua new Guinea">
                          Papua new Guinea                                            </option>
                        <option data-iso="py" value="Paraguay">
                          Paraguay                                            </option>
                        <option data-iso="pe" value="Peru">
                          Peru                                            </option>
                        <option data-iso="ph" value="Philippines">
                          Philippines                                            </option>
                        <option data-iso="pn" value="Pitcairn Island">
                          Pitcairn Island                                            </option>
                        <option data-iso="pl" value="Poland">
                          Poland                                            </option>
                        <option data-iso="pt" value="Portugal">
                          Portugal                                            </option>
                        <option data-iso="pr" value="Puerto Rico">
                          Puerto Rico                                            </option>
                        <option data-iso="qa" value="Qatar">
                          Qatar                                            </option>
                        <option data-iso="re" value="Reunion">
                          Reunion                                            </option>
                        <option data-iso="ro" value="Romania">
                          Romania                                            </option>
                        <option data-iso="ru" value="Russia">
                          Russia                                            </option>
                        <option data-iso="rw" value="Rwanda">
                          Rwanda                                            </option>
                        <option data-iso="sh" value="Saint Helena">
                          Saint Helena                                            </option>
                        <option data-iso="kn" value="Saint Kitts And Nevis">
                          Saint Kitts And Nevis                                            </option>
                        <option data-iso="lc" value="Saint Lucia">
                          Saint Lucia                                            </option>
                        <option data-iso="pm" value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon                                            </option>
                        <option data-iso="vc" value="Saint Vincent And The Grenadines">
                          Saint Vincent And The Grenadines                                            </option>
                        <option data-iso="ws" value="Samoa">
                          Samoa                                            </option>
                        <option data-iso="sm" value="San Marino">
                          San Marino                                            </option>
                        <option data-iso="st" value="Sao Tome and Principe">
                          Sao Tome and Principe                                            </option>
                        <option data-iso="sa" value="Saudi Arabia">
                          Saudi Arabia                                            </option>
                        <option data-iso="sn" value="Senegal">
                          Senegal                                            </option>
                        <option data-iso="rs" value="Serbia">
                          Serbia                                            </option>
                        <option data-iso="sc" value="Seychelles">
                          Seychelles                                            </option>
                        <option data-iso="sl" value="Sierra Leone">
                          Sierra Leone                                            </option>
                        <option data-iso="sg" value="Singapore">
                          Singapore                                            </option>
                        <option data-iso="sk" value="Slovakia">
                          Slovakia                                            </option>
                        <option data-iso="si" value="Slovenia">
                          Slovenia                                            </option>
                        <option data-iso="xg" value="Smaller Territories of the UK">
                          Smaller Territories of the UK                                            </option>
                        <option data-iso="sb" value="Solomon Islands">
                          Solomon Islands                                            </option>
                        <option data-iso="so" value="Somalia">
                          Somalia                                            </option>
                        <option data-iso="za" value="South Africa">
                          South Africa                                            </option>
                        <option data-iso="gs" value="South Georgia">
                          South Georgia                                            </option>
                        <option data-iso="ss" value="South Sudan">
                          South Sudan                                            </option>
                        <option data-iso="es" value="Spain">
                          Spain                                            </option>
                        <option data-iso="lk" value="Sri Lanka">
                          Sri Lanka                                            </option>
                        <option data-iso="sd" value="Sudan">
                          Sudan                                            </option>
                        <option data-iso="sr" value="Suriname">
                          Suriname                                            </option>
                        <option data-iso="sj" value="Svalbard And Jan Mayen Islands">
                          Svalbard And Jan Mayen Islands                                            </option>
                        <option data-iso="sz" value="Swaziland">
                          Swaziland                                            </option>
                        <option data-iso="se" value="Sweden">
                          Sweden                                            </option>
                        <option data-iso="ch" value="Switzerland">
                          Switzerland                                            </option>
                        <option data-iso="sy" value="Syria">
                          Syria                                            </option>
                        <option data-iso="tw" value="Taiwan">
                          Taiwan                                            </option>
                        <option data-iso="tj" value="Tajikistan">
                          Tajikistan                                            </option>
                        <option data-iso="tz" value="Tanzania">
                          Tanzania                                            </option>
                        <option data-iso="th" value="Thailand">
                          Thailand                                            </option>
                        <option data-iso="tg" value="Togo">
                          Togo                                            </option>
                        <option data-iso="tk" value="Tokelau">
                          Tokelau                                            </option>
                        <option data-iso="to" value="Tonga">
                          Tonga                                            </option>
                        <option data-iso="tt" value="Trinidad And Tobago">
                          Trinidad And Tobago                                            </option>
                        <option data-iso="tn" value="Tunisia">
                          Tunisia                                            </option>
                        <option data-iso="tr" value="Turkey">
                          Turkey                                            </option>
                        <option data-iso="tm" value="Turkmenistan">
                          Turkmenistan                                            </option>
                        <option data-iso="tc" value="Turks And Caicos Islands">
                          Turks And Caicos Islands                                            </option>
                        <option data-iso="tv" value="Tuvalu">
                          Tuvalu                                            </option>
                        <option data-iso="ug" value="Uganda">
                          Uganda                                            </option>
                        <option data-iso="ua" value="Ukraine">
                          Ukraine                                            </option>
                        <option data-iso="ae" value="United Arab Emirates">
                          United Arab Emirates                                            </option>
                        <option data-iso="gb" value="United Kingdom">
                          United Kingdom                                            </option>
                        <option data-iso="us" value="United States">
                          United States                                            </option>
                        <option data-iso="um" value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands                                            </option>
                        <option data-iso="uy" value="Uruguay">
                          Uruguay                                            </option>
                        <option data-iso="uz" value="Uzbekistan">
                          Uzbekistan                                            </option>
                        <option data-iso="vu" value="Vanuatu">
                          Vanuatu                                            </option>
                        <option data-iso="va" value="Vatican City State (Holy See)">
                          Vatican City State (Holy See)                                            </option>
                        <option data-iso="ve" value="Venezuela">
                          Venezuela                                            </option>
                        <option data-iso="vn" value="Vietnam">
                          Vietnam                                            </option>
                        <option data-iso="vg" value="Virgin Islands (British)">
                          Virgin Islands (British)                                            </option>
                        <option data-iso="vi" value="Virgin Islands (US)">
                          Virgin Islands (US)                                            </option>
                        <option data-iso="wf" value="Wallis And Futuna Islands">
                          Wallis And Futuna Islands                                            </option>
                        <option data-iso="eh" value="Western Sahara">
                          Western Sahara                                            </option>
                        <option data-iso="ye" value="Yemen">
                          Yemen                                            </option>
                        <option data-iso="yu" value="Yugoslavia">
                          Yugoslavia                                            </option>
                        <option data-iso="zm" value="Zambia">
                          Zambia                                            </option>
                        <option data-iso="zw" value="Zimbabwe">
                          Zimbabwe                                            </option>
                      </select>
                    </div>
                    <div class="col-lg-3">
                      <input type="text" placeholder="Enter Pincode" name="pincode" class="form-control border-0 shadow-sm" id="pincode" onblur="validatePincode()" onkeypress="return isNumberKey(event)" />
                      <small class="text-danger2 error-pincode"></small>
                    </div>
                    <div class="col-lg-3">
                      <select name="state" id="state_name" class="border-0 shadow-sm  select2">
                      </select>
                      <small class="text-danger2 error-state"></small>
                    </div>

                    <div class="col-lg-6 selectcity">
                      <select name="post_office" id="city_name" class="w-100 select2 form-select"></select>
                    </div>
                    <div class="col-lg-3">
                      <input type="text" class="form-control border-0 shadow-sm  text-capitalize" id="city" name="city" placeholder="enter city" />
                      <small class="text-danger2 error-city"></small>
                    </div>

                    <div class="col-lg-12">
                      <textarea class="form-control border-0 shadow-sm" placeholder="Your Address" name="address" id="address" cols="30" rows="3"></textarea>
                      <small class="text-danger2 error-address"></small>
                    </div>

                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexcheckchecked_confirm" checked />
                    <label class="form-check-label" for="flexcheckchecked_confirm">
                      I give my consent to contact me for the help of desi gauvansh in need in your area.
                    </label>
                    <small class="text-danger2 error-flexcheckchecked_confirm"></small>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div id="success_msg"></div>
                  <button class="btn btn-primary px-5 text-white w-100" type="button" onclick="validateForm()">Submit</button>
                </div>
              </div>
            </div>

        </div>

      </form>

    </div>
</div >
  <Footer />
    </div >
  )
}

export default VolunteerExperience
