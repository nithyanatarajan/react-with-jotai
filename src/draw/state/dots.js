import { atom } from 'jotai';
import { drawingAtom } from './drawing';

export const dotsAtom = atom([]);
export const dotsLengthAtom = atom((get) => get(dotsAtom).length);

const addDotAtom = atom(
  null,
  (_get, set, update) => {
    set(dotsAtom, (prev) => [...prev, update]);
  },
);

export const updateDotsonDrawingAtom = atom(
  null,
  (get, set, update) => {
    if (get(drawingAtom)) {
      set(addDotAtom, update);
    }
  },
);

export default {};
