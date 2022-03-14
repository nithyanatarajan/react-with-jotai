import React from 'react';
import { useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { useCommitCount } from '../hooks';
import { dotsAtom, drawingAtom } from '../state';

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
  const setDotsAtom = useUpdateAtom(dotsAtom);
  const setDrawingAtom = useUpdateAtom(drawingAtom);
  const drawing = useAtomValue(drawingAtom);
  const addPoint = (point) => {
    // The component is re-rendered every time there is a mouse down event
    // as we read from drawing atom
    if (drawing) { setDotsAtom((prev) => [...prev, point]); }
  };
  /*
  The setDotsAtom and addPoint are same as the following write only atom
  atom(
    null,
    (get, set, update) => {
     if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
     }
    },
  );
  */

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
