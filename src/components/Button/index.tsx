import React from 'react'
import { ButtonProps } from './interface';
import './style.css'

const Button : React.FC<ButtonProps> = ({ type='default', children, onClick }) => {
  const buttonType = type || 'default';
  return (
    <button className={`btn btn-${buttonType}`} onClick={onClick}>{children}</button>
  )
}

export default Button