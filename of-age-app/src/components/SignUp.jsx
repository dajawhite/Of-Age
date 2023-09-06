import React, { useEffect } from 'react';

function SignUp(){

    useEffect(() => {
        if (window.jQuery) {
            const $ = window.jQuery;
            window.fnames = new Array(); 
            window.ftypes = new Array();
            fnames[0]='EMAIL';
            ftypes[0]='email';
            fnames[1]='FNAME';
            ftypes[1]='text';
            fnames[2]='LNAME';
            ftypes[2]='text';
            fnames[3]='ADDRESS';
            ftypes[3]='address';
            fnames[4]='PHONE';
            ftypes[4]='phone';
            fnames[5]='BIRTHDAY';
            ftypes[5]='birthday';
            window.$mcj = $.noConflict(true);
        }
    }, []);


    return(
        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form action="https://gmail.us21.list-manage.com/subscribe/post?u=a57dc8046dc4ce6754c882c7d&amp;id=018dc653b3&amp;f_id=0092e6e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                        <h2>Be the first to access our community</h2>
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value=""/>
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label>
                            <input type="text" name="FNAME" className="required text" id="mce-FNAME" required value=""/>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label>
                            <input type="text" name="LNAME" className="required text" id="mce-LNAME" required value=""/>
                        </div>
                        <div hidden><input type="hidden" name="tags" value="2960465"/></div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                            <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                        </div>
                        <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                            /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                            <input type="text" name="b_a57dc8046dc4ce6754c882c7d_018dc653b3" tabIndex={-1} value=""/>
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;