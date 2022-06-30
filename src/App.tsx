import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { ListTasks } from "./components/ListTasks";
import { Item } from "./types/Item";

function App() {
  const [tasks, setTasks] = useState<Item[]>([]);

  function handleAddTask(taskName: string) {
    let newList = [...tasks];
    newList.push({
      id: tasks.length + 1,
      name: taskName,
    });
    setTasks(newList);
  }

  function deleteTask(index: number) {
    let itensCopy = [...tasks];
    itensCopy.splice(index);
    setTasks(itensCopy);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-[400px] mt-10 md:border-2 md:border-gray-300 rounded p-3 h-full">
        <AddTask onEnter={handleAddTask} />
        {tasks.map((item, index) => (
          <ListTasks key={index} item={item} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
