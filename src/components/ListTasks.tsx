import { X } from "phosphor-react";
import { Item } from "../types/Item";

type Props = {
  item: Item;
  onDelete: (index: number) => void;
  index: number;
};

export function ListTasks({ item, onDelete, index }: Props) {
  function handleDelete() {
    onDelete(index);
  }
  return (
    <div
      className="  bg-gray-500 text-white p-2 mt-2 rounded flex justify-between items-center "
      key={item.id}
    >
      <div>
        <input className="w-4 h-4" type="checkbox" />
        <label className="text-base md:text-lg p-2">{item.name}</label>
      </div>
      <button onClick={handleDelete} className="hover:bg-gray-700 rounded p-1">
        <X size={25} />
      </button>
    </div>
  );
}
