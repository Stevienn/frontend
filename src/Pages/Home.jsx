import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { NewArrival } from '../Components/NewArrival/NewArrival'
import { Subscribe } from '../Components/Subscribe/Subscribe';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Subscribe />
      <NewArrival />
    </div>
  )
}
