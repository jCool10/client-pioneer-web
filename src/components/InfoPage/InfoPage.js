import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import RemainingItem from '../RemainingItem/RemainingItem';
import './InfoPage.scss'

export default function InfoPage(props) {
  const { eventData } = useSelector((state) => state.EventReducer);

  const currentEvent = eventData.filter(event => event.id === window.location.pathname.split('/')[2])

  const createMarkup = (value) => {
    return { __html: value };
  };

  const renderRemainingItem = () => {
    return eventData.filter(event => event.id !== window.location.pathname.split('/')[2]).map((item, index) => {
      return <RemainingItem item={item} />
    })
  }

  return (
    <section className='grid grid-cols-12 gap-[50px] infoPage'>
      <div className="col-span-8 currentEvent">
        <h2>{currentEvent[0].title}</h2>
        <div className="indicator"></div>

        <div dangerouslySetInnerHTML={createMarkup(currentEvent[0].content)} />
      </div>
      <div className="col-span-4 remainingEvent">
        {renderRemainingItem()}
      </div>
    </section>
  )
}
