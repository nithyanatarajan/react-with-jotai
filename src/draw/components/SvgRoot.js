import React from 'react';
import { useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { useCommitCount } from '../hooks';
import { dotsAtom } from '../state';

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
  const addPoint = (point) => setDotsAtom((prev) => [...prev, point]);
  /*
  The above two line are same as the following write only atom
  atom(
    null,
    (get, set, update) => {
      set(dotsAtom, (prev) => [...prev, update]);
    },
  );
  */

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
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
