import React from 'react';
import './Footer.css';
import Payment from '../Assets/Payment.png';
import Badges from '../Assets/Badges.png'

export const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="footer-main">
            <section className="section1-footer">
                <h2>CUSTOMER CARE</h2>
                <hr />
                <h1>Vien Gaming Store - Est. 1945</h1>
                <p>Jakarta - Cirebon - Bandung</p>
                <h3>Whatsapp : </h3><h4>+62821 8800 169</h4>
                <h3>Line@ : </h3><h4>@vgstore (use@)</h4>
            </section>
            <section className="section2-footer">
                <h2>OUR SERVICES</h2>
                <hr />
                <a href="#">About Us</a>
                <a href="#">FAQ</a>
                <a href="#">Return and Warranty</a>
                <a href="#">Driver Download</a>
            </section>
            <section className="section3-footer">
                <h2>PAYMENT METHODS</h2>
                <hr />
                <img src={Payment} alt="" />
            </section>
            <section className="section4-footer">
                <h2>KEAMANAN & PRIVASI</h2>
                <hr />
                <img src={Badges} alt="" />
            </section>
        </div>
        <div className="footer-sub">
            <h2>Copyright © 2024 VG Store - All Right Reserved</h2>
        </div>
    </footer>
  )
}
