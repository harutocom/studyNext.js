"use client";

import Link from "next/link";
import { useTasks } from "@/context/taskContext";
import { useTaskActions } from "@/context/taskContext";

export default function Home() {
  const { tasks } = useTasks();
  const { deleteTask } = useTaskActions();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mt-[40px] mb-[10px]">データ一覧</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="my-[10px]">
            <h2>
              {task.title}
              状態：{task.status}
              <button onClick={() => deleteTask({ taskId: task.id })}>
                削除
              </button>
            </h2>
          </li>
        ))}
      </ul>
      <Link href="/new">ページを追加</Link>
    </main>
  );
}
