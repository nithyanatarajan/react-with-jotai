import React from 'react';
import { useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { useCommitCount } from '../hooks';
import { dotsAtom, updateDotsonDrawingAtom } from '../state/dots';
import { disableDrawingAtom, enableDrawingAtom } from '../state/drawing';

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

const SvgRoot = () => {
  const addPoint = useUpdateAtom(updateDotsonDrawingAtom);
  const handleMouseUp = useUpdateAtom(disableDrawingAtom);
  const handleMouseDown = useUpdateAtom(enableDrawingAtom);

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={(e) => addPoint([e.clientX, e.clientY])}
    >
      <rect width="200" height="200" fill="#eee" />
      <text x="3" y="12" fontSize="12px">
        Commits: {useCommitCount()}
      </text>
      <SvgDots />
    </svg>
  );
};
export default SvgRoot;
