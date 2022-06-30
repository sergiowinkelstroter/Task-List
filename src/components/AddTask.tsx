import { Plus } from "phosphor-react";
import { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddTask({ onEnter }: Props) {
  const [inputText, setInputText] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  }

  function handleAddTask() {
    if (inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-gray-300 text-center">
        Lista de Tarefas
      </h1>
      <div className="flex gap-2 items-center mt-4">
        <input
          className="  bg-gray-200 w-full p-2 rounded outline-none h-10"
          value={inputText || ""}
          type="text"
          placeholder="Digite uma nova tarefa"
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button
          onClick={handleAddTask}
          className="text-xl text-white rounded p-2 bg-gray-500 h-10 hover:bg-gray-700"
        >
          <Plus size={20} />
        </button>
      </div>
    </>
  );
}
