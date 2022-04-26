import { atom } from 'jotai';
import { disableDrawingAtom, drawingAtom } from './drawing';
import { addShapeAtom } from './shape';

export const dotsAtom = atom([]);
export const dotsLengthAtom = atom((get) => get(dotsAtom).length);

export const addDotAtom = atom(
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

export const commitDotsAtom = atom(
  null,
  (get, set) => {
    set(addShapeAtom, get(dotsAtom));
    set(dotsAtom, []);
  },
);

/*
    commitDots();
    disableDrawing();

and the following are the same
*/
export const commitDotsWithDisableDrawingAtom = atom(
  null,
  (get, set) => {
    set(disableDrawingAtom);
    set(commitDotsAtom, null);
  },
);

export const resetDotsAtom = atom(
  null,
  (_get, set) => set(dotsAtom, []),
);

export default {};
