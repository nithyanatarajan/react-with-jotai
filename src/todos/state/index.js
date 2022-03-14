import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const itemIdsAtom = atom([]); // all unique ids

const addItemIdAtom = atom(
  null,
  (get, set, update) => set(itemIdsAtom, (prev) => [...prev, update]),
);

const initializeAtom = (item) => atom({ title: item.title || 'No title' });
const comparer = (one, another) => one.id === another.id;
export const itemsAtomFamily = atomFamily(initializeAtom, comparer);
// To get one atom from family => get(itemsAtomFamily({ id }))

export const addToFamilyAtom = atom(
  (get) => get(itemIdsAtom).filter((id) => get(itemsAtomFamily(id))),
  (get, set, { id, title }) => {
    if (!get(itemIdsAtom).includes(id)) {
      set(addItemIdAtom, id);
    }
    itemsAtomFamily({ id, title });
    // set(itemsAtomFamily(id), title);
  },
);

/*
const selectedLanguages = atomFamily(() => false)

const availableLanguages = atom([])

const selectedLanguagesState = atom(
  (get) => get(availableLanguages).filter((lang) => get(selectedLanguages(lang))),
  (get, set, { lang, value }) => {
    if (!get(availableLanguages).includes(lang)) {
      set(availableLanguages, [...get(availableLanguages), lang])
    }
    set(selectedLanguages(lang), value)
  }
)
*/

export default {};
