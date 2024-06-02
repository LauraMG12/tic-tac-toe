import { ColorTheme } from '../../utils/types/interfaces';
import BoxShadow from '../BoxShadow/BoxShadow';
import './Button.scss';

import { ReactNode } from 'react';

interface ButtonProps {
  theme: ColorTheme;
  icon?: ReactNode;
  text?: ReactNode;
  wide?: boolean;
  disable?: boolean;
  onButtonClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const squareButton = props.icon && !props.text;
  const clickable = !!props.onButtonClick;
  return (
    <BoxShadow clickable={clickable} wide={props.wide} disable={props.disable}>
      <button
        onClick={props.onButtonClick}
        className={`button ${props.theme} ${clickable ? 'clickable hover' : ''} ${props.wide ? 'wide' : ''} ${squareButton ? 'square' : ''} ${props.disable ? 'disable' : ''}`}
      >
        {!!props.icon && <>{props.icon}</>}
        {!!props.text && <>{props.text}</>}
      </button>
    </BoxShadow>
  );
}
