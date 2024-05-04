import { ColorTheme } from '../../utils/interfaces';
import BoxShadow from '../BoxShadow/BoxShadow';
import './Button.scss';

import { ReactNode } from 'react';

interface ButtonProps {
  icon?: ReactNode;
  text?: ReactNode;
  theme: ColorTheme;
  wide?: boolean;
  onButtonClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const squareButton = props.icon && !props.text;
  const clickable = !!props.onButtonClick;
  return (
    <BoxShadow clickable={clickable} wide={props.wide}>
      <button
        onClick={props.onButtonClick}
        className={`button ${props.theme} ${clickable ? 'clickable hover' : ''} ${props.wide ? 'wide' : ''} ${squareButton ? 'square' : ''}`}
      >
        {!!props.icon && <>{props.icon}</>}
        {!!props.text && <>{props.text}</>}
      </button>
    </BoxShadow>
  );
}
