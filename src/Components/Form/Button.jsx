import React from 'react'

export function Btn({onClick}) {
  return (
    <>
    <button className="btn" onClick={onClick}>send message</button>
    </>
  )
}

export function CusBtn({text, onClick}) {
  return (
    <>
    <button className="cus_btn" type='submit' onClick={onClick}>{text}</button>
    </>
  )
}
