import React from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { addItemToFamilyAtom } from './state';

const ItemForm = () => {
  const addItemToFamily = useUpdateAtom(addItemToFamilyAtom);
  const add = (e) => {
    e.preventDefault();
    const id = e.currentTarget.inputId.value;
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputId.value = '';
    e.currentTarget.inputTitle.value = '';
    addItemToFamily({ id, title });
  };
  return (
    <form onSubmit={add}>
      <input name="inputId" placeholder="Type Id..." />
      <input name="inputTitle" placeholder="Type Title..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default ItemForm;
