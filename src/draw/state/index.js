import { atom } from 'jotai';

export const dotsAtom = atom([]);
export const dotsLengthAtom = atom((get) => get(dotsAtom).length);
export const drawingAtom = atom(false);

export const updateDotsAtom = atom(
  null,
  (get, set, update) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
    }
  },
);

export default {};
