import React from "react"

function Modal() {
  return (
    <div className="modal fade" id="buy_modal_category" data-keyboard="true" data-backdrop="false">
      <div className="modal-body lab-modal-body" style={{ overflowY: "hidden", overflowX: "hidden" }}>
        <div className="out topheaderpopup">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
          <h3 className="category-pop-heading">ARE YOU SEARCHING FOR Other Mobile Phones PRODUCTS ?</h3>
          <h4 className="category-pop-sub">Allow us to Help, Please Enroll Your Request</h4>
        </div>
        <div className="out topmiddlepopup">
          <form method="post" name="request-product-form" id="request-product-form">
            <div className=" form-group">
              <input type="hidden" id="single_number" name="single_number" defaultValue={0} />
              <input
                type="text"
                id="pname"
                name="pname"
                placeholder="Product Name"
                data-error="#name_error"
                defaultValue
                className="form-control  fullbord stop_special_characters"
              />
              <div id="name_error" />
            </div>
            <input type="hidden" name="item_id" id="item_id" defaultValue />
            <input type="hidden" name="isLogged" id="isLogged" defaultValue={0} />
            <input type="hidden" name="seller_id" id="seller_id" defaultValue />
            <input type="hidden" name="category" id="category" defaultValue={0} />
            <input type="hidden" name="shipval" id="shipval" defaultValue={0} />
            <div className=" form-group" style={{ marginBottom: "10px !important" }}>
              <div className="row">
                <div className="col-md-12">
                  <div className="search_boxnedd">
                    <input
                      maxLength={20}
                      type="text"
                      placeholder="Quantity"
                      className="form-control inputnedd  fullbord "
                      name="purl"
                      id="purl"
                      data-error="#ERROR"
                      defaultValue
                    />
                    <select className="form-control rmsUnits" id="pieces" name="pieces">
                      <option value={1}>Unit</option>
                      <option value={2}>Kilogram</option>
                      <option value={3}>Gram</option>
                      <option value={4}>Box</option>
                      <option value={5}>Barrel</option>
                      <option value={6}>Carton</option>
                      <option value={7}>Bushel</option>
                      <option value={8}>Case</option>
                      <option value={9}>Centimeter</option>
                      <option value={10}>Container 40-Foot </option>
                      <option value={11}>Container 20-Foot </option>
                      <option value={12}>Cubic Foot</option>
                      <option value={13}>Cubic Inch</option>
                      <option value={14}>Cubic Meter</option>
                      <option value={15}>Cubic Yard</option>
                      <option value={16}>Degrees Celsius</option>
                      <option value={17}>Degrees Fahrenheit</option>
                      <option value={18}>Dozen</option>
                      <option value={19}>Dram</option>
                      <option value={20}>Fluid Ounce</option>
                      <option value={21}>Foot</option>
                      <option value={22}>Chain</option>
                      <option value={23}>Furlong</option>
                      <option value={24}>Gallon</option>
                      <option value={25}>Gill</option>
                      <option value={26}>Grain</option>
                      <option value={27}>Ampere</option>
                      <option value={28}>Gross</option>
                      <option value={29}>Hectare</option>
                      <option value={30}>Hertz</option>
                      <option value={31}>Inch</option>
                      <option value={32}>Kiloampere</option>
                      <option value={33}>Bag</option>
                      <option value={34}>Kilohertz</option>
                      <option value={35}>Kilometer</option>
                      <option value={36}>Kiloohm</option>
                      <option value={37}>Kilovolt</option>
                      <option value={38}>Kilowatt</option>
                      <option value={39}>Liter</option>
                      <option value={40}>Long Ton</option>
                      <option value={41}>Megahertz</option>
                      <option value={42}>Meter</option>
                      <option value={43}>Metric Ton</option>
                      <option value={44}>Mile</option>
                      <option value={45}>Milliampere</option>
                      <option value={46}>Milligram</option>
                      <option value={47}>Millihertz</option>
                      <option value={48}>Milliliter</option>
                      <option value={49}>Millimeter</option>
                      <option value={50}>Milliohm</option>
                      <option value={51}>Millivolt</option>
                      <option value={52}>Milliwatt</option>
                      <option value={53}>Nautical Mile</option>
                      <option value={54}>Ohm</option>
                      <option value={55}>Ounce</option>
                      <option value={56}>Pack</option>
                      <option value={57}>Pallet</option>
                      <option value={58}>Pair</option>
                      <option value={59}>Parcel</option>
                      <option value={60}>Perch</option>
                      <option value={61}>Piece</option>
                      <option value={62}>Pint</option>
                      <option value={63}>Plant</option>
                      <option value={64}>Pole</option>
                      <option value={65}>Pound</option>
                      <option value={66}>Quart</option>
                      <option value={67}>Quarter</option>
                      <option value={68}>Rod</option>
                      <option value={69}>Roll</option>
                      <option value={70}>Set</option>
                      <option value={71}>Sheet</option>
                      <option value={72}>Short Ton</option>
                      <option value={73}>Square Centimeter</option>
                      <option value={74}>Square Foot</option>
                      <option value={75}>Square Inch</option>
                      <option value={76}>Square Meter</option>
                      <option value={77}>Square Mile</option>
                      <option value={78}>Square Yard</option>
                      <option value={79}>Stone</option>
                      <option value={80}>Strand</option>
                      <option value={81}>Ton</option>
                      <option value={82}>Tonne</option>
                      <option value={83}>Tray</option>
                      <option value={84}>Cubic Centimeter</option>
                      <option value={86}>Volt</option>
                      <option value={87}>Watt</option>
                      <option value={88}>Wp</option>
                      <option value={89}>Yard</option>
                      <option value={90}>HD Bag</option>
                      <option value={91}>Plastic Can</option>
                      <option value={92}>Tin Cans</option>
                      <option value={93}>Pet Bottles</option>
                      <option value={94}>Jar</option>
                      <option value={95}>Tin</option>
                      <option value={96}>Glass</option>
                    </select>
                    <select className="form-control" id="buying_frequency" name="buying_frequency">
                      <option value={1}>One time</option>
                      <option value={2}>Daily</option>
                      <option value={3}>Weekly</option>
                      <option value={4}>Monthly</option>
                      <option value={5}>Quarterly</option>
                      <option value={6}>Semi Annually</option>
                      <option value={7}>Annually</option>
                      <option value={8}>Other</option>
                    </select>
                    <input type="hidden" id="buying_pieces_text" name="buying_pieces_text" />
                    <input type="hidden" id="buying_frequency_text" name="buying_frequency_text" />
                  </div>
                  <div id="ERROR" />
                </div>
              </div>
            </div>
            <input type="hidden" name="category" id="btCategory" />
            <div className=" form-group">
              <input
                type="text"
                id="fullName"
                placeholder="Your Name"
                defaultValue
                name="fullName"
                className="form-control fullbord"
                data-error="#phone_name"
              />
              <div id="phone_name" />
            </div>
            <div className=" form-group">
              <input
                type="email"
                defaultValue
                id="emailbuy"
                name="emailbuy"
                className="form-control  fullbord"
                placeholder="Your Email"
                data-error="#phone_email"
              />
              <div id="phone_email" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className=" search_boxnedd">
                  <select
                    style={{ width: "30%", float: "left" }}
                    id="country"
                    name="country"
                    className="form-control"
                    data-error="#phone_count"
                  >
                    <option value={-1}>Country</option>
                    <option value="ae">UAE </option>
                    <option value="af">Afghanistan </option>
                    <option value="al">Albania </option>
                    <option value="dz">Algeria </option>
                    <option value="as">American Samoa </option>
                    <option value="ad">Andorra </option>
                    <option value="ao">Angola </option>
                    <option value="ai">Anguilla </option>
                    <option value="aq">Antarctica </option>
                    <option value="ag">Antigua and Barbuda </option>
                    <option value="ar">Argentina </option>
                    <option value="am">Armenia </option>
                    <option value="aw">Aruba </option>
                    <option value="au">Australia </option>
                    <option value="at">Austria </option>
                    <option value="az">Azerbaijan </option>
                    <option value="bs">Bahamas </option>
                    <option value="bh">Bahrain </option>
                    <option value="bd">Bangladesh </option>
                    <option value="bb">Barbados </option>
                    <option value="by">Belarus (Belarus) </option>
                    <option value="be">Belgium </option>
                    <option value="bz">Belize </option>
                    <option value="bj">Pinyin </option>
                    <option value="bm">Bermuda </option>
                    <option value="bt">Bhutan </option>
                    <option value="bo">Bolivia </option>
                    <option value="ba">Bosnia and Herzegovina </option>
                    <option value="bw">Botswana </option>
                    <option value="bv">Bouvet Island </option>
                    <option value="br">Brazil </option>
                    <option value="io">British Indian Ocean Territory </option>
                    <option value="vg">British Virgin Islands </option>
                    <option value="bn">Brunei </option>
                    <option value="bg">Bulgaria </option>
                    <option value="bf">Burkina Faso </option>
                    <option value="bi">Burundi </option>
                    <option value="kh">Campodia </option>
                    <option value="cm">Cameroon </option>
                    <option value="ca">Canada </option>
                    <option value="cv">island of Cape Verde </option>
                    <option value="ky">Cayman Islands </option>
                    <option value="cf">Central African Republic </option>
                    <option value="td">Chad </option>
                    <option value="cl">Chile </option>
                    <option value="cn">China </option>
                    <option value="cx">Christmas Island </option>
                    <option value="cc">Cocos (Keeling) </option>
                    <option value="co">Columbia </option>
                    <option value="km">Comoros </option>
                    <option value="cg">Congo </option>
                    <option value="ck">Cook Islands </option>
                    <option value="cr">Costa Rica </option>
                    <option value="hr">Croatia </option>
                    <option value="cu">Cuba </option>
                    <option value="cy">Cyprus </option>
                    <option value="cz">Czech Republic </option>
                    <option value="cd">Democratic Republic of Congo </option>
                    <option value="dk">Denmark </option>
                    <option value="dj">Djibouti </option>
                    <option value="dm">Dominica </option>
                    <option value="do">Dominican Republic </option>
                    <option value="tl">East Timor </option>
                    <option value="ec">Ecuador </option>
                    <option value="eg">Egypt </option>
                    <option value="sv">El Salvador </option>
                    <option value="gq">Equatorial Guinea </option>
                    <option value="er">Eritrea </option>
                    <option value="ee">Estonia </option>
                    <option value="et">Ethiopia </option>
                    <option value="fk">Falkland Islands </option>
                    <option value="fo">Faroe Islands </option>
                    <option value="fm">United States of Micronesia </option>
                    <option value="fj">Fiji </option>
                    <option value="fi">Finland </option>
                    <option value="fr">France </option>
                    <option value="gf">French Guiana </option>
                    <option value="pf">French Polynesia </option>
                    <option value="ga">Gabon </option>
                    <option value="gm">Gambia </option>
                    <option value="ge">Georgia </option>
                    <option value="de">Germany </option>
                    <option value="gh">Ghana </option>
                    <option value="gi">Gibraltar </option>
                    <option value="gr">Greece </option>
                    <option value="gl">Greenland </option>
                    <option value="gd">Grenada </option>
                    <option value="gp">GUADALUPE </option>
                    <option value="gu">Guam </option>
                    <option value="gt">Guatemala </option>
                    <option value="gn">Guinea </option>
                    <option value="gw">Guinea - Bissau </option>
                    <option value="gy">French Guiana </option>
                    <option value="ht">Haiti </option>
                    <option value="hm">Heard Island and McDonald Islands </option>
                    <option value="hn">Honduras </option>
                    <option value="hk">Hong Kong </option>
                    <option value="hu">Hungary (Hungary) </option>
                    <option value="is">Iceland </option>
                    <option value="in">India </option>
                    <option value="id">Indonesia </option>
                    <option value="ir">Iran </option>
                    <option value="iq">Iraq </option>
                    <option value="ie">Ireland </option>
                    <option value="it">Italy </option>
                    <option value="ci">Ivory Coast </option>
                    <option value="jm">Jamaica </option>
                    <option value="jp">Japan </option>
                    <option value="jo">Jordan </option>
                    <option value="kz">Kazakhstan </option>
                    <option value="ke">Kenya </option>
                    <option value="ki">Kiribati Islands </option>
                    <option value="kw">Kuwait </option>
                    <option value="kg">Kyrgyzstan </option>
                    <option value="la">Laos </option>
                    <option value="lv">Latvia </option>
                    <option value="lb">Lebanon </option>
                    <option value="ls">Lesotho </option>
                    <option value="lr">Liberia </option>
                    <option value="ly">Libya </option>
                    <option value="li">Liechtenstein </option>
                    <option value="lt">Lithuania </option>
                    <option value="lu">Luxembourg </option>
                    <option value="mo">Macao </option>
                    <option value="mk">Macedonia </option>
                    <option value="mg">Madagascar </option>
                    <option value="mw">Malawi </option>
                    <option value="my">Malaysia </option>
                    <option value="mv">Maldives </option>
                    <option value="ml">Mali </option>
                    <option value="mt">Malta </option>
                    <option value="mh">Marshall Islands </option>
                    <option value="mq">Martinique </option>
                    <option value="mr">Mauritania </option>
                    <option value="mu">Mauritius </option>
                    <option value="yt">Mayotte </option>
                    <option value="mx">Mexico </option>
                    <option value="md">Moldova </option>
                    <option value="mc">Monaco </option>
                    <option value="mn">Mongolia </option>
                    <option value="ms">Montserrat </option>
                    <option value="ma">Morocco </option>
                    <option value="mz">Mozambique </option>
                    <option value="mm">Myanmar </option>
                    <option value="na">Namibia </option>
                    <option value="nr">Nauru </option>
                    <option value="np">Nepal </option>
                    <option value="nl">Netherlands </option>
                    <option value="an">Netherlands Antilles </option>
                    <option value="nc">New Caledonia </option>
                    <option value="nz">New Zealand </option>
                    <option value="ni">Nicaragua </option>
                    <option value="ne">Niger </option>
                    <option value="ng">Nigeria </option>
                    <option value="nu">Niue </option>
                    <option value="nf">Norfolk Island </option>
                    <option value="kp">North Korea </option>
                    <option value="mp">Northern Mariana Islands </option>
                    <option value="no">Norway </option>
                    <option value="om">Oman </option>
                    <option value="pk">Pakistan </option>
                    <option value="pw">Palau </option>
                    <option value="ps">Palestine </option>
                    <option value="pa">Panama </option>
                    <option value="pg">Papua New Guinea </option>
                    <option value="py">Paraguay </option>
                    <option value="pe">Peru </option>
                    <option value="ph">Philippines </option>
                    <option value="pl">Poland </option>
                    <option value="pt">Portugal </option>
                    <option value="pr">Puerto Rico </option>
                    <option value="qa">Qatar </option>
                    <option value="re">Reunion </option>
                    <option value="ro">Romania </option>
                    <option value="ru">Russia </option>
                    <option value="rw">Rwanda </option>
                    <option value="sh">St Helena and dependencies </option>
                    <option value="kn">St. Kitts and Nevis </option>
                    <option value="lc">St. Lucia </option>
                    <option value="pm">St. Pierre and Macuellon </option>
                    <option value="vc">St. Vincent and the Grenadines </option>
                    <option value="ws">Samoa </option>
                    <option value="sm">San Marino </option>
                    <option value="st">Sao Tome and Principe </option>
                    <option value="sa">Saudi Arabia </option>
                    <option value="sn">Senegal </option>
                    <option value="sc">Seychelles </option>
                    <option value="sl">Sierra Leone </option>
                    <option value="sg">Singapore </option>
                    <option value="sk">Slovakia </option>
                    <option value="si">Slovenia </option>
                    <option value="sb">Solomon Islands </option>
                    <option value="so">Somalia </option>
                    <option value="za">South Africa </option>
                    <option value="kr">South Korea </option>
                    <option value="es">Spain </option>
                    <option value="lk">Sri Lanka </option>
                    <option value="sd">Sudan </option>
                    <option value="sr">Suriname </option>
                    <option value="sj">Svalbard and Jan Mayen </option>
                    <option value="sz">Swaziland </option>
                    <option value="se">Sweden </option>
                    <option value="ch">Switzerland </option>
                    <option value="sy">Syria </option>
                    <option value="tw">Taiwan </option>
                    <option value="tj">Tajikistan </option>
                    <option value="tz">Tanzania </option>
                    <option value="th">Thailand </option>
                    <option value="tg">Togo </option>
                    <option value="tk">Tokelau </option>
                    <option value="to">Tonga </option>
                    <option value="tt">Trinidad and Tobago </option>
                    <option value="tn">Tunisia </option>
                    <option value="tr">Turkey </option>
                    <option value="tm">Turkmenistan </option>
                    <option value="tc">Turks and Caicos Islands </option>
                    <option value="tv">Tuvalu </option>
                    <option value="ug">Uganda </option>
                    <option value="ua">Ukraine </option>
                    <option value="uk">United Kingdom </option>
                    <option value="us">United States </option>
                    <option value="um">Minor Outlying Islands of the United States </option>
                    <option value="uy">Uruguay </option>
                    <option value="vi">U.S. Virgin Islands </option>
                    <option value="uz">Uzbekistan </option>
                    <option value="vu">Vanuatu </option>
                    <option value="va">Vatican City </option>
                    <option value="ve">Venezuela </option>
                    <option value="vn">Vietnam </option>
                    <option value="wf">Wallis and Futuna </option>
                    <option value="eh">Western Sahara </option>
                    <option value="ye">Yemen </option>
                    <option value="zm">Zambia </option>
                    <option value="zw">Zimbabwe </option>
                    <option value="nw">North Carolina </option>
                    <option value="im">Isle of Man </option>
                    <option value="gb">United Kingdom </option>
                    <option value="ks">Republic of Kosovo </option>
                  </select>
                  <div id="phone_count" />
                  <div style={{ width: "64%", float: "left" }} className="country_number_main">
                    <input
                      type="tel"
                      id="phonebuy"
                      className="numberonly"
                      name="phonebuy"
                      placeholder="Telephone Number"
                      data-error="#phone_error"
                      defaultValue
                    />
                    <span id="mobile-number" />
                  </div>
                  {"{"}/* <div id="phone_error" /> */{"}"}
                </div>
              </div>
              <input type="hidden" id="code" name="code" defaultValue />
              <input type="hidden" id="full_number" name="full_number" defaultValue />
            </div>
            <div className="btn_suceess text-center">
              <button
                type="submit"
                id="buttun_de"
                className="btn btn-primary btn-plain btn btn-lg popup-button btn_suceess_button "
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="bottomfooterpopup">
          <img
            src="https://s101.abraacdn.com/files/catfiles/5104.jpg"
            style={{ maxWidth: "80%" }}
            alt="Other Mobile Phones"
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
