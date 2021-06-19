import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';

interface ButtonProps {
  text: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
  <MuiButton variant="contained" color="primary" onClick={props.onClick}>
    {props.text}
  </MuiButton>
  )
}

export default Button;