import React from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { resetShapesAtom } from '../state/shape';
import { resetDotsAtom } from '../state/dots';
import { disableDrawingAtom } from '../state/drawing';

const Reset = () => {
  const resetShapes = useUpdateAtom(resetShapesAtom);
  const resetDots = useUpdateAtom(resetDotsAtom);
  const disableDrawing = useUpdateAtom(disableDrawingAtom);
  const handleReset = () => {
    resetDots();
    resetShapes();
    disableDrawing();
  };
  return (
    <button type="button" onClick={handleReset}> Reset </button>
  );
};

export default Reset;
