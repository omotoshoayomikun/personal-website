import React from 'react'

export const Input = ({value, label, onChange, name}) => {
  return (
    <>
    <div className="input_lebel">{label}</div>
    <input type="text" className="input" value={value} name={name} onChange={(e) => onChange(e, name)} />
    </>
  )
}


export default function TextArea({value, label, onChange, name}) {
  return (
    <>
    <div className="input_lebel">{label}</div>
    <textarea name={name} id="" cols="30" rows="10" value={value} onChange={(e) => onChange(e, name)} className="textarea">
      {/* {value} */}
    </textarea>
    </>
  )
}
