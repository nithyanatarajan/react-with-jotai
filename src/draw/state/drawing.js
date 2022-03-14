import { atom } from 'jotai';

export const drawingAtom = atom(false);

export const enableDrawingAtom = atom(
  null,
  (get, set) => set(drawingAtom, true),
);
export const disableDrawingAtom = atom(
  null,
  (get, set) => set(drawingAtom, false),
);

export default {};
