import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>I’m Darshan, a freelancer with 7 years of experience in delivering high-quality digital solutions. Specializing in UI/UX design using Figma, website development, app development, and WordPress, I bring your ideas to life with precision and creativity. Whether you're looking for an intuitive user interface, a responsive website, or a fully functional app, I focus on creating seamless and engaging digital experiences. With a commitment to quality and client satisfaction, I provide personalized solutions tailored to meet your unique needs. Let’s work together to make your vision a reality!</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
