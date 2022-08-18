import React from 'react'
import './ResetButton.css'

export const ResetButton = ({resetBoard}) => {
  return (
    <button className="reset-btn-2" onClick={resetBoard}>Tekrar Oyna</button>
  )
}
