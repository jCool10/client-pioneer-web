import React from 'react';
import './Members.scss';
import introduce from '../../assets/OUT_TEAMS_1.png'
import { useSelector } from 'react-redux';
import SliderCard from '../../components/Slider/SliderCard';

function Members() {
  const { listMember } = useSelector((state) => state.MemberReducer);

  return (
    <section>
      <div className="introduce">
        <img src={introduce} alt="" />
      </div>

      <h1 className="h1Title">BAN CHỦ NHIỆM CÂU LẠC BỘ</h1>
      <SliderCard rows={1} slidesToShow={2} members={listMember.filter((member) => member.role === 'memberLead')} />

      <h1 className="h1Title">LEADER CÁC TEAM</h1>
      <SliderCard rows={1} slidesToShow={3} members={listMember.filter((member) => member.role === 'teamLeader')} />

      <h1 className="h1Title">THÀNH VIÊN</h1>
      <SliderCard rows={2} slidesToShow={3} members={listMember.filter((member) => member.role === 'member')} />
    </section>
  );
}

export default Members;
