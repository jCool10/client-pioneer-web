import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './ProductCard.scss'

export default function ProductCard(props) {
  const { id, title, summary, path, img } = props.product

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <li className='ProductCard' key={id}>
      <div className='card_description'>
        <h1 className='title'>{title}</h1>
        <p className='summary'>{summary}</p>
        <button className='more' onClick={() => {
          navigate(`/product/${id}`)

        }
        }>Tìm hiểu thêm</button>
      </div>
      {/* <div
        className='image'
        style={{ backgroundImage: "url(" + img + ")" }}>
      </div> */}
      <div className='image'>
        <img src={img} alt="" />

      </div>
    </li>
  )
}
