# コンテンツマスタリング完全パック LP

GitHub Pagesでそのまま公開できる、静的HTML/CSS/JavaScript構成のランディングページです。

## 構成

```txt
content_mastering_monitor_lp/
├── index.html
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── top-note-thumb.jpg
        ├── logo-badge.jpg
        ├── proof-annual.jpg
        ├── proof-1157100.jpg
        ├── proof-1556000.jpg
        ├── voice-month100.jpg
        ├── voice-150man.jpg
        ├── voice-250000.jpg
        ├── proof-250000.jpg
        ├── transfer-720720.jpg
        ├── transfer-558320.jpg
        └── transfer-491810.jpg
```

## 公開方法

1. GitHubで新規リポジトリを作成
2. ZIPを解凍して、中身をリポジトリ直下にアップロード
3. GitHubの `Settings` → `Pages` を開く
4. `Deploy from a branch` を選択
5. Branchを `main`、フォルダを `/root` にして保存
6. 表示されたURLを開いて確認

## 申し込み導線

LINEリンクは以下に設定済みです。

```txt
https://lin.ee/ym7fkWg
```

LP内では、申し込み時のキーワードとして以下を案内しています。

```txt
希望です
```

## 編集しやすい箇所

### 価格変更

`index.html` 内の以下を検索して変更してください。

- `128,000円`
- `27,800円`
- `25枠限定`
- `希望です`

### LINEリンク変更

`index.html` 内の以下を検索して置き換えてください。

```txt
https://lin.ee/ym7fkWg
```

### 実績画像の差し替え

`assets/img/` 内の画像を同名で差し替えると、HTMLを編集せずに差し替えできます。

## 注意

- 本LPは静的ページです。残り枠の自動カウントや決済機能はありません。
- 募集枠や価格が変わる場合は、`index.html` を手動で更新してください。
- LP内には成果保証を避ける注記を入れています。販売時は特商法表記、返金条件、提供内容を別途明確にしてください。

## 画像表示について

v3では、note用サムネイル・実績画像・お客様の声画像が見切れないように、`object-fit: contain` ベースで全体表示するCSSへ修正しています。
画像を差し替える場合も、同名ファイルで差し替えれば基本的に全体が表示されます。


## 残り枠表示

現在の文言は `残り2/25枠｜お急ぎください` です。
`index.html` 内の `残り2/25` を検索すれば、後から `残り2/10` や `満枠` などにすぐ変更できます。


## LINEプレビュー文言

LINEやSNSで表示されるリンクプレビュー文言は、`index.html` の `<title>`、`meta name="description"`、`og:title`、`og:description` を変更することで調整できます。
更新後に古いプレビューが残る場合は、URL末尾に `?v=2` のようなクエリを付けて再共有してください。


## v7更新内容

- 再販表示へ変更
- トータル25枠へ変更
- 増枠＋5枠の表示を追加
- 残り2/25枠へ変更
- 価格を 19,800円 から 27,800円 に変更
- 残り枠バーを 8% 表示へ変更
