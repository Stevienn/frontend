import React from 'react';
import './Subscribe.css'

export const Subscribe = () => {
  return (
    <section className='subscribe-container'>
        <main className='subscribe-main'>
            <h1>Dapatkan Diskon dan Promo Melalui Email</h1>
            <p>Subscribe dan berlangganan untuk mendapatkan update menarik</p>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </main>
        
    </section>
  )
}
