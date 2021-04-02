import React from 'react'
import { InputProps } from "./interface"
import './style.css'

const Input = React.forwardRef<HTMLInputElement, InputProps>(({label, onChange, value, error}, ref) => {
  const errorClassName = error ? 'error' : ''
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <br/>
      <input ref={ref} className={`input ${errorClassName}`} type="text" id={label} name={label} value={value} onChange={onChange}/>
      { error && <div className="error-message">{error}</div> }
    </>
  )
}
  
  
);

export default Input
