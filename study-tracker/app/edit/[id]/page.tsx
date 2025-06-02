"use client";

import TextAreaInput from "@/components/TextAreaInput";
// app routeなのでuseRouterではなくuseParamsを使って動的なidをURLから取得
import { useParams } from "next/navigation";

export default function EditTask() {
  const params = useParams();
  const id = params.id;
  // 取得したidをnumberに変換
  const taskId = Number(id);

  // idをnumberに変換できないときにエラーを表示
  if (isNaN(taskId)) {
    return <p>無効なIDです。</p>;
  }

  return <TextAreaInput taskId={taskId} />;
}
