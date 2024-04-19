import { ColorTheme } from '../../utils/interfaces';
import BoxShadow from '../BoxShadow/BoxShadow';
import './Button.scss';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  theme: ColorTheme;
}

export default function Button(props: ButtonProps) {
  return (
    <BoxShadow clickable={true}>
      <button className={`button ${props.theme}`}>
        <p className="heading-s">{props.children}</p>
      </button>
    </BoxShadow>
  );
}
