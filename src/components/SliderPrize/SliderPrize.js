import React from 'react'
import Slider from 'react-slick';
import PrizeCard from '../PrizeCard/PrizeCard';
import './SliderPrize.scss'

export const SliderPrize = (props) => {
  const { rows, data } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 2,
    slidesToScroll: 2,
    padding: 20,
  };

  // const renderPrizeCard = () => {
  //   return data?.map((item, index) => {
  //     return <PrizeCard key={index} item={item} />;
  //   });
  // };


  return (
    <div className='SliderPrize'>
      <Slider {...settings}>
        {/* {renderPrizeCard()} */}
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
      </Slider>
    </div>
  )
}
