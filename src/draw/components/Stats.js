import React from 'react';
import { useAtomValue } from 'jotai';
import { useCommitCount } from '../hooks';
import { dotsLengthAtom } from '../state/dots';
import { shapesLengthAtom } from '../state/shape';

const Stats = () => {
  const dotsLength = useAtomValue(dotsLengthAtom);
  const shapesLength = useAtomValue(shapesLengthAtom);
  return (
    <div>
      Paths: {shapesLength}
      <br />
      Current Dots: {dotsLength}
      <br />
      Total Dots: {useCommitCount()}
    </div>
  );
};
export default Stats;
