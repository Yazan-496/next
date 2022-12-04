import React from 'react'

function WelcomeMessage(props) {
     return (
          <div className="welcom_message browse_form_col_2">
               <div className="col-12 p-0">
                    <div className="row">
                         <div className="col-12 col-sm-6">
                              <div className="welcom_message_image" />
                         </div>
                         <div className="col-12 col-sm-6">
                              <div className="py-5 pr-4">
                                   <div className="welcom_message_close">
                                        <i className="fa fa-times" />
                                   </div>
                                   <div className="welcom_message_title">Welcome to Abraa ! </div>
                                   <div className="welcom_message_text">
                                        Subscribe now to receive the Abraa Newsletter with latest products,
                                        best offers and current deals directly to your email !{ " " }
                                   </div>
                                   <div className=" mt-2 mt-md-2 mt-lg-4">
                                        <div className="d-flex flex-wrap">
                                             <span className="col-12 p-0" id="welcome_error" />
                                             <div className="col-12 col-md-4 col-lg-5 px-0 form_one form_one_1">
                                                  <input
                                                       name="welcome_email"
                                                       id="welcome_email"
                                                       placeholder="Email"
                                                       className="welcome_email"
                                                  />
                                             </div>
                                             <div className="col-4 col-md-3 col-lg-2 px-0 form_one form_one_on mt-1 mt-md-0">
                                                  <button
                                                       className="welcome_btn btn-blue"
                                                       onclick="subscribeNow(2)"
                                                  >
                                                       SUBSCRIBE
                                                  </button>
                                             </div>
                                             <p className="newsletter-right-subtitle">
                                                  We'll never share your email address with a third-party.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

     )
}

export default WelcomeMessage
