"use client";

import Link from "next/link";
import { useTasks } from "@/context/taskContext";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mt-[40px] mb-[10px]">データ一覧</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="my-[10px]">
            <h2>{task.title}</h2>
            <p>状態：{task.status}</p>
          </li>
        ))}
      </ul>
      <Link href="/new">ページを追加</Link>
    </main>
  );
}
