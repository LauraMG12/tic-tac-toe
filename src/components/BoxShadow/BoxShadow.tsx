import { ReactNode } from 'react';
import './BoxShadow.scss';

interface BoxShadowProps {
  children: ReactNode;
  clickable?: boolean;
}

export default function BoxShadow(props: BoxShadowProps) {
  return (
    <div className={`box-shadow ${props.clickable ? 'clickable' : ''}`}>
      {props.children}
    </div>
  );
}
