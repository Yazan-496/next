import React from "react"

const Main = () => {
  return (
    <div className="content" id="content">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n         .business-card{\n             height: 360px;\n             margin: 5px;\n             width: 25vw;\n             display: unset;\n         }\n         .info-container{\n             display: grid;grid-template-columns: auto auto auto auto auto;justify-content: space-between\n         }\n         @media (max-width: 768px) {\n             .info-container{\n                 grid-template-columns: auto auto auto;\n             }\n             .col-smd-3{\n                 font-size:2vw;\n             }\n         }\n         .filter-cont label{\n             font-weight: 600;\n         }\n     \n         .info-container span{\n             width: 35px;\n             height: 35px;\n             display: inline-block;\n             vertical-align:middle;\n             padding:10px 0px\n         }\n         .info-container hr{\n             height: 35px;\n             background: #ddd;\n             width: 1px;\n             display: inline-block;\n             vertical-align: middle;\n         }\n     \n     "
        }}
      />
      <div className="row">
        <div className="col-xs-6">
          <h1 className="page-title">Buyers</h1>
        </div>
        <div
          className="col-xs-6"
          style={{ textAlign: "right", padding: "25px 10px" }}
        ></div>
      </div>
      <fieldset style={{ border: "1px solid #eee", padding: 10 }}>
        <legend
          style={{ borderBottom: "none", width: "unset", fontSize: "12pt" }}
        >
          Filter Leads <i className="fa fa-filter fa-sm filter-btn" />
        </legend>
        <div className="filter-cont" style={{ display: "block" }}>
          <div className="row">
            <div className="col-xs-4">
              <div className="form-group">
                <label>Country</label>
                <select
                  data-placeholder="Filter by country"
                  multiple
                  name="ctry[]"
                  id="ctry_filter"
                  className="select3 form-control select2-hidden-accessible"
                  style={{ width: "100%" }}
                  data-select2-id="select2-data-ctry_filter"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option />
                  <option value="ae">UAE</option>
                  <option value="af">Afghanistan</option>
                  <option value="al">Albania</option>
                  <option value="dz">Algeria</option>
                  <option value="as">American Samoa</option>
                  <option value="ad">Andorra</option>
                  <option value="ao">Angola</option>
                  <option value="ai">Anguilla</option>
                  <option value="aq">Antarctica</option>
                  <option value="ag">Antigua and Barbuda</option>
                  <option value="ar">Argentina</option>
                  <option value="am">Armenia</option>
                  <option value="aw">Aruba</option>
                  <option value="au">Australia</option>
                  <option value="at">Austria</option>
                  <option value="az">Azerbaijan</option>
                  <option value="bs">Bahamas</option>
                  <option value="bh">Bahrain</option>
                  <option value="bd">Bangladesh</option>
                  <option value="bb">Barbados</option>
                  <option value="by">Belarus (Belarus)</option>
                  <option value="be">Belgium</option>
                  <option value="bz">Belize</option>
                  <option value="bj">Pinyin</option>
                  <option value="bm">Bermuda</option>
                  <option value="bt">Bhutan</option>
                  <option value="bo">Bolivia</option>
                  <option value="ba">Bosnia and Herzegovina</option>
                  <option value="bw">Botswana</option>
                  <option value="bv">Bouvet Island</option>
                  <option value="br">Brazil</option>
                  <option value="io">British Indian Ocean Territory</option>
                  <option value="vg">British Virgin Islands</option>
                  <option value="bn">Brunei</option>
                  <option value="bg">Bulgaria</option>
                  <option value="bf">Burkina Faso</option>
                  <option value="bi">Burundi</option>
                  <option value="kh">Campodia</option>
                  <option value="cm">Cameroon</option>
                  <option value="ca">Canada</option>
                  <option value="cv">island of Cape Verde</option>
                  <option value="ky">Cayman Islands</option>
                  <option value="cf">Central African Republic</option>
                  <option value="td">Chad</option>
                  <option value="cl">Chile</option>
                  <option value="cn">China</option>
                  <option value="cx">Christmas Island</option>
                  <option value="cc">Cocos (Keeling)</option>
                  <option value="co">Columbia</option>
                  <option value="km">Comoros</option>
                  <option value="cg">Congo</option>
                  <option value="ck">Cook Islands</option>
                  <option value="cr">Costa Rica</option>
                  <option value="hr">Croatia</option>
                  <option value="cu">Cuba</option>
                  <option value="cy">Cyprus</option>
                  <option value="cz">Czech Republic</option>
                  <option value="cd">Democratic Republic of Congo</option>
                  <option value="dk">Denmark</option>
                  <option value="dj">Djibouti</option>
                  <option value="dm">Dominica</option>
                  <option value="do">Dominican Republic</option>
                  <option value="tl">East Timor</option>
                  <option value="ec">Ecuador</option>
                  <option value="eg">Egypt</option>
                  <option value="sv">El Salvador</option>
                  <option value="gq">Equatorial Guinea</option>
                  <option value="er">Eritrea</option>
                  <option value="ee">Estonia</option>
                  <option value="et">Ethiopia</option>
                  <option value="fk">Falkland Islands</option>
                  <option value="fo">Faroe Islands</option>
                  <option value="fm">United States of Micronesia</option>
                  <option value="fj">Fiji</option>
                  <option value="fi">Finland</option>
                  <option value="fr">France</option>
                  <option value="gf">French Guiana</option>
                  <option value="pf">French Polynesia</option>
                  <option value="ga">Gabon</option>
                  <option value="gm">Gambia</option>
                  <option value="ge">Georgia</option>
                  <option value="de">Germany</option>
                  <option value="gh">Ghana</option>
                  <option value="gi">Gibraltar</option>
                  <option value="gr">Greece</option>
                  <option value="gl">Greenland</option>
                  <option value="gd">Grenada</option>
                  <option value="gp">GUADALUPE</option>
                  <option value="gu">Guam</option>
                  <option value="gt">Guatemala</option>
                  <option value="gn">Guinea</option>
                  <option value="gw">Guinea - Bissau</option>
                  <option value="gy">French Guiana</option>
                  <option value="ht">Haiti</option>
                  <option value="hm">Heard Island and McDonald Islands</option>
                  <option value="hn">Honduras</option>
                  <option value="hk">Hong Kong</option>
                  <option value="hu">Hungary (Hungary)</option>
                  <option value="is">Iceland</option>
                  <option value="in">India</option>
                  <option value="id">Indonesia</option>
                  <option value="ir">Iran</option>
                  <option value="iq">Iraq</option>
                  <option value="ie">Ireland</option>
                  <option value="it">Italy</option>
                  <option value="ci">Ivory Coast</option>
                  <option value="jm">Jamaica</option>
                  <option value="jp">Japan</option>
                  <option value="jo">Jordan</option>
                  <option value="kz">Kazakhstan</option>
                  <option value="ke">Kenya</option>
                  <option value="ki">Kiribati Islands</option>
                  <option value="kw">Kuwait</option>
                  <option value="kg">Kyrgyzstan</option>
                  <option value="la">Laos</option>
                  <option value="lv">Latvia</option>
                  <option value="lb">Lebanon</option>
                  <option value="ls">Lesotho</option>
                  <option value="lr">Liberia</option>
                  <option value="ly">Libya</option>
                  <option value="li">Liechtenstein</option>
                  <option value="lt">Lithuania</option>
                  <option value="lu">Luxembourg</option>
                  <option value="mo">Macao</option>
                  <option value="mk">Macedonia</option>
                  <option value="mg">Madagascar</option>
                  <option value="mw">Malawi</option>
                  <option value="my">Malaysia</option>
                  <option value="mv">Maldives</option>
                  <option value="ml">Mali</option>
                  <option value="mt">Malta</option>
                  <option value="mh">Marshall Islands</option>
                  <option value="mq">Martinique</option>
                  <option value="mr">Mauritania</option>
                  <option value="mu">Mauritius</option>
                  <option value="yt">Mayotte</option>
                  <option value="mx">Mexico</option>
                  <option value="md">Moldova</option>
                  <option value="mc">Monaco</option>
                  <option value="mn">Mongolia</option>
                  <option value="ms">Montserrat</option>
                  <option value="ma">Morocco</option>
                  <option value="mz">Mozambique</option>
                  <option value="mm">Myanmar</option>
                  <option value="na">Namibia</option>
                  <option value="nr">Nauru</option>
                  <option value="np">Nepal</option>
                  <option value="nl">Netherlands</option>
                  <option value="an">Netherlands Antilles</option>
                  <option value="nc">New Caledonia</option>
                  <option value="nz">New Zealand</option>
                  <option value="ni">Nicaragua</option>
                  <option value="ne">Niger</option>
                  <option value="ng">Nigeria</option>
                  <option value="nu">Niue</option>
                  <option value="nf">Norfolk Island</option>
                  <option value="kp">North Korea</option>
                  <option value="mp">Northern Mariana Islands</option>
                  <option value="no">Norway</option>
                  <option value="om">Oman</option>
                  <option value="pk">Pakistan</option>
                  <option value="pw">Palau</option>
                  <option value="ps">Palestine</option>
                  <option value="pa">Panama</option>
                  <option value="pg">Papua New Guinea</option>
                  <option value="py">Paraguay</option>
                  <option value="pe">Peru</option>
                  <option value="ph">Philippines</option>
                  <option value="pl">Poland</option>
                  <option value="pt">Portugal</option>
                  <option value="pr">Puerto Rico</option>
                  <option value="qa">Qatar</option>
                  <option value="re">Reunion</option>
                  <option value="ro">Romania</option>
                  <option value="ru">Russia</option>
                  <option value="rw">Rwanda</option>
                  <option value="sh">St Helena and dependencies</option>
                  <option value="kn">St. Kitts and Nevis</option>
                  <option value="lc">St. Lucia</option>
                  <option value="pm">St. Pierre and Macuellon</option>
                  <option value="vc">St. Vincent and the Grenadines</option>
                  <option value="ws">Samoa</option>
                  <option value="sm">San Marino</option>
                  <option value="st">Sao Tome and Principe</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="sn">Senegal</option>
                  <option value="sc">Seychelles</option>
                  <option value="sl">Sierra Leone</option>
                  <option value="sg">Singapore</option>
                  <option value="sk">Slovakia</option>
                  <option value="si">Slovenia</option>
                  <option value="sb">Solomon Islands</option>
                  <option value="so">Somalia</option>
                  <option value="za">South Africa</option>
                  <option value="kr">South Korea</option>
                  <option value="es">Spain</option>
                  <option value="lk">Sri Lanka</option>
                  <option value="sd">Sudan</option>
                  <option value="sr">Suriname</option>
                  <option value="sj">Svalbard and Jan Mayen</option>
                  <option value="sz">Swaziland</option>
                  <option value="se">Sweden</option>
                  <option value="ch">Switzerland</option>
                  <option value="sy">Syria</option>
                  <option value="tw">Taiwan</option>
                  <option value="tj">Tajikistan</option>
                  <option value="tz">Tanzania</option>
                  <option value="th">Thailand</option>
                  <option value="tg">Togo</option>
                  <option value="tk">Tokelau</option>
                  <option value="to">Tonga</option>
                  <option value="tt">Trinidad and Tobago</option>
                  <option value="tn">Tunisia</option>
                  <option value="tr">Turkey</option>
                  <option value="tm">Turkmenistan</option>
                  <option value="tc">Turks and Caicos Islands</option>
                  <option value="tv">Tuvalu</option>
                  <option value="ug">Uganda</option>
                  <option value="ua">Ukraine</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="um">
                    Minor Outlying Islands of the United States
                  </option>
                  <option value="uy">Uruguay</option>
                  <option value="vi">U.S. Virgin Islands</option>
                  <option value="uz">Uzbekistan</option>
                  <option value="vu">Vanuatu</option>
                  <option value="va">Vatican City</option>
                  <option value="ve">Venezuela</option>
                  <option value="vn">Vietnam</option>
                  <option value="wf">Wallis and Futuna</option>
                  <option value="eh">Western Sahara</option>
                  <option value="ye">Yemen</option>
                  <option value="zm">Zambia</option>
                  <option value="zw">Zimbabwe</option>
                  <option value="nw">North Carolina</option>
                  <option value="im">Isle of Man</option>
                  <option value="gb">United Kingdom</option>
                  <option value="ks">Republic of Kosovo</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="select2-data-1-l7gt"
                  style={{ width: "100%" }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--multiple"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-disabled="false"
                    >
                      <ul
                        className="select2-selection__rendered"
                        id="select2-ctry_filter-container"
                      />
                      <span className="select2-search select2-search--inline">
                        <textarea
                          className="select2-search__field"
                          type="search"
                          tabIndex={0}
                          autoCorrect="off"
                          autoCapitalize="none"
                          spellCheck="false"
                          role="searchbox"
                          aria-autocomplete="list"
                          autoComplete="off"
                          aria-label="Search"
                          aria-describedby="select2-ctry_filter-container"
                          placeholder="Filter by country"
                          style={{ width: "100%" }}
                          defaultValue={""}
                        />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <button
                className="btn btn-success btn-outline btn-xs"
                id="search-btn"
              >
                Search
                <i className="fa fa-search" />
              </button>
              <button
                className="btn btn-danger btn-outline btn-xs"
                onclick="location.href='https://www.abraa.com/new-dashboard/business-exchange'"
                id="search-btn"
              >
                Reset Filter
                <i className="fa fa-undo" />
              </button>
            </div>
          </div>
        </div>
      </fieldset>
      <br />
      <div className="info-container">
        <div className="col-smd-3">
          <span className="label label-success">0</span> Total Leads Received
          <hr />
        </div>
        <div className="col-smd-3">
          <span className="label label-primary" /> Opened Leads
          <hr />
        </div>
        <div className="col-smd-3">
          <span className="label label-danger">0</span> Remainig Leads
          <hr />
        </div>
        <div className="col-smd-3">
          <span className="label label-info">0 </span> Remainig Leads Per Year
          <hr />
        </div>
        <div className="col-smd-3">
          <span className="label label-default">0 </span> Remainig Leads Per
          Month
          <hr />
        </div>
      </div>
      <hr />
      <div className="new-row row leads-content">
        <div className="col-md-12 product-list text-center row new-row">
          <div className="d-flex justify-content-center align-item-center">
            <img
              src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg"
              alt="no review icon"
              className="img-responsive mr-30"
            />
            <div className="review-content">
              <h2>Sorry , No buyers yet!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
