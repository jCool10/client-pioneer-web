import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../MemberCard/MemberCard';
import styleSlick from './MultipleRowSlick.module.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    ></div>
  );
}

export default function SliderCard(props) {
  const { members, rows, slidesToShow } = props;
  const settings = {
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    rows: rows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderCard = () => {
    return members?.map((member, index) => {
      return <Card member={member} />;
    });
  };

  return (
    <div>
      <Slider {...settings}>{renderCard()}</Slider>
    </div>
  );
}
