import React from 'react'
import './custom-button.styles.scss'


const CustomButton = ({ children, className, ...otherProps }) => (
   <button {...otherProps} className={`${className} custom-button`}>
      {children}
   </button>
)

export default CustomButton
