import React from 'react'

export function Btn({onClick, text}) {
  return (
    <>
    <button className="btn" onClick={onClick}>{text}</button>
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
