# LUXE Global — 越境EC特化 Shopify テーマ

## プロジェクト概要

Upworkポートフォリオ用のShopifyテーマ。高級感のある越境ECストア向けに設計。
Online Store 2.0準拠、ダークモード対応、多言語（日英）対応。

**ターゲット:** Shopify Plus / 越境ECマーチャント
**Dev Store:** ryo-dev-plus（Shopify Plus Dev Store）

## 技術スタック

- Shopify Online Store 2.0
- Liquid テンプレート言語
- Vanilla CSS（CSS変数ベース、フレームワーク不使用）
- Vanilla JS（最小限、ダークモード切替・言語トグル程度）
- Google Fonts（Cormorant Garamond / DM Sans）

## デザイン方針

- **トーン:** Luxury/Refined — 黒×金×白のミニマルラグジュアリー
- **タイポグラフィ:** 見出し → Cormorant Garamond（セリフ）、本文 → DM Sans（サンセリフ）
- **カラーパレット:**
  - ライトモード: 背景 #FFFFFF, テキスト #1A1A1A, アクセント #C9A96E（金）
  - ダークモード: 背景 #1A1A1A, テキスト #F5F5F5, アクセント #D4AF37（金）
- **モバイルファースト:** 375px〜のレスポンシブ、タッチターゲット44px以上

## ディレクトリ構成

luxe-global/
├── CLAUDE.md
├── assets/
│   ├── base.css
│   ├── section-hero.css
│   ├── section-product-grid.css
│   ├── section-brand-story.css
│   ├── section-faq.css
│   └── theme.js
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   ├── en.default.json
│   └── ja.json
├── sections/
│   ├── header.liquid
│   ├── hero-banner.liquid
│   ├── featured-collection.liquid
│   ├── product-grid.liquid
│   ├── brand-story.liquid
│   ├── faq.liquid
│   ├── newsletter.liquid
│   └── footer.liquid
├── snippets/
│   ├── product-card.liquid
│   ├── language-selector.liquid
│   └── icon-*.liquid
└── templates/
    ├── index.json
    ├── product.json
    └── collection.json

## セクション仕様

### hero-banner.liquid
- フルワイドの画像/動画背景
- オーバーレイテキスト（見出し・サブテキスト・CTAボタン）
- schema: 画像、見出し、サブテキスト、ボタンテキスト、ボタンURL、オーバーレイ透過度

### featured-collection.liquid
- 指定コレクションから商品を表示（4〜8商品）
- グリッド表示（モバイル2列 / デスクトップ4列）
- schema: コレクション選択、表示件数、列数

### product-grid.liquid
- product-card snippetを使用
- ホバーで画像切り替え（2枚目の画像があれば）
- 価格表示は通貨フォーマット対応

### brand-story.liquid
- 画像＋テキストの2カラムレイアウト（モバイルは縦積み）
- schema: 画像、見出し、本文テキスト、ボタン

### faq.liquid
- アコーディオン形式
- schema: FAQ項目のブロック（質問＋回答のペア、最大10個）

### language-selector.liquid（snippet）
- Shopify Locales APIからロケール一覧を取得
- ドロップダウンで言語切替

## i18n方針

- Shopify Locales機能を使用（locales/*.json）
- テキストのハードコード禁止。全て {{ 'key' | t }} フィルターで参照
- デフォルト言語: 英語（en.default.json）
- 日本語: ja.json
- 日付・数値はShopifyのロケールフォーマットに従う

## レスポンシブ基準

- ブレークポイント: sm(640px) / md(768px) / lg(1024px) / xl(1280px)
- 375px〜で快適に操作できることを最優先
- タッチターゲット最低44px
- ホバー前提のUIにしない（ホバーはプログレッシブ・エンハンスメント）

## コーディング規約

- CSS: BEMライクな命名（.section-hero__title, .product-card__price）
- CSS変数はbase.cssで一元管理（--color-primary, --color-accent等）
- Liquid: セクションごとにCSSファイルを分離
- JS: 最小限。外部ライブラリ不使用
- schema内のsetting idはスネークケース（hero_heading, overlay_opacity）

## コミット規約

Conventional Commits形式:
- feat: 新機能追加
- fix: バグ修正
- refactor: リファクタリング
- style: スタイル修正
- docs: ドキュメント更新
- chore: 設定・雑務

## テスト方針

- shopify theme check でLintチェック
- 各ブレークポイントでの表示確認（375px / 768px / 1024px / 1280px）
- ダークモード切替の動作確認
- 言語切替の動作確認（en <-> ja）

## MVPスコープ

含む:
- 上記セクション全て動作
- ダークモード切替
- 日英テキスト切替（Shopify locales）
- レスポンシブ全ブレークポイント

含まない（来週以降）:
- カスタムセクションの追加バリエーション
- カート・チェックアウトのカスタマイズ

## コスト

完全無料（Google Fonts使用）

## 開発コマンド

shopify theme dev --store ryo-dev-plus
shopify theme check
shopify theme push --store ryo-dev-plus
