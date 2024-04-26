import { ColorTheme } from '../../utils/interfaces';
import BoxShadow from '../BoxShadow/BoxShadow';
import './Button.scss';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  theme: ColorTheme;
  onButtonClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <BoxShadow clickable={true}>
      <button
        onClick={props.onButtonClick}
        className={`button ${props.theme} ${props.onButtonClick ? 'clickable' : ''}`}
      >
        <p className="heading-s">{props.children}</p>
      </button>
    </BoxShadow>
  );
}
