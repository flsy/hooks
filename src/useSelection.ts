import { useState } from 'react';

export interface IUseSelection<T> {
  isSelected: (item: T) => boolean;
  getIndex: (item: T) => number;
  list: T[];
  toggle: (item: T) => void;
  clear: () => void;
  length: number;
}

const useSelection = <T>(initial?: T[]): IUseSelection<T> => {
  const [list, setList] = useState<T[]>(initial || []);
  const isSelected = (item: T) => list.includes(item);

  const toggle = (item: T) => {
    if (isSelected(item)) {
      setList(list.filter((s) => s !== item));
    } else {
      setList([...list, item]);
    }
  };

  return {
    list,
    toggle,
    isSelected,
    length: list.length,
    clear: () => {
      setList([]);
    },
    getIndex: (item: T) => list.findIndex((s) => s === item),
  };
};

export default useSelection;
