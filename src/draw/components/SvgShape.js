import React from 'react';
import { useAtomValue } from 'jotai';

// eslint-disable-next-line react/prop-types
const SvgShape = ({ shapeAtom }) => {
  const shape = useAtomValue(shapeAtom);
  return (
    <g>
      <path
        d={shape.path}
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
    </g>
  );
};
export default SvgShape;
