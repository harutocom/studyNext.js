"use client";

import { useState, useEffect } from "react";
import { useTasks } from "@/context/taskContext";
import { Task } from "@/context/taskContext";

export type Props = {
  taskId: number | null;
};

export default function TextAreaInput({ taskId }: Props) {
  const { tasks, setTasks } = useTasks();
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const task = tasks.find((item) => item.id === taskId);

  useEffect(() => {
    if (task) {
      setText(task.title);
      setIsEdit(true);
    } else {
      setText("");
    }
  }, [task]);

  function addTask() {
    const newTask: Task = {
      id: tasks.length + 1,
      title: text,
      status: "未完了",
    };
    setTasks([...tasks, newTask]); // newTaskを追加
    setText(""); // 入力欄をクリア
  }

  function editTask() {
    if (taskId !== null) {
      // taskIdがnullの可能性を排除
      const newTask: Task = {
        id: taskId,
        title: text,
        status: "未完了",
      };
      setTasks(tasks.map((task) => (task.id === taskId ? newTask : task)));
      // map関数でtask.idとtaskIdが同じ時だけnewTaskにしてそれ以外はそのままtask
      setText(""); // 入力欄をクリア
    }
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {isEdit ? (
        <button onClick={editTask}>edit</button>
      ) : (
        <button onClick={addTask}>add</button>
      )}
    </>
  );
}
