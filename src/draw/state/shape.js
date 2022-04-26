import { atom } from 'jotai';

const pointsToPath = (points) => {
  let d = '';
  points.forEach((point) => {
    if (d) {
      d += ` L ${point[0]} ${point[1]}`;
    } else {
      d = `M ${point[0]} ${point[1]}`;
    }
  });
  return d;
};

const createShapeAtom = (points) => atom({ path: pointsToPath(points) });

// shapeAtomsAtom holds list of shapeAtom configs
export const shapeAtomsAtom = atom([]);

export const addShapeAtom = atom(
  null,
  (_get, set, update) => {
    const shapeAtom = createShapeAtom(update);
    set(shapeAtomsAtom, (prev) => [
      ...prev,
      shapeAtom,
    ]);
  },
);

export const shapesLengthAtom = atom((get) => get(shapeAtomsAtom).length);

export const resetShapesAtom = atom(
  null,
  (_get, set) => set(shapeAtomsAtom, []),
);

export default {};
