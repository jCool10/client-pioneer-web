import React from 'react';
import './EventCard.scss';

export default function EventCard(props) {
  console.log(props.item);
  const { id, title, img } = props.item

  return (
    <div className="eventCard">
      <div className="cardContainer">
        <div className="cardImg" style={{ backgroundImage: `url(${img})` }}>
          <div className="cardOverlay" />
          <h2>
            <a rel="noopener noreferrer" href={`/events/${id}`}>
              {title}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
