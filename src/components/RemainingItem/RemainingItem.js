import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './RemainingItem.scss'

export default function RemainingItem(props) {
  const { title, introduce, img, id } = props.item
  const navigate = useNavigate()
  return (
    <div className='RemainingItem'>
      <div className="itemImg">
        <img src={img} alt="" />
      </div>
      <div className=" itemContent">
        <a href={`/events/${id}`}>
          <h2 className="title">{title}</h2>
        </a>

        <div className="decs">{introduce}</div>
      </div>
    </div>
  )
}
