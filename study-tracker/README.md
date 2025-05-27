## コミットメッセージのルール

このプロジェクトではコミットメッセージのルールを統一し、履歴を見やすく管理しやすくすることを目的としています。

### ルール概要

コミットメッセージは以下の形式で記述します。

- `type` は変更内容の種類を表します
- 簡潔に変更点をまとめて記述します

---

### type の種類

| type   | 説明                         | 例                            |
| ------ | ---------------------------- | ----------------------------- |
| feat   | 新しい機能の追加             | feat: ユーザ登録機能追加      |
| fix    | バグ修正                     | fix: ログイン画面の不具合修正 |
| design | デザインの修正               | design: ボタンの色を変更      |
| docs   | ドキュメントの変更           | docs: README を更新           |
| chore  | その他の雑務（環境設定など） | chore: パッケージ更新         |

---

### 注意事項

- ブランチ名はコミットメッセージに含めません。  
  Git の仕組み上、ブランチ名は Git 管理で追跡されるため、メッセージに入れる必要はありません。
- 1 行目は 50 文字以内を目安に簡潔に書きましょう。
- 必要に応じて 2 行目以降に詳細を追記しても構いません。

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
