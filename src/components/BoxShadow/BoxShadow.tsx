import { ReactNode } from 'react';
import './BoxShadow.scss';

interface BoxShadowProps {
  children: ReactNode;
  clickable?: boolean;
  disable?: boolean;
  wide?: boolean;
}

export default function BoxShadow(props: BoxShadowProps) {
  return (
    <div
      className={`box-shadow ${props.clickable ? 'clickable' : ''} ${props.disable ? 'disabled' : ''} ${props.wide ? 'wide' : ''}`}
    >
      {props.children}
    </div>
  );
}
