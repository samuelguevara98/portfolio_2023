import React from "react";
import Samg from "../assets/samg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-amber-600'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Full Stack Developer
          </h2>

          <p className='text-slate-100 py-4 max-w-md'>
            I completed the UNC Coding Bootcamp in 2020 as part of the
            distinguished COVID Cohort. Woo-hoo! I currently have 8 years of
            experience with HTML and CSS and have 3 years of experience with
            Git, UI, UX, API, Graphic Desings, React.js and a ton of other
            coding languages. Check out my portfolio to see the rest!
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <AiOutlineArrowRight
                  size={17}
                  className='ml-1'
                />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Samg}
            alt='my portfolio'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
