import React from 'react';
import { useAtomValue } from 'jotai';
import { itemIdsAtom, itemsAtomFamily } from './state';

// eslint-disable-next-line react/prop-types
const Item = ({ id }) => {
  const item = useAtomValue(itemsAtomFamily({ id }));
  return (
    <div>
      {item.title}
    </div>
  );
};

const List = () => {
  const itemIds = useAtomValue(itemIdsAtom);
  // eslint-disable-next-line no-console
  console.log(itemIds);
  return (
    <div>
      <h2>All items</h2>
      {itemIds.map((id) => (
        <Item key={id} id={id} />
      ))}
    </div>
  );
};
export default List;
