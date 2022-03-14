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

export const createShapeAtom = (points) => atom({ path: pointsToPath(points) });
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

export default {};
