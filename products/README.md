# LUXE Global Products

Luxury cross-border EC product catalog (12 items) for Shopify Admin import.

このディレクトリは Shopify テーマファイルとは独立しており、`shopify theme push` の対象外です。

## ファイル

- `products.csv` — Shopify Product CSV import 形式 (UTF-8 with BOM)、12商品分。
- `gen_csv.py` — `products.csv` を生成する Python スクリプト。商品データの編集はこちらで行い、再生成してください。

## カタログ構成

| Category | Products | Price Range |
| --- | --- | --- |
| Apparel | Linen Tee / Wool Jacket / Canvas Sneakers | ¥4,800 – ¥28,000 |
| Home | Oak Chair / Ceramic Lamp / Walnut Table | ¥12,800 – ¥58,000 |
| Food | Ethiopia Coffee / Raw Honey / Assam Tea | ¥1,200 – ¥2,400 |
| Subscription | Coffee Monthly / Aroma Monthly / Notebook Monthly | ¥2,400 – ¥4,800 / 月 |

## インポート手順

1. **既存テストデータの削除（推奨）**
   - Shopify Admin → 商品管理 → 既存の Snowboard / Ski Wax / Gift Card 等を一括選択 → 削除
2. **CSV インポート**
   - Shopify Admin → 商品管理 → 「インポート」ボタン
   - `products.csv` を選択 → 「アップロード」
   - プレビュー画面で商品が正しく認識されているか確認
   - 「商品をインポート」をクリック
3. **画像取り込み確認**
   - Unsplash hotlink URL を Shopify が CDN にコピーします（初回インポート時のみ Unsplash を参照）
   - インポート完了後、各商品ページで画像が CDN URL (`cdn.shopify.com`) に置き換わっていることを確認
4. **Subscription 商品の月額制設定（別途、Phase 4 スコープ外）**
   - `coffee-monthly` / `aroma-monthly` / `notebook-monthly` の 3商品は通常商品としてインポートされます
   - 月額制にするには Shopify Subscription App または Selling Plans の設定が別途必要です
   - 設定方法: Shopify Admin → 商品管理 → 該当商品 → 「Selling Plans」セクションから設定

## CSV 仕様

- **エンコーディング:** UTF-8 with BOM (Excel 互換)
- **必須カラム:** Handle, Title (Shopify 公式仕様)
- **使用カラム数:** 28 (Shopify Product CSV の標準カラム)
- **画像:** Unsplash hotlink (license-free, 商用利用可)
- **Variant:** 各商品 1 variant (Title / Default Title)
- **在庫追跡:** Shopify (Variant Inventory Tracker = shopify)

## 商品の追加・編集

`gen_csv.py` の `PRODUCTS` リストを編集し、以下で再生成:

```bash
cd ~/dev/mer-prog/luxe-global
python3 products/gen_csv.py
```

## References

- [Shopify Help Center: Using CSV files to import and export products](https://help.shopify.com/en/manual/products/import-export/using-csv)
- [Shopify Help Center: Importing products with a CSV file](https://help.shopify.com/en/manual/products/import-export/import-products)
