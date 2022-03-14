import React, { useEffect, useRef } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';

const countAtom = atom(0);

const Counter = () => {
  // const [count] = useAtom(countAtom);
  const count = useAtomValue(countAtom);
  const reRenderCount = useRef(0);

  useEffect(() => {
    reRenderCount.current += 1;
  });

  return (
    <div>
      count: {count}
      (rendered: {reRenderCount.current})
    </div>
  );
};

const Controls = () => {
  // const [, setCount] = useAtom(countAtom);
  const setCount = useUpdateAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  const reRenderCount = useRef(0);

  useEffect(() => {
    reRenderCount.current += 1;
  });

  return (
    <div>
      <button type="button" onClick={inc}>+1</button>
      (rendered: {reRenderCount.current})
    </div>
  );
};

const ControlsWithRerender = () => {
  const [, setCount] = useAtom(countAtom);
  // const setCount = useUpdateAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  const reRenderCount = useRef(0);

  useEffect(() => {
    reRenderCount.current += 1;
  });

  return (
    <div>
      <button type="button" onClick={inc}>+1</button>
      (rendered: {reRenderCount.current})
    </div>
  );
};

const DisplayCounter = () => (
  <>
    <Counter />
    <div>
      <h2>This is with useUpdateAtom </h2>
      <Controls />
      <h2>This is with useAtom </h2>
      <ControlsWithRerender />
    </div>
  </>
);

export default DisplayCounter;
