import { renderHook, act } from '@testing-library/react-hooks';
import { useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { disableDrawingAtom, drawingAtom, enableDrawingAtom } from './drawing';

test('should initialise drawingAtom to false', () => {
  const { result } = renderHook(() => useAtomValue(drawingAtom));
  expect(result.current).toBeFalsy();
});

test('should test enableDrawingAtom and disableDrawingAtom', () => {
  const { result: enableDrawingHook } = renderHook(() => useUpdateAtom(enableDrawingAtom));

  act(() => {
    enableDrawingHook.current();
  });

  const { result: getDrawing } = renderHook(() => useAtomValue(drawingAtom));
  expect(getDrawing.current).toBeTruthy();

  const { result: disableDrawingHook } = renderHook(() => useUpdateAtom(disableDrawingAtom));

  act(() => {
    disableDrawingHook.current();
  });

  const { result: getDrawingAgain } = renderHook(() => useAtomValue(drawingAtom));
  expect(getDrawingAgain.current).toBeFalsy();
});
