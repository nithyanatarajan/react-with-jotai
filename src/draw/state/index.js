import { atom } from 'jotai';

export const dotsAtom = atom([]);
export const dotsLengthAtom = atom((get) => get(dotsAtom).length);
export const drawingAtom = atom(false);

export default {};
