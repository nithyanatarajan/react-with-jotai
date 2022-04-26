import { renderHook, act } from '@testing-library/react-hooks';
import { useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import {
  addDotAtom, dotsAtom, resetDotsAtom, updateDotsonDrawingAtom,
} from './dots';
import { enableDrawingAtom } from './drawing';

afterEach(() => {
  const { result: resetDotsHook } = renderHook(() => useUpdateAtom(resetDotsAtom));
  resetDotsHook.current();
});

test('should initialise dotsAtom to []', () => {
  const { result: getDotsHook } = renderHook(() => useAtomValue(dotsAtom));
  expect(getDotsHook.current).toEqual([]);
});

test('should test addDotAtom', () => {
  const { result: addDotHook } = renderHook(() => useUpdateAtom(addDotAtom));

  act(() => {
    addDotHook.current([1, 2]);
    addDotHook.current([2, 4]);
  });

  const { result: getDotsHook } = renderHook(() => useAtomValue(dotsAtom));

  expect(getDotsHook.current[0]).toEqual([1, 2]);
  expect(getDotsHook.current[1]).toEqual([2, 4]);
});

test('should test updateDotsonDrawingAtom', () => {
  const { result: enableDrawingHook } = renderHook(() => useUpdateAtom(enableDrawingAtom));
  // eslint-disable-next-line max-len
  const { result: updateDotsonDrawingHook } = renderHook(() => useUpdateAtom(updateDotsonDrawingAtom));

  act(() => {
    enableDrawingHook.current();
    updateDotsonDrawingHook.current([2, 4]);
    updateDotsonDrawingHook.current([3, 6]);
  });

  const { result: getDotsHook } = renderHook(() => useAtomValue(dotsAtom));

  expect(getDotsHook.current[0]).toEqual([2, 4]);
  expect(getDotsHook.current[1]).toEqual([3, 6]);
});
