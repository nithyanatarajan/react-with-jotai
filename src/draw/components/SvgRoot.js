import React from 'react';
import { useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { useCommitCount } from '../hooks';
import { dotsAtom, drawingAtom, updateDotsAtom } from '../state';

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
  const addPoint = useUpdateAtom(updateDotsAtom);
  const setDrawingAtom = useUpdateAtom(drawingAtom);
  const handleMouseUp = () => setDrawingAtom(false);
  const handleMouseDown = () => setDrawingAtom(true);

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
