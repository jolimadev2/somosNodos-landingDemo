import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FollowUs from '../components/FollowUs';
import AboutUs from '../components/AboutUs';


export const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-OpenSans">
      <Header />
      <main>
       <section id="about-us" className='py-8'>
       <AboutUs/>
       </section>
        <section id="episodes" className="py-8">
          <Cards />
        </section>
        <section id="follow-us" className="py-8">
          <FollowUs />
        </section>
        <section id="newsletter" className="py-8">
          <CallToAction />
        </section>
      </main>
      <Footer/>
    </div>
  )
}
