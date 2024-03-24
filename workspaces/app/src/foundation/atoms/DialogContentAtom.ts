import { atom } from 'jotai';

const StateAtom = atom<JSX.Element | null>(null);

export const DialogContentAtom = atom(
  (get) => {
    return get(StateAtom);
  },
  (_get, set, content: JSX.Element | null) => {
    const isOpen = content != null;
    const bodyElement = document.body;

    if (isOpen) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = 'scroll';
    }

    set(StateAtom, content);
  },
);
