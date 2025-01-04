'use client';

import { createPortal } from 'react-dom';
import {useEffect, useState} from 'react';

interface IPortal {
    children: string | JSX.Element | JSX.Element[];
}

const Portal = ({children}: IPortal) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    }
  }, []);

  return createPortal(children, container);
}

export default Portal;
