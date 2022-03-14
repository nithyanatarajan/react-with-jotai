import React from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { nanoid } from 'nanoid';
import { addToFamilyAtom } from './state';

const ItemForm = () => {
  const addToFamily = useUpdateAtom(addToFamilyAtom);
  const add = (e) => {
    e.preventDefault();
    const id = nanoid();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = '';
    addToFamily({ id, title });
  };
  return (
    <form onSubmit={add}>
      <input name="inputTitle" placeholder="Type ..." />
    </form>
  );
};

export default ItemForm;
