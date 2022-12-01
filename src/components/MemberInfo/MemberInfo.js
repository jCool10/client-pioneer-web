import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SliderPrize } from '../SliderPrize/SliderPrize';

import './MemberInfo.scss';

export default function MemberInfo(props) {
  const { memberDetail } = useSelector((state) => state.MemberReducer);

  const {
    id,
    name,
    classes,
    position,
    describe,
    img,
    strengths,
    contact: { facebook, gmail, github, linkedin },
  } = memberDetail[0];

  const navigate = useNavigate();

  if (id === 'dao-duy-tuan')
    return (
      <section>
        <div className="user_profile">
          <div className="user_option box-outer">
            <div className="user_avatar">
              <img src={`.${img}`} alt="" />
            </div>
            <h4>{name}</h4>
            <h5>{position}</h5>
            <div className="separador"></div>
            <div className="user_contact">
              <a href={`${facebook}`} target="_blank" rel="noreferrer">
                <i class="fab fa-facebook" style={{ color: '#0090E1' }}></i>
              </a>
              <a href={`mailto:${gmail}`}>
                <i class="fa fa-envelope" style={{ color: '#EE0000' }}></i>
              </a>
              <a href={`${linkedin}`} target="_blank" rel="noreferrer">
                <i class="fa fa-info" style={{ color: '#0090E1' }}></i>
              </a>
              {/*phone */}
              <a href={`tel:${github}`} target="_blank" rel="noreferrer">
                <i class="fa fa-phone" style={{ color: '#000000' }}></i>
              </a>
            </div>
          </div>
          <div className="profile_info box-outer">
            <button
              className="cancel"
              onClick={() => {
                navigate('/members');
              }}
            >
              X
            </button>
            <h1>{name}</h1>
            <h2>{position}</h2>
            <div className="separador"></div>

            <div className="grid grid-cols-7 strength">
              <h4 className="col-span-2">Lĩnh vực nghiên cứu:</h4>
              <div className="col-span-5 strength_detail">
                {strengths.map((item) => {
                  return <span>{item}</span>;
                })}
              </div>

              <h4 className="col-span-2">Giới thiệu bản thân </h4>
              <p className="col-span-5">
                {describe.map((item) => {
                  return <div>{item}</div>;
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section>
      <div className="user_profile">
        <div className="user_option box-outer">
          <div className="user_avatar">
            <img src={`.${img}`} alt="" />
          </div>
          <h4>{name}</h4>
          <h5>{position}</h5>
          <div className="separador"></div>
          <div className="user_contact">
            <a href={`${facebook}`} target="_blank" rel="noreferrer">
              <i class="fab fa-facebook" style={{ color: '#0090E1' }}></i>
            </a>

            <a href={`mailto:${gmail}`}>
              <i class="fa fa-envelope" style={{ color: '#EE0000' }}></i>
            </a>
            <a href={`${linkedin}`} target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin-in" style={{ color: '#0090E1' }}></i>
            </a>
            <a href={`${github}`} target="_blank" rel="noreferrer">
              <i class="fab fa-github" style={{ color: '#000000' }}></i>
            </a>
          </div>
        </div>
        <div className="profile_info box-outer">
          <div className="box-outer">

          </div>
          <button
            className="cancel"
            onClick={() => {
              navigate('/members');
            }}
          >
            X
          </button>
          <h1>{name} - {classes}</h1>
          <h2>{position}</h2>
          <div className="separador"></div>

          <div className="grid grid-cols-7 strength">
            <h4 className="col-span-2">Thế mạnh bản thân: </h4>
            <div className="col-span-5 strength_detail">
              {strengths.map((item) => {
                return <span>{item}</span>;
              })}
            </div>
            <h4 className="col-span-2">Giới thiệu bản thân: </h4>
            <p className="col-span-5">{describe}</p>
          </div>
          <div className="separador"></div>
          {/* <div className="prize">
            <h4>Giải Thưởng </h4>
            <SliderPrize />
          </div> */}

          {/* <div className="reward box-outer">
            <h4>Giải Thưởng: </h4>
          </div> */}
        </div>
      </div>
    </section>
  );
}
