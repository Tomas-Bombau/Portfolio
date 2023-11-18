import React from 'react'
import s from './Titles.module.css'

const Titles = (props) => {
    const {title, double} = props
  return (
    <div className={double ? s.titleTwo : s.title}>
        <h3>{title}</h3>
        <div className={s.underline1}></div>
        <div className={s.underline2}></div>
    </div>
  )
}

export default Titles