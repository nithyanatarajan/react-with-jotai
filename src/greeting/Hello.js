import React from 'react';
import { atom, useAtom } from 'jotai';

const nameAtom = atom('World!');

// Defining this atom within the CharCount component produces continues re-rendering
const nameLengthAtom = atom((get) => get(nameAtom).length);

const GetName = () => {
  const [name, setName] = useAtom(nameAtom);
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
};

const CharCount = () => {
  const [len] = useAtom(nameLengthAtom);
  return <div>Length: {len}</div>;
};

const Print = () => {
  const [name] = useAtom(nameAtom);
  return <h1> Hello, {name} </h1>;
};

const Hello = () => (<>  <Print /> <GetName /> <CharCount /></>);

export default Hello;
