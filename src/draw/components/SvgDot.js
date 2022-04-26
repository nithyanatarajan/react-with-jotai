import React from 'react';
import { useAtomValue } from 'jotai';
import { dotsAtom } from '../state/dots';

const SvgDots = () => {
  const dots = useAtomValue(dotsAtom);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
};

export default SvgDots;
