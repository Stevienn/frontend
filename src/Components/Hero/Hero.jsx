import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import razer from '../Assets/Razer-Hero.jpg';
import hyperx from '../Assets/HyperX-Hero.jpg';
import logitech from '../Assets/Logitech-Hero.jpg';
import setup1img from '../Assets/Setup1-Hero.jpg';
import setup2img from '../Assets/Setup2-Hero.jpg';
import setup3img from '../Assets/Setup3-Hero.jpg';
import setup4img from '../Assets/Setup4-Hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHandshake, faAward, faBolt, faUserShield } from '@fortawesome/free-solid-svg-icons';


export const Hero = () => {
  return (
    <div className='grid-container'>
        <aside className="left-area">
            <img className="aside-img" src={setup1img} alt="" />
            <img className="aside-img" src={setup2img} alt="" />
        </aside>
        <main className="main-area">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="img-main"
                    src={razer}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-main"
                    src={hyperx}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-main"
                    src={logitech}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
        <aside className="right-area">
            <img className="aside-img2" src={setup3img} alt="" />
            <img className="aside-img2" src={setup4img} alt="" />
        </aside>
        <footer className="bottom-area">
            <section className='cards'>
                <article className="card1">
                    <FontAwesomeIcon icon={faTruck} className='icon'/>
                    <article className='desc'>
                        <h1>On-time Delivery</h1>
                        <p>Barang sampai di tujuan sesuai estimasi paket pengiriman yang dipilih.</p>
                    </article>
                </article>
                <article className="card2">
                    <FontAwesomeIcon icon={faHandshake} className='icon'/>
                    <article className='desc'>
                        <h1>Trusted Since 1945</h1>
                        <p>Lebih dari 500.000 customer sukses melakukan transaksi.</p>
                    </article>
                </article>
                <article className="card3">
                    <FontAwesomeIcon icon={faAward} className='icon'/>
                    <article className='desc'>
                        <h1>100% Original</h1>
                        <p>Barang yang kami jual dijamin 100% original bukan KW.</p>
                    </article>
                </article>
                <article className="card4">
                    <FontAwesomeIcon icon={faUserShield} className='icon'/>
                    <article className='desc'>
                        <h1>Official Warranty</h1>
                        <p>Garansi resmi untuk semua barang sesuai masing masing brand.</p>
                    </article>
                </article>
            </section>
            
        </footer>
    </div>
  )
}
