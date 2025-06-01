import Link from "next/link";

const sampleTasks = [
  { id: 1, title: "あ", status: "未完了" },
  { id: 2, title: "い", status: "完了" },
  { id: 3, title: "う", status: "未完了" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mt-[40px] mb-[10px]">データ一覧</h1>
      <ul>
        {sampleTasks.map((task) => (
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
