import { useEffect, useRef } from 'react';

export const useCommitCount = () => {
  const commitCountRef = useRef(0);
  useEffect(() => {
    commitCountRef.current += 1;
  });
  return commitCountRef.current;
};

export default {};
