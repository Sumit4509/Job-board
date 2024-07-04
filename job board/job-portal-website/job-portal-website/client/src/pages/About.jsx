import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to JobSearcher, where opportunities meet talents, and careers are crafted. Our mission is to bridge the gap between employers and job seekers, creating a seamless platform that empowers individuals to find their dream careers and businesses to discover exceptional talent.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        At JobSearcher, we understand that the right job can transform lives, and the right employee can revolutionize a business. With this belief at our core, we've built a user-friendly job portal that goes beyond traditional recruitment methods. We're not just a platform; we're your partners in the journey to professional success.
        </p>
        <p>
          <b>Our Team members-</b>
          <ol >
            <li>Aaryan Kumar - 21BCE10067</li>
            <li>Mangesh Jaybhaye - 21BCE10072</li>
            <li>Puneet Sharma - 21BCE10647</li>
            <li>Aryan Kashyap - 21BCE11015</li>
            <li>Aashi Shrivastava - 21BSA10093</li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default About;
