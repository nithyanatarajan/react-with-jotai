import React from 'react';
import { useAtomValue } from 'jotai';
import SvgShape from './SvgShape';
import { shapeAtomsAtom } from '../state/shape';

const SvgShapes = () => {
  const shapeAtoms = useAtomValue(shapeAtomsAtom);
  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        <SvgShape
          key={`${shapeAtom}`}
          shapeAtom={shapeAtom}
        />
      ))}
    </g>
  );
};

export default SvgShapes;
