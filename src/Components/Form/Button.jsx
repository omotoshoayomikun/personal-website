import React from 'react'

export function Btn() {
  return (
    <>
    <button className="btn">send message</button>
    </>
  )
}

export function CusBtn({text, onClick}) {
  return (
    <>
    <button className="cus_btn" onClick={onClick}>{text}</button>
    </>
  )
}
