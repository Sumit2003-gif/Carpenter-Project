import React from 'react';
import { Link } from 'react-router-dom';
import BrightenSection from '../Componet/Brighteen';
import FlooringSection from '../Componet/FlooringSection';
import HomeChoose from '../Componet/HomeChoose';
import TeamSection from '../Componet/HomeTeams';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import MarqueeSwiper from '../Componet/MarquueeSweipwe';
import PageTop from '../Componet/PageTop';

const About = () => {
  const image = [
    { url: "https://carpent-react.vercel.app/assets/2-0qttj0fo.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
    { url: "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg" },
  ];

  return (
    <div>
      {/* <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'url()',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <nav
            className="space-x-2 text-sm flex justify-center items-center"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="underline">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2">
              ➜
            </span>
            <Link to="/about" aria-current="page" className="underline font-semibold">
              About
            </Link>
          </nav>
        </div>
      </section> */}
      <section>
        <PageTop
        url="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg"
        header="About Us"
        currentPage="About"
        breadcrumbUrl="/about"/>
      </section>

      <main>
        <section>
          <BrightenSection />
        </section>

        <section>
          <FlooringSection />
        </section>

        <section className="px-4">
          <HomeChoose />
        </section>

        {/* Marquee-like Swiper */}
        <section>
          <MarqueeSwiper/>
        </section>

        <section>
          <TeamSection />
        </section>
      </main>
    </div>
  );
};

export default About;
