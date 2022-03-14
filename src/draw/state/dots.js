import { atom } from 'jotai';
import { drawingAtom } from './drawing';

export const dotsAtom = atom([]);
export const dotsLengthAtom = atom((get) => get(dotsAtom).length);

export const updateDotsonDrawingAtom = atom(
  null,
  (get, set, update) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
    }
  },
);

export default {};
