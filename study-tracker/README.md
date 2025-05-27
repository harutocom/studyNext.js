## コミットメッセージのルール

### type の種類

| type   | 説明                         | 例                            |
| ------ | ---------------------------- | ----------------------------- |
| feat   | 新しい機能の追加             | feat: ユーザ登録機能追加      |
| fix    | バグ修正                     | fix: ログイン画面の不具合修正 |
| design | デザインの修正               | design: ボタンの色を変更      |
| docs   | ドキュメントの変更           | docs: README を更新           |
| chore  | その他の雑務（環境設定など） | chore: パッケージ更新         |

---

## ブランチ命名ルール

### type の種類

| type   | 説明                   | 例                        |
| ------ | ---------------------- | ------------------------- |
| feat   | 新機能追加             | feat/user-authentication  |
| fix    | バグ修正               | fix/login-bug             |
| design | デザイン修正           | design/header-redesign    |
| docs   | ドキュメント変更       | docs/update-readme        |
| chore  | その他（環境設定など） | chore/update-dependencies |

---

## コマンド

### ローカルサーバーを立ち上げる

```bash
pnpm run dev
```

### 新しいブランチを切る

```bash
git switch -c 'ブランチ名'
```
