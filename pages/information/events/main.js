import React, { useState, useEffect } from "react"

export default function Main() {
  return (
    <main className="inner-col-2" style={{ paddingTop: 137 }}>
      <div className="container">
        <div className="row main_top justify-content-center">
          <div className="col-md-12">
            <div className="top_banner">
              <img src="https://assets.abraacdn.com/assets/images/event-banner.jpg" alt="event banner" />
            </div>
          </div>
          <div className="col-md-10 top_div">
            <div className="row">
              <div className="col-md-10" style={{ zIndex: 99999999999 }}>
                <div className="form-group">
                  <input
                    type="text"
                    id="text_event_exb"
                    name="text_event_exb"
                    className="form-control"
                    placeholder="What are you looking for"
                  />
                </div>
                <div className="form-group">
                  <div className="input-group date" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                    <input
                      type="text"
                      id="date_event_exb"
                      name="date_event_exb"
                      className="form-control"
                      placeholder="2017-11-10"
                    />
                    <div className="input-group-addon">
                      <span className="glyphicon glyphicon-th" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group date" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                    <input
                      type="text"
                      id="date_event_exb1"
                      name="date_event_exb1"
                      className="form-control"
                      placeholder="2017-11-10"
                    />
                    <div className="input-group-addon">
                      <span className="glyphicon glyphicon-th" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <select
                    type="text"
                    name="type_event_exb"
                    id="type_event_exb"
                    className="form-control"
                    style={{ display: "none" }}
                  >
                    <option value="all">Type of Event</option>
                    <option value={1}>Auto &amp; Auto Parts</option>
                    <option value={2}>Mobile Phones &amp;Tablets</option>
                    <option value={3}>Laptops &amp; Computers</option>
                    <option value={4}>Electronics</option>
                    <option value={5}>Agriculture</option>
                    <option value={6}>Industrial &amp; Construction</option>
                    <option value={7}>Electricals</option>
                    <option value={8}>Toys &amp; Hobbies</option>
                    <option value={9}>Sports &amp; Outdoor</option>
                    <option value={10}>Lights &amp; Lighting</option>
                    <option value={11}>Home, Garden &amp; Office</option>
                    <option value={12}>Food, Processing &amp; Production</option>
                    <option value={13}>Packaging &amp; Advertising</option>
                    <option value={14}>Hospitality</option>
                    <option value={15}>Health &amp; Beauty</option>
                    <option value={16}>Safety &amp; Security</option>
                    <option value={17}>Apparels, Textiles &amp; Accessories</option>
                  </select>
                  <div className="nice-select form-control" tabIndex={0}>
                    <span className="current">Type of Event</span>
                    <ul className="list">
                      <li data-value="all" className="option selected">
                        Type of Event
                      </li>
                      <li data-value={1} className="option">
                        Auto &amp; Auto Parts
                      </li>
                      <li data-value={2} className="option">
                        Mobile Phones &amp;Tablets
                      </li>
                      <li data-value={3} className="option">
                        Laptops &amp; Computers
                      </li>
                      <li data-value={4} className="option">
                        Electronics
                      </li>
                      <li data-value={5} className="option">
                        Agriculture
                      </li>
                      <li data-value={6} className="option">
                        Industrial &amp; Construction
                      </li>
                      <li data-value={7} className="option">
                        Electricals
                      </li>
                      <li data-value={8} className="option">
                        Toys &amp; Hobbies
                      </li>
                      <li data-value={9} className="option">
                        Sports &amp; Outdoor
                      </li>
                      <li data-value={10} className="option">
                        Lights &amp; Lighting
                      </li>
                      <li data-value={11} className="option">
                        Home, Garden &amp; Office
                      </li>
                      <li data-value={12} className="option">
                        Food, Processing &amp; Production
                      </li>
                      <li data-value={13} className="option">
                        Packaging &amp; Advertising
                      </li>
                      <li data-value={14} className="option">
                        Hospitality
                      </li>
                      <li data-value={15} className="option">
                        Health &amp; Beauty
                      </li>
                      <li data-value={16} className="option">
                        Safety &amp; Security
                      </li>
                      <li data-value={17} className="option">
                        Apparels, Textiles &amp; Accessories
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <select
                    type="text"
                    name="location_exb"
                    id="location_exb"
                    className="form-control"
                    style={{ display: "none" }}
                  >
                    <option value="all">Location</option>
                    <option value="ae">UAE</option>
                    <option value="cn">China</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="it">Italy</option>
                    <option value="my">Malaysia</option>
                    <option value="ru">Russia</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="es">Spain</option>
                    <option value="tr">Turkey</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                  </select>
                  <div className="nice-select form-control" tabIndex={0}>
                    <span className="current">Location</span>
                    <ul className="list">
                      <li data-value="all" className="option selected">
                        Location
                      </li>
                      <li data-value="ae" className="option">
                        UAE
                      </li>
                      <li data-value="cn" className="option">
                        China
                      </li>
                      <li data-value="fr" className="option">
                        France
                      </li>
                      <li data-value="de" className="option">
                        Germany
                      </li>
                      <li data-value="it" className="option">
                        Italy
                      </li>
                      <li data-value="my" className="option">
                        Malaysia
                      </li>
                      <li data-value="ru" className="option">
                        Russia
                      </li>
                      <li data-value="sa" className="option">
                        Saudi Arabia
                      </li>
                      <li data-value="es" className="option">
                        Spain
                      </li>
                      <li data-value="tr" className="option">
                        Turkey
                      </li>
                      <li data-value="uk" className="option">
                        United Kingdom
                      </li>
                      <li data-value="us" className="option">
                        United States
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 left_border ">
                <div className="last_border">
                  <button className="btn" id="exbsearch">
                    <i className="fa fa-search" aria-hidden="true" /> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event_area" id="event_area">
          <div className="event_main">
            <div className="col-12">
              <div className="row">
                <div className="page-title">
                  <h1>Business Events and Exhibitions News </h1>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saudi-transtec-587">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saudi-transtec-587">Saudi Transtec</a>
                  </h2>
                </div>
                <div className="adress">
                  4344 Exhibition Rd, As Saif, Dammam 34213, Saudi Arabia Dammam, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.sauditranstec.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  04-Dec-2018 - 06-Dec-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/decofair-571">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/decofair-571">Decofair</a>
                  </h2>
                </div>
                <div className="adress">
                  Corniche Rd Ash Shati Jeddah 21362 Saudi Arabia Jeddah, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.decofair.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  27-Nov-2018 - 29-Nov-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/bauma-china-389">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/bauma-china-389">Bauma China</a>
                  </h2>
                </div>
                <div className="adress">
                  Shanghai New International Expo Centre (SNIEC) 2345 Longyang Road, Pudong New Area Shanghai
                  P.R.C. 201204{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.bauma-china.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  27-Nov-2018 - 30-Nov-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/piscine-global--1041">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/piscine-global--1041">Piscine Global </a>
                  </h2>
                </div>
                <div className="adress">Eurexpo Lyon Avenue Louis Blériot, 69686 Chassieu, France </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.piscine-global-europe.com/fr">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  13-Nov-2018 - 16-Nov-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/piedra-natural-stone-fair--1066">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/piedra-natural-stone-fair--1066">
                      PIEDRA-Natural Stone Fair{" "}
                    </a>
                  </h2>
                </div>
                <div className="adress">Feria de Madrid Avda. del Partenon, 5 28042 Madrid, Spain </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="www.ifema.es/piedra">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  13-Nov-2018 - 16-Nov-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/analytica-china-388">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/analytica-china-388">Analytica China</a>
                  </h2>
                </div>
                <div className="adress">
                  Shanghai New International Expo Centre (SNIEC) 2345 Longyang Road, Pudong New Area Shanghai
                  P.R.C. 201204{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.analyticachina.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  31-Oct-2018 - 11-Feb-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/jws-expo--471">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/jws-expo--471">JWS Expo </a>
                  </h2>
                </div>
                <div className="adress">
                  Abu Dhabi National Exhibition Centre (ADNEC) Al Khaleej Street, Abu Dhabi, United Arab
                  Emirates{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="https://www.jws.ae/en.html">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  25-Oct-2018 - 29-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/ankiros-annofer-turkcast-507">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/ankiros-annofer-turkcast-507">
                      ANKIROS / ANNOFER / TURKCAST
                    </a>
                  </h2>
                </div>
                <div className="adress">
                  Tüyap Fair Convention and Congress Center Cumhuriyet Mh., Had?mköy Yolu, Istanbul, Turkey{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.ankiros.com/home-en/#lang=en">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  25-Oct-2018 - 27-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/artibat-1040">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/artibat-1040">ARTIBAT</a>
                  </h2>
                </div>
                <div className="adress">
                  Parc des Expositions CS 27 211 La Haie Gautrais, 35172 Bruz, France{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.artibat.com/fr">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  24-Oct-2018 - 26-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/cremona-livestock-exhibition-876">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/cremona-livestock-exhibition-876">
                      Cremona Livestock Exhibition
                    </a>
                  </h2>
                </div>
                <div className="adress">
                  CremonaFiere Piazza Ennio Zelioli Lanzini, 1, 26100 Cremona CR, Italy{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.bovinodalatte.it/en/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  24-Oct-2018 - 27-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/hi-tech-building-expo--1143">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/hi-tech-building-expo--1143">
                      HI-TECH Building Expo{" "}
                    </a>
                  </h2>
                </div>
                <div className="adress">
                  ExpoCentre Moscow (ZAO) Krasnopresnenskaya nab., 14, Moskva, Russia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="https://en.hitechbuilding.ru/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  24-Oct-2018 - 26-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/integrated-systems-russia-isr--1144">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/integrated-systems-russia-isr--1144">
                      Integrated Systems Russia (ISR){" "}
                    </a>
                  </h2>
                </div>
                <div className="adress">
                  ExpoCentre Moscow (ZAO) Krasnopresnenskaya nab., 14, Moskva, Russia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="https://en.isrussia.ru/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  24-Oct-2018 - 26-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/intercharm-professional-moscow--1145">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/intercharm-professional-moscow--1145">
                      InterCHARM Professional Moscow{" "}
                    </a>
                  </h2>
                </div>
                <div className="adress">Crocus Expo MKAD, Krasnogorsk, Moscow Oblast, Russia </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.intercharm.ru/en/autumn/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  24-Oct-2018 - 27-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/all-in-print-china-387">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/all-in-print-china-387">All in Print China</a>
                  </h2>
                </div>
                <div className="adress">
                  Shanghai New International Expo Centre (SNIEC) 2345 Longyang Road, Pudong New Area Shanghai
                  P.R.C. 201204{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.allinprint.com/En/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  24-Oct-2018 - 28-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/expocoating-moscow--1142">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/expocoating-moscow--1142">ExpoCoating Moscow </a>
                  </h2>
                </div>
                <div className="adress">Crocus Expo MKAD, Krasnogorsk, Moscow Oblast, Russia </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.expocoating-moscow.ru/?lang=en-GB">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  23-Oct-2018 - 25-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saudi-build-interiors-567">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saudi-build-interiors-567">Saudi Build Interiors</a>
                  </h2>
                </div>
                <div className="adress">
                  2446 King Abdullah Road, King Abdullah, Riyadh 12451 Saudi Arabia Riyadh, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://saudibuild-expo.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  22-Oct-2018 - 25-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saudi-stonetech-588">
                  <img
                    src="https://s101.abraacdn.com/files/152342065712296.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saudi-stonetech-588">Saudi StoneTech</a>
                  </h2>
                </div>
                <div className="adress">
                  2446 King Abdullah Road, King Abdullah, Riyadh 12451 Saudi ArabiaRiyadh, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a
                      target="_blank"
                      href="<p>http://saudibuild-expo.com/</p>
  "
                    >
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  22-Oct-2018 - 25-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saudi-build-599">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saudi-build-599">Saudi Build</a>
                  </h2>
                </div>
                <div className="adress">
                  2446 King Abdullah Road, King Abdullah, Riyadh 12451 Saudi Arabia Riyadh, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://saudibuild-expo.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  22-Oct-2018 - 25-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/lesdrevmash-1141">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/lesdrevmash-1141">Lesdrevmash</a>
                  </h2>
                </div>
                <div className="adress">
                  ExpoCentre Moscow (ZAO) Krasnopresnenskaya nab., 14, Moskva, Russia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.lesdrevmash-expo.ru/en/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  22-Oct-2018 - 25-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saie-building-construction-875">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saie-building-construction-875">
                      SAIE Building &amp; Construction
                    </a>
                  </h2>
                </div>
                <div className="adress">BolognaFiereVia della Fiera, 20, 40127 Bologna, Italy </div>
                <div className="category">
                  <span>
                    <a target="_blank" href>
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  17-Oct-2018 - 20-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/pack-expo-chicago-619">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/pack-expo-chicago-619">Pack Expo Chicago</a>
                  </h2>
                </div>
                <div className="adress">
                  McCormick Place 2301 S Lake Shore Dr, Chicago, IL 60616, United States{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="https://www.packexpointernational.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  14-Oct-2018 - 17-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/isaf-506">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/isaf-506">ISAF</a>
                  </h2>
                </div>
                <div className="adress">
                  World Trade Center Istanbul (IFM) Atatürk Hava Alan? Kar??s?, Ye?ilköy, Bak?rköy, Istanbul,
                  Turkey{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.isaffuari.com/en/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  11-Oct-2018 - 14-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/bimu-874">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/bimu-874">BIMU</a>
                  </h2>
                </div>
                <div className="adress">Fiera Milano Raccordo A8 - Fiera Milano Milano, Italy </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.bimu.it/en/home/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  09-Oct-2018 - 13-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saudi-agriculture-564">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saudi-agriculture-564">Saudi Agriculture</a>
                  </h2>
                </div>
                <div className="adress">
                  2446 King Abdullah Road, King Abdullah, Riyadh 12451 Saudi Arabia Riyadh, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://saudi-agriculture.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  07-Oct-2018 - 10-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/saudi-food-pack-578">
                  <img
                    src="https://s101.abraacdn.com/files/152341985691074.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/saudi-food-pack-578">Saudi Food Pack</a>
                  </h2>
                </div>
                <div className="adress">
                  2446 King Abdullah Road, King Abdullah, Riyadh 12451 Saudi ArabiaRiyadh, Saudi Arabia{" "}
                </div>
                <div className="category">
                  <span>
                    <a
                      target="_blank"
                      href="<p>http://saudi-agriculture.com/en-sa/about/food-pack</p>
  "
                    >
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  07-Oct-2018 - 10-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/heat-treatment-exhibition-1140">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/heat-treatment-exhibition-1140">
                      Heat Treatment Exhibition
                    </a>
                  </h2>
                </div>
                <div className="adress">
                  ExpoCentre Moscow (ZAO) Krasnopresnenskaya nab., 14, Moskva, Russia{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://www.htexporus.com/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  02-Oct-2018 - 04-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/building-healthcare-middle-east-469">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/building-healthcare-middle-east-469">
                      Building Healthcare Middle East
                    </a>
                  </h2>
                </div>
                <div className="adress">
                  Dubai World Trade Centre Sheikh Zayed Rd, Dubai, United Arab Emirates{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="https://www.buildinghealthcare-exhibition.com/en/Home.html">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  02-Oct-2018 - 04-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/dubai-cityscape-470">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/dubai-cityscape-470">Dubai CityScape</a>
                  </h2>
                </div>
                <div className="adress">
                  Dubai World Trade Centre Sheikh Zayed Rd, Dubai, United Arab Emirates{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="https://www.cityscapeglobal.com/en/home.html">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  02-Oct-2018 - 04-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/maktek-eurasia-fair--505">
                  <img
                    src="https://assets.abraacdn.com/assets/images/banners/no.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/maktek-eurasia-fair--505">Maktek Eurasia Fair </a>
                  </h2>
                </div>
                <div className="adress">
                  Tüyap Fair Convention and Congress Center Cumhuriyet Mh., Had?mköy Yolu, Istanbul, Turkey{" "}
                </div>
                <div className="category">
                  <span>
                    <a target="_blank" href="http://maktekfuari.com/en/">
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  02-Oct-2018 - 07-Oct-2018
                </span>
              </div>
            </div>
            <div className="event">
              <div className="image">
                <a href="https://www.abraa.com/events/halal-expo-dubai--468">
                  <img
                    src="https://s101.abraacdn.com/files/152341973495697.png"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/banners/no.png';"
                    alt="event logo"
                  />
                </a>
              </div>
              <div className="text">
                <div className="name">
                  <h2 style={{ fontWeight: "normal" }}>
                    <a href="https://www.abraa.com/events/halal-expo-dubai--468">Halal Expo Dubai </a>
                  </h2>
                </div>
                <div className="adress">
                  Roda Al Bustan Dubai AirportCasablanca Road, Al Garhoud - United Arab Emirates{" "}
                </div>
                <div className="category">
                  <span>
                    <a
                      target="_blank"
                      href="<p>http://www.halalexpodubai.com/</p>
  "
                    >
                      {" "}
                      Visit the Event Website
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="buttom_main">
                <span
                  style={{
                    border: "1px solid #8ad08a",
                    padding: 6,
                    borderRadius: 17
                  }}
                >
                  01-Oct-2018 - 02-Oct-2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
