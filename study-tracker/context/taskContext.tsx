"use client"; // React fooksを使うためにクライアントサイド

import { createContext, useContext, useState, ReactNode } from "react";

// Taskの型を定義
export type Task = {
  id: number;
  title: string;
  status: string;
};

// tasksとsetTasksの関数の型を定義
type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  // setの関数はReact側で定義できるので引数の型だけ定義して
  // Dispatchで型定義をReactに投げる
};

type Id = {
  taskId: number;
};

const TaskContext = createContext<TaskContextType | null>(null);
// Contextを作成

// Providerの関数を作ってコンテキストを使える場所を決める
export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]); // 空の配列を初期値にして定義

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

// Contextを使うための関数 カスタムフックを定義
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
    // Contextが無かったらエラーを投げる
  }
  return context;
}

// コンテキスト内での関数をまとめて定義
export function useTaskActions() {
  const { tasks, setTasks } = useTasks();

  // 削除関数を作成
  function deleteTask({ taskId }: Id) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return { deleteTask };
}
