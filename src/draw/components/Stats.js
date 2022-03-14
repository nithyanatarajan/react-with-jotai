import React from 'react';
import { useAtomValue } from 'jotai';
import { useCommitCount } from '../hooks';
import { dotsLengthAtom } from '../state/dots';

const Stats = () => {
  const dotsLength = useAtomValue(dotsLengthAtom);
  return (
    <div>
      Dots: {dotsLength}
      <br />
      Commits: {useCommitCount()}
    </div>
  );
};
export default Stats;
