import React from 'react'
import EventCreationForm from '@/app/components/EventCreationForm'
import { BackgroundHero } from '@/app/components/BackgroundHero'
import EventForm2 from '@/app/components/EventForm2'

export default function page(){
  return (
    <div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          "url(https://luxurylondon.co.uk/wp-content/uploads/2022/04/boardmasters-uk-festivals-c-shutterstock-Jordan-Crosby.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">

      {/* <EventCreationForm/> */}
      <EventForm2/>
        <div className="max-w-md">
        

      
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
    
    </div>
  )
}
