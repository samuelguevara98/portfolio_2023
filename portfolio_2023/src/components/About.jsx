import React from "react";

const About = () => {
  return (
    <div
      name='about'
      className='w-full bg-amber-600 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-950'>
            About
          </p>
        </div>
        <p className='text-xl'>
          Hi there! I'm Samuel, a Full-Stack Developer and entrepreneur from North
          Carolina with Salvadorian roots. I started coding during high school,
          experimenting with CSS and HTML on a basic WordPress account.
        </p>
        <br />

        <p className='text-xl'>
          I honed my coding skills through the UNC-Chapel Hill Coding Bootcamp,
          where I worked on diverse projects and collaborated with my cohort of
          developers. My professional background includes experience in HVAC,
          warehousing, chemical mixing, and running my own business.
        </p>
        <br />

        <p className='text-xl'>
          Outside of work, I'm a lifelong learner who enjoys watching
          educational videos, reading, cooking, and assisting other businesses
          with their online presence and social media.
        </p>
        <br />

        <p className='text-xl'>
          I believe in finding solutions to challenges and making informed
          decisions. As a business owner, I've dealt with obstacles in
          market research, SEO, sourcing, and regulations, resulting in
          increased sales for my company, Good Thymes.
        </p>
        <br />
        <p className='text-xl'>
          I'm always eager to connect with like-minded individuals in the coding
          and entrepreneurial communities. Let's collaborate and make a positive
          impact together. Feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
