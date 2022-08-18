import React from 'react'
import './SifirlaButton.css'

export const SifirlaButton = ({sifirlaBoard}) => {
  return (
    <button className="reset-btn-2" onClick={sifirlaBoard}>Skoru Sıfırla</button>
  )
}
