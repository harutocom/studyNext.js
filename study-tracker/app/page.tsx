const sampleTasks = [
  { id: 1, title: "あ", status: "未完了" },
  { id: 2, title: "い", status: "完了" },
  { id: 3, title: "う", status: "未完了" },
];

export default function Home() {
  return (
    <main>
      <h1>データ一覧</h1>
      <ul>
        {sampleTasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>状態：{task.status}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
