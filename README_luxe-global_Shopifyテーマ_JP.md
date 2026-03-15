# LUXE Global — 越境EC特化プレミアムShopifyテーマ

> **何を:** 高級感のあるダークモード対応・多言語越境ECストアを実現するShopify Online Store 2.0テーマ
> **誰に:** Shopify Plus / 越境ECマーチャント、グローバル展開を目指すD2Cブランド
> **技術:** Shopify Online Store 2.0 · Liquid · Vanilla CSS (CSS Custom Properties) · Vanilla JS · Google Fonts

**ソースコード:** [github.com/mer-prog/luxe-global](https://github.com/mer-prog/luxe-global)

---

## このプロジェクトで証明できるスキル

| スキル | 実装内容 |
|--------|----------|
| Shopify テーマ開発 | Online Store 2.0準拠のJSON テンプレート設計、58セクション・39スニペットのモジュラー構成 |
| デザインシステム設計 | CSS変数による一元管理（カラー・タイポグラフィ・スペーシング）、ライト/ダークモード完全対応 |
| レスポンシブ設計 | モバイルファースト（375px〜）、4段階ブレークポイント、44px以上のタッチターゲット保証 |
| 国際化（i18n） | Shopify Locales APIによる51言語対応、ハードコードテキストゼロの完全翻訳対応 |
| パフォーマンス最適化 | セクション単位のCSS分離、ネイティブ遅延読み込み、外部ライブラリ不使用の軽量設計 |
| アクセシビリティ | WCAG 2.1準拠、スキップリンク、フォーカストラップ、キーボードナビゲーション対応 |
| フロントエンド実装 | フレームワーク不使用のVanilla CSS/JSで高度なUI（ドロワーメニュー、アコーディオン、画像ホバー切替）を実装 |

---

## 技術スタック

| カテゴリ | 技術 | 用途 |
|----------|------|------|
| プラットフォーム | Shopify Online Store 2.0 | ECストア基盤、JSONテンプレートによるセクション管理 |
| テンプレート言語 | Liquid | 動的HTML生成、商品・カート・アカウント等のデータバインディング |
| スタイリング | Vanilla CSS (CSS Custom Properties, BEM命名) | デザイントークン管理、セクション単位の分離CSS（69ファイル / 14,086行） |
| JavaScript | Vanilla JS (ES6+) | ドロワーメニュー、カート操作、検索、ローカリゼーション（33ファイル / 5,438行） |
| フォント | Google Fonts | Cormorant Garamond（見出し）、DM Sans（本文） |
| 国際化 | Shopify Locales API | 51言語のJSONファイル管理、`{{ 'key' \| t }}` フィルターによる翻訳 |
| 開発ツール | Shopify CLI | ローカル開発サーバー、テーマチェック、デプロイ |

---

## アーキテクチャ概要

```
┌─────────────────────────────────────────────────────────────────┐
│                       Shopify Storefront                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────────────────────────────┐   │
│  │ layout/      │    │ templates/ (JSON)                    │   │
│  │ theme.liquid │───▶│ index.json / product.json / etc.     │   │
│  │  (HTML骨格)  │    │  (セクション配置定義)                │   │
│  └──────────────┘    └──────────┬───────────────────────────┘   │
│                                 │                               │
│                    ┌────────────▼────────────┐                  │
│                    │ sections/ (58 Liquid)   │                  │
│                    │ hero-banner / header /  │                  │
│                    │ featured-collection /   │                  │
│                    │ product-grid / faq /    │                  │
│                    │ brand-story / footer    │                  │
│                    └────────────┬────────────┘                  │
│                                 │                               │
│              ┌──────────────────┼──────────────────┐            │
│              ▼                  ▼                   ▼           │
│  ┌────────────────┐  ┌─────────────────┐  ┌────────────────┐   │
│  │ snippets/ (39) │  │ assets/         │  │ locales/ (51)  │   │
│  │ product-card   │  │ base.css        │  │ en.default.json│   │
│  │ language-      │  │ section-*.css   │  │ ja.json        │   │
│  │   selector     │  │ theme.js        │  │ de/fr/ko/...   │   │
│  │ cart-drawer    │  │ global.js       │  │                │   │
│  └────────────────┘  └─────────────────┘  └────────────────┘   │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ config/settings_schema.json (1,455行)                    │   │
│  │  テーマ設定スキーマ: ロゴ / カラースキーム /              │   │
│  │  タイポグラフィ / ソーシャル / セクション設定             │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 主要機能

### 1. ヒーローバナー（`sections/hero-banner.liquid` — 114行）
フルビューポートの画像/動画背景に、オーバーレイテキストとCTAボタンを配置。オーバーレイ透過度はschemaで0〜100%調整可能。モバイルでは80vh、デスクトップでは100vhの高さ。`section-hero.css`（102行）で見出しに `clamp(2.5rem, 7vw, 5rem)` の流体タイポグラフィを適用。

### 2. フィーチャードコレクション（`sections/featured-collection.liquid` — 103行）
指定コレクションから4〜12商品をグリッド表示。モバイル2列→タブレット3列→デスクトップ3〜4列のレスポンシブグリッド。`product-card` スニペットを使用し、ホバー時にセカンダリ画像へ切り替え。「すべて見る」リンク付き。

### 3. 商品カード（`snippets/product-card.liquid` — 92行）
ベンダー名、商品名、価格を表示。2枚目の商品画像がある場合、デスクトップでホバー時にCSSのみで画像を切り替え。セール・売り切れバッジ対応。`@media (hover: hover)` でタッチデバイスではホバー効果を無効化。

### 4. ブランドストーリー（`sections/brand-story.liquid` — 100行）
画像+テキストの2カラムレイアウト。画像配置を左右切替可能（CSS Grid の `direction: rtl` トリック使用）。モバイルでは縦積み。`section-brand-story.css`（74行）で画像に4:5アスペクト比を適用。

### 5. FAQアコーディオン（`sections/faq.liquid` — 92行）
ネイティブ `<details>/<summary>` 要素によるアコーディオン。JavaScriptなしで動作。最大10項目のブロック対応。`section-faq.css`（97行）で開閉時のプラスアイコン45度回転アニメーション。

### 6. ニュースレター（`sections/newsletter.liquid` — 143行）
ダーク背景のメール登録フォーム。Shopifyの顧客作成エンドポイントに送信、「newsletter」タグを付与。インラインCSSで自己完結型。モバイルでは入力とボタンが縦並び。

### 7. ダークモード
`<html>` 要素の `data-theme` 属性で切替。CSS変数が自動的に切り替わる（ライト: 白背景 #FFFFFF + 金 #C9A96E / ダーク: 黒背景 #1A1A1A + 金 #D4AF37）。`localStorage` で永続化、`prefers-color-scheme` でシステム設定を自動検出。

### 8. 多言語対応
Shopify Locales APIを使用。`language-selector.liquid`（38行）でドロップダウン言語切替UI。テンプレート内の全テキストは `{{ 'key' | t }}` フィルターで参照。51言語のJSONファイルを同梱。

### 9. モバイルメニュードロワー
`theme.js`（40行）で実装。固定オーバーレイのスライドインメニュー。`data-menu-toggle` / `data-menu-drawer` データ属性でトリガー。開閉時に `body` の `overflow: hidden` を制御。

### 10. ヘッダー（`sections/header.liquid` — 301行）
スティッキーヘッダー（z-index: 100）。ロゴ、デスクトップナビゲーション、テーマ切替ボタン、言語セレクター、カートアイコン（バッジ付き）を配置。モバイルではハンバーガーメニューに切替。

---

## デザインシステム

### カラーパレット

| 要素 | ライトモード | ダークモード |
|------|-------------|-------------|
| 背景 | `#FFFFFF` | `#1A1A1A` |
| テキスト | `#1A1A1A` | `#F5F5F5` |
| テキスト（ミュート） | `#6B6B6B` | `#A0A0A0` |
| アクセント（金） | `#C9A96E` | `#D4AF37` |
| アクセント（ホバー） | `#B8963F` | `#E0C068` |
| ボーダー | `#E5E5E5` | `#333333` |
| オーバーレイ | `rgba(0,0,0,0.45)` | `rgba(0,0,0,0.6)` |

### タイポグラフィ

| 用途 | フォント | ウェイト | 特徴 |
|------|----------|---------|------|
| 見出し | Cormorant Garamond（セリフ） | 400, 500, 600 | `letter-spacing: 0.02em`、`clamp()` による流体サイジング |
| 本文 | DM Sans（サンセリフ） | 400, 500, 700 | `line-height: 1.6` |

### スペーシングスケール

```
--space-xs:  0.25rem (4px)    --space-lg:  2rem   (32px)
--space-sm:  0.5rem  (8px)    --space-xl:  4rem   (64px)
--space-md:  1rem    (16px)   --space-2xl: 6rem   (96px)
                              --space-3xl: 8rem   (128px)
```

### レスポンシブブレークポイント

| 名称 | 幅 | 対象 |
|------|-----|------|
| ベース | 375px〜 | モバイル（設計基準） |
| sm | 640px | モバイル横向き |
| md | 768px | タブレット |
| lg | 1024px | デスクトップ |
| xl | 1280px（`--page-width`） | 大画面 |

---

## プロジェクト構成

```
luxe-global/                    382ファイル
├── assets/                     CSS 69ファイル (14,086行) / JS 33ファイル (5,438行)
│   ├── base.css                241行  デザイントークン・リセット・共通スタイル
│   ├── section-hero.css        102行  ヒーローバナー用スタイル
│   ├── section-product-grid.css 174行  商品グリッド・カード用スタイル
│   ├── section-brand-story.css  74行  ブランドストーリー用スタイル
│   ├── section-faq.css          97行  FAQアコーディオン用スタイル
│   ├── theme.js                 40行  ドロワーメニュー制御（LUXE固有）
│   ├── global.js             1,332行  ユーティリティ・イベント管理・フォーカス制御
│   ├── cart.js                 297行  カート状態管理・API呼び出し
│   ├── product-info.js         429行  商品情報表示・インタラクション
│   ├── facets.js               365行  コレクションフィルタリング（AJAX）
│   ├── predictive-search.js    277行  ライブ検索候補表示
│   └── ...                     その他CSS/JSファイル
├── config/
│   ├── settings_schema.json  1,455行  テーマ設定スキーマ定義
│   └── settings_data.json           現在のテーマ設定値
├── layout/
│   └── theme.liquid            110行  HTML骨格・フォント読み込み・ダークモード初期化
├── locales/                    51ファイル (87,297行)
│   ├── en.default.json         539行  英語（デフォルト）
│   ├── ja.json                 539行  日本語
│   └── *.json                        de/fr/es/ko/zh-CN等 49言語
├── sections/                   58ファイル (22,563行 ※Liquid全体)
│   ├── hero-banner.liquid      114行  フルスクリーンヒーロー
│   ├── featured-collection.liquid 103行  コレクション商品表示
│   ├── product-grid.liquid      80行  商品グリッド（ページネーション対応）
│   ├── brand-story.liquid      100行  ブランドストーリー2カラム
│   ├── faq.liquid               92行  FAQアコーディオン
│   ├── newsletter.liquid       143行  メール登録フォーム
│   ├── header.liquid           301行  スティッキーヘッダー
│   ├── footer.liquid           208行  フッター
│   └── ...                           商品詳細・カート・ブログ・顧客アカウント等
├── snippets/                   39ファイル
│   ├── product-card.liquid      92行  商品カード（ホバー画像切替）
│   ├── language-selector.liquid 38行  言語切替ドロップダウン
│   └── ...                           カートドロワー・ページネーション等
└── templates/                  20ファイル
    ├── index.json               78行  トップページセクション配置
    ├── product.json             88行  商品詳細ページ
    ├── collection.json          23行  コレクションページ
    └── ...                           カート・ブログ・顧客アカウント等
```

---

## セットアップ

### 前提条件

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) がインストール済み
- Shopify開発ストアへのアクセス権

### 手順

```bash
# リポジトリのクローン
git clone https://github.com/mer-prog/luxe-global.git
cd luxe-global

# ローカル開発サーバーの起動
shopify theme dev --store your-store-name

# テーマのLintチェック
shopify theme check

# ストアへデプロイ
shopify theme push --store your-store-name
```

### 環境変数

| 変数 | 説明 | 必須 |
|------|------|------|
| `--store` | Shopify CLIコマンド実行時のストア名 | はい |

※ 外部APIキーや環境変数ファイル（`.env`）は不要。全機能がShopifyプラットフォーム上で完結。

---

## 設計判断の根拠

| 判断 | 根拠 |
|------|------|
| CSS フレームワーク不使用（Vanilla CSS） | 外部依存ゼロで軽量化。CSS変数でデザインシステムを一元管理でき、ダークモード切替が容易 |
| JS フレームワーク不使用（Vanilla JS） | Shopifyテーマは軽量であるべき。theme.jsは40行で十分な機能を実現。`global.js` はShopify標準 |
| セクション単位のCSS分離 | Shopifyのオンデマンド読み込みと相性が良く、使用しないセクションのCSSは読み込まない |
| ネイティブ `<details>/<summary>` でアコーディオン | JavaScript不要、アクセシブル、ブラウザ互換性が高い |
| `data-theme` 属性でダークモード | CSS変数の切替が1セレクタで完結。`localStorage` で永続化、`prefers-color-scheme` でOS設定に追従 |
| BEMライクなCSS命名規則 | セクション横断でのクラス名衝突を防止。`.section-hero__title` のように所属が明確 |
| モバイルファースト設計 | 越境ECのモバイルユーザー比率が高い。375pxを基準に `min-width` で段階的に拡張 |
| Google Fonts（Cormorant Garamond + DM Sans） | 無料で高品質な書体。セリフ×サンセリフの組み合わせで高級感を演出 |
| `clamp()` による流体タイポグラフィ | ブレークポイント不要の滑らかなサイズ変化。見出しが全画面幅で最適化 |

---

## 運用コスト

| サービス | プラン | 月額 |
|----------|--------|------|
| Shopify | 開発ストア（Dev Store） | 無料 |
| Google Fonts | 無料 | $0 |
| 外部API / サービス | なし | $0 |
| **合計** | | **$0** |

※ 本番運用時はShopifyの各プランの月額費用が発生（Basic $39〜 / Shopify Plus $2,300〜）

---

## 作者

[@mer-prog](https://github.com/mer-prog)
