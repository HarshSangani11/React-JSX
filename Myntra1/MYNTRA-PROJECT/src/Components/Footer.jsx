
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-light text-dark py-4">
            <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-3 mb-3">
                        <h3 className="fw-bold mb-2">ONLINE SHOPPING</h3>
                        <ul className="list-unstyled">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>
                    </div>

                                <div className="col-6 col-md-3 mb-3">
                        <h3 className="fw-bold mb-2">CUSTOMER POLICIES</h3>
                        <ul className="list-unstyled">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Privacy Policy</li>
                            <li>Grievance Officer</li>
                        </ul>
                    </div>

            
                    <div className="col-6 col-md-3 mb-3">
                        <h3 className="fw-bold mb-2">USEFUL LINKS</h3>
                        <ul className="list-unstyled">
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Site Map</li>
                            <li>Corporate Information</li>
                            <li>Whitehat</li>
                            <li>Cleartrip</li>
                        </ul>
                    </div>

                               <div className="col-6 col-md-3 mb-3">
                        <h3 className="fw-bold mb-2">POPULAR SEARCHES</h3>
                        <p className="small">
                            Makeup, Dresses For Girls, T-Shirts, Sandals, Headphones,
                            Babydolls, Blazers For Men, Handbags, and more.
                        </p>
                    </div>
                </div>

            
                <div className="mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3">
                    <div className="text-center text-md-start mb-3 mb-md-0">
                        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
                        <p>Return within 14 days of receiving your order</p>
                    </div>

            
                    <div className="text-center mb-3 mb-md-0">
                        <h3 className="fw-bold mb-2">KEEP IN TOUCH</h3>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#"><img className="img-fluid" src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="Facebook" /></a>
                            <a href="#"><img className="img-fluid" src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="Twitter" /></a>
                            <a href="#"><img className="img-fluid" src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="YouTube" /></a>
                            <a href="#"><img className="img-fluid" src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="Instagram" /></a>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="fw-bold mb-2">EXPERIENCE MYNTRA APP ON MOBILE</h3>
                        <div className="d-flex justify-content-center gap-3">
                            <img
                                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                                alt="Get it on Google Play"
                                className="img-fluid" style={{ height: '40px' }}
                            />
                            <img
                                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                                alt="Download on App Store"
                                className="img-fluid" style={{ height: '40px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center small text-muted">
                © 2024 www.myntra.com. All rights reserved.
            </div>
        </footer>
    );
}
