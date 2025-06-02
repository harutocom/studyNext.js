import { ReactNode } from "react";
import "./globals.css";
import { TaskProvider } from "@/context/TaskContext";
// 子要素すべてで使えるようにProviderを設定

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white">
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
