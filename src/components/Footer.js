import React from 'react';
import './styles.css'
 
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className=" py-3">
            <hr/>
            <div className="container">
                <div className="row footer-top py-5">
                     
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li>< Link  className="link-nav-footer">About Online Service</Link></li>
                            <li>< Link  className="link-nav-footer">Read Our Blog</Link></li>
                            <li>< Link  className="link-nav-footer">Sign up to deliver</Link></li>
                            <li>< Link  className="link-nav-footer">Add your shop</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li>< Link  className="link-nav-footer">Get Help</Link></li>
                            <li>< Link  className="link-nav-footer">Read FAQ</Link></li>
                            <li>< Link  className="link-nav-footer">View All Cities</Link></li>
                            <li>< Link  className="link-nav-footer">Mall near us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-between align-items-center">
                    <small className="text-secondary">Copyright &copy;  2020 Online Service </small>
                    <ul className="list-inline">
                        <li className="list-inline-item ml-3"><a  >Privacy Policy.</a></li>
                        <li className="list-inline-item  ml-3"><a  >Terms of Use</a></li>
                        <li className="list-inline-item  ml-3"><a  >Pricing</a></li>
                    </ul>

                </div>
            </div>
        </footer>
    );
};

export default Footer;