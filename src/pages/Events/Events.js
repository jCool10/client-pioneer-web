import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import SliderEvent from '../../components/SliderEvent/SliderEvent';
// import mainImg from '../../assets/pioneer_entry_challenge.jpg';
import quote from '../../assets/quote.png'

import './Event.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const { eventData, experienceData } = useSelector((state) => state.EventReducer);

  const navigate = useNavigate();

  return (
    <section className='event'>
      <div className="carousel">
        <div className="carousel_content">
          <h1>{eventData[0].title}</h1>
          <p>
            {eventData[0].introduce}
          </p>
          <button onClick={() => {
            navigate(`/events/${eventData[0].id}`)
          }}>Tìm hiểu thêm</button>
        </div>
        <div className="carousel_img">
          <img src={eventData[0].img} alt="" />
        </div>
      </div>
      <div className="event">
        <h5 className='event_title'>Sự kiện mới nhất</h5>
        <SliderEvent rows={1} card={EventCard} data={eventData.filter(event => event.id !== eventData[0].id)} />
      </div>
      <div className="experience">
        <h5>Kinh nghiệm</h5>
        <img className='quote top' src={quote} alt="" />
        <div className='card'>
          <SliderEvent rows={1} card={ExperienceCard} data={experienceData} />

        </div>
        <img className='quote bottom' src={quote} alt="" />
      </div>
    </section>
  );
}
