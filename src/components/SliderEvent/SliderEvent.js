import React from 'react';
import Slider from 'react-slick';

export default function SliderEvent(props) {
  const { rows, data } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    padding: 20,
  };

  const renderCard = () => {
    return data?.map((item, index) => {
      return <props.card key={index} item={item} />;
    });
  };

  return (
    <div>
      <Slider {...settings}>{renderCard()}</Slider>
    </div>
  );
}
