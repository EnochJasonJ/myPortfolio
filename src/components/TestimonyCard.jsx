import React from 'react'
import Tilt from 'react-parallax-tilt'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const testimonies = [
  {
    id: 1,
    message: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    author: "Author 1",
    role: "Role 1"
  },
  {
    id: 2,
    message: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    author: "Author 2",
    role: "Role 2"
  },
  {
    id: 3,
    message: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    author: "Author 3",
    role: "Role 3"
  },
  {
    id: 4,
    message: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    author: "Author 4",
    role: "Role 4"
  },
  {
    id: 5,
    message: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    author: "Author 5",
    role: "Role 5"
  },
]

function TestimonyCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // you can adjust this for responsiveness
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className='mx-auto mt-10 max-w-6xl px-4'>
      <Slider {...settings}>
        {testimonies.map((testimony)=>(
        <div key={testimony.id} className='p-5'>
          <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          transitionSpeed={5000}
          glareEnable={true}
          glareColor= 'lightpink'
          gyroscope={true}
          className="h-[350px] w-auto rounded">
          <div className="h-full w-full rounded-xl bg-[#091533] gap-10 flex flex-col items-center justify-center p-5">
            <div>
              <h1 className='font-bold text-5xl'>"</h1>
              <h1 className='tracking-[2px] text-xl'>{testimony.message}</h1>
              <div className='mt-10'>
                  <p> <span className='text-blue-500'>@</span> {testimony.author}</p>
                  <p className='text-sm text-slate-600'>{testimony.role}</p>
              </div>
            </div>
          </div>
        </Tilt>
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default TestimonyCard