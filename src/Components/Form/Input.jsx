import React from 'react'

export const Input = ({value, label}) => {
  return (
    <>
    <div className="input_lebel">{label}</div>
    <input type="text" className="input" />
    </>
  )
}


export default function TextArea({label}) {
  return (
    <>
    <div className="input_lebel">{label}</div>
    <textarea name="" id="" cols="30" rows="10" className="textarea"></textarea>
    </>
  )
}
