import React from 'react'
import './custom-button.styles.scss'


const CustomButton = ({ children, className, inverted, ...otherProps }) => (
   <button {...otherProps} className={`${className} custom-button ${inverted ? 'inverted' : null}`}>
      {children}
   </button>
)

export default CustomButton
