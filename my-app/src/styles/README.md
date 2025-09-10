# CSS アーキテクチャ

このディレクトリには、プロジェクト全体のCSSファイルがカテゴリー別に整理されています。

## ファイル構造

```
src/styles/
├── variables.css    # CSS変数、テーマ設定
├── globals.css      # グローバル要素（body、h1、button等）
├── layout.css       # レイアウト関連（#root、カード、フレックス等）
├── components.css   # 再利用可能コンポーネント（ロゴ、ボタン等）
├── animations.css   # アニメーション定義
└── README.md        # このファイル
```

## インポート順序

`src/index.css`でのインポート順序は以下の通りです：

1. **variables.css** - CSS変数とテーマが最初に読み込まれる
2. **globals.css** - 基本的なHTML要素のスタイル
3. **layout.css** - レイアウト構造
4. **components.css** - 再利用可能なコンポーネント
5. **animations.css** - アニメーション（最後に読み込み）

## 各ファイルの役割

### `variables.css`
- CSS変数（カラー、フォント、スペーシング等）
- テーマ設定（ライト/ダークモード）
- ブレークポイント定義
- グローバルフォント設定

### `globals.css`
- HTML基本要素のスタイル（a、body、h1、button）
- レスポンシブな基本設定
- フォーカス状態の設定

### `layout.css`
- 主要なレイアウト（#root、containers）
- Flexbox/Gridレイアウト
- レスポンシブレイアウト調整

### `components.css`
- 再利用可能なUI要素（.logo、.card等）
- コンポーネント固有のスタイル
- ホバーエフェクト

### `animations.css`
- キーフレームアニメーション
- トランジション設定
- モーション設定への配慮

## CSS変数の使用

CSS変数を使用してテーマの一貫性を保ちます：

```css
/* 例 */
.my-component {
  color: var(--color-text);
  background: var(--color-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
}
```

## レスポンシブデザイン

ブレークポイントは変数で管理：

- `--breakpoint-sm`: 640px
- `--breakpoint-md`: 768px  
- `--breakpoint-lg`: 1024px
- `--breakpoint-xl`: 1280px

## 新しいスタイルの追加

1. **グローバル要素**: `globals.css`に追加
2. **レイアウト**: `layout.css`に追加
3. **再利用コンポーネント**: `components.css`に追加
4. **アニメーション**: `animations.css`に追加
5. **コンポーネント固有**: 各コンポーネントの`.css`ファイルに追加

## ベストプラクティス

- CSS変数を積極的に活用
- BEM記法または意味のあるクラス名を使用
- レスポンシブファーストで設計
- アクセシビリティを考慮（フォーカス、モーション等）