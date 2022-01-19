import styled, { css } from 'styled-components';


const invertedButton = css`
   background-color: white;
   color: rgb(82, 80, 80);
   &:hover {
      background-color: black;
      color: white;
   }
`

const googleButton = css`
   background: rgb(64, 64, 177);
   border: 1px solid rgb(105, 105, 218);
   &:hover {
      background: white;
   }
`


const specificStyles = ({ isGoogleButton, isInverted }) => {
   if (isGoogleButton) {
      return googleButton
   } else if (isInverted) {
      return invertedButton
   }
}

export const CustomButtonContainer = styled.button`
   min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  border: 1px solid rgb(155, 148, 148);
  background-color: black;
   color: white; 
  &:hover {
     background: white;
      color: rgb(82, 80, 80);
    transform: scale(1.03);
    transition: all 0.5s ease;
  }
  ${specificStyles}
`