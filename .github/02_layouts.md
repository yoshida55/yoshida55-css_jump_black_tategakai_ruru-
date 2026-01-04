# 02_layouts.md（コードの呪文集・配置パターン）

---

## ■ 背景画像（background-image）の設定

- **画像パスの注意点**:
  - CSS（`url()`）で指定する場合、HTML の `src` とは違い `../` で一度上のフォルダに移動する必要がある。

- **スマホ・PC での切り替え**:
  - HTML で `src` を指定せず、CSS で以下のように設定する。

```css
.header_area {
  background-image: url("../img/mainvisual-pc.jpg");
  background-size: cover; /* 要素いっぱいに広げる */
  background-position: center; /* 中央基準で表示 */
}
```

---

## ■ ポジション（absolute）の実装パターン

- **構成のルール**:
  - 親に relative、子に absolute を設定する。
  - 親（基準点）を作らないと、画面全体を基準にして飛んでいってしまう。

- **具体的なコード例（ヘッダー内のリンク配置）**:

```html
<header class="header_area">
  <nav></nav>
  <div class="header_online">
    <a href="#" class="online_link">オンラインストアを見る</a>
  </div>
</header>
```

```css
.header_area {
  position: relative; /* ← これがないと absolute が効かない */
}
.header_online {
  position: absolute; /* 親を基準に配置 */
  left: 20px;
  bottom: 20px;
}
```

---

## ■ 縦書き（writing-mode）の正解パターン

- **失敗しないための鉄則**:
  - 親要素に writing-mode をかけると、Flexboxの軸も回転して混乱する。
  - **「親は配置（Flex）」「子は文字の向き（writing-mode）」** と役割を分ける。

- **【推奨】縦書きリストのコード例**:

```css
/* 親：横書きのまま、配置だけ制御 */
.footer_location {
  display: flex;
  flex-direction: row-reverse; /* 右から左へ並べるスイッチ */
  gap: 3rem;
}

/* 子：文字だけ縦書きにする */
.nav-item a {
  writing-mode: vertical-rl;
}
```

---

## ■ フレックスボックス（Flexbox）の活用

- **並び順のルール**:
  - HTML 上で上に書かれたものから、左から順番に配置される。

- **サイズ指定（flex: 1）**:
  - 子フレックスで width を指定すると、flex: 1 よりも優先される。
  - 基本、サイズを指定する必要がない場合は flex: 1 に決めておくと楽。

- **画像の高さズレ対策**:
  - Flex 内で画像に absolute で文字を載せる際など、画像の高さが隣の要素に引っ張られる場合がある。
  - その時は align-items: flex-start を親にかけて、高さを画像本来のサイズに合わせる。

- **拡張ツールの見方**:
  - ブラウザ検証ツールで「紫色」に見える部分は、justify-content などによって生じた余白（整列スペース）。

---

## ■ レスポンシブ計算式（rem / % / vw）

- **単位の使い分け**:
  - 文字サイズや余白: rem（画面に合わせて自動拡大縮小）
  - レイアウトの横幅: %（親要素の中での占有率）

- **【重要】画面幅に合わせてフォントサイズを可変させる計算**:
  - デザインカンプが 1400px の場合の設定例。

```css
html {
  /* 画面幅1400pxで10pxになる計算 */
  /* minを使うことで、10pxより大きくならないようにロックする */
  font-size: min(10px, calc(10 / 1400 * 100vw));
}
```

- **%指定の落とし穴と解決策**:
  - % は親に対する割合なので、カンプ通りの最大サイズにならないことがある。
  - 解決策: % と max-width を併用する。

```css
.concept_card {
  width: 65%; /* 親の中での割合 */
  max-width: 63rem; /* これ以上大きくならないリミット */
}
```

---

## ■ ニュース・お知らせの構造（dl / dt / dd）

- **暗記用マークアップ**:
  - 日付とテキストのセット。

```html
<dl class="news_List">
  <div class="news_part">
    <dt>2021.01.01</dt>
    <dd>タイトルタイトルタイトルタイトル</dd>
  </div>
</dl>
```

---

## ■ その他の便利パターン

- **タイトル構造（h2 + span）**:
  - 日本語と英語を分けて装飾するために span で囲む。

```html
<h2 class="section-title">
  <span class="ja">新しい価値の創造</span>
  <span class="en">Create New Values</span>
</h2>
```

- **セクションへのジャンプ**:
  - HTML 側に id="about" を振り、URL 末尾に #about を付けて確認する。
