import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const itemIdsAtom = atom([]); // all unique ids

const addItemIdAtom = atom(
  null,
  (get, set, update) => set(itemIdsAtom, (prev) => [...prev, update]),
);

const itemAtom = atom({});

const initializeAtom = (item) => {
  // eslint-disable-next-line no-console
  console.log(item);
  return atom(
    (get) => get(itemAtom),
    (get, set, update) => update,
  );
};
const comparer = (one, another) => one.id === another.id;
export const itemsAtomFamily = atomFamily(initializeAtom, comparer);
// To get one atom from family => get(itemsAtomFamily({ id }))

export const addItemToFamilyAtom = atom(
  null,
  (get, set, { id, title }) => {
    if (!get(itemIdsAtom).includes(id)) {
      set(addItemIdAtom, id);
    }
    // eslint-disable-next-line no-console
    console.log(title);
    itemsAtomFamily({ id, title });
  },
);

/*
export const itemsWriteOnlyAtom = atom(
  null,
  (get, set, itemIdToValue) => {
    Object.keys(itemIdToValue).map((id) => {
      set(itemAtomFamily(id), {
        ...get(itemAtomFamily({ id })),
        ...itemIdToValue[id],
      });
    });
  },
);
*/

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
