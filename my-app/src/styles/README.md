# CSS アーキテクチャ

このプロジェクトのCSSは、保守性と再利用性を重視して構造化されています。

## ディレクトリ構造

```
src/
├── index.css                    # メインCSSファイル（インポートのみ）
├── App.css                      # App.jsx専用スタイル
├── styles/                      # 共通スタイル
│   ├── variables.css           # CSS変数、テーマ設定
│   ├── globals.css             # グローバル要素
│   ├── layout.css              # レイアウト関連
│   ├── components.css          # 再利用可能コンポーネント
│   ├── animations.css          # アニメーション定義
│   └── README.md               # このファイル
├── components/                  # 個別コンポーネントスタイル
│   ├── Header.css              # Header専用スタイル
│   ├── Hero.css                # Hero専用スタイル
│   ├── Menu.css                # Menu専用スタイル
│   ├── Gallery.css             # Gallery専用スタイル
│   ├── About.css               # About専用スタイル
│   ├── Access.css              # Access専用スタイル
│   ├── Reserve.css             # Reserve専用スタイル
│   ├── Footer.css              # Footer専用スタイル
│   ├── BottomBar.css           # BottomBar専用スタイル
│   ├── index.css               # 全コンポーネントCSS一括インポート
│   ├── Header.jsx              # サンプルコンポーネント
│   └── Hero.jsx                # サンプルコンポーネント
└── pages/                      # 個別ページスタイル
    ├── Home.css                # Home専用スタイル
    ├── MenuIndex.css           # MenuIndex専用スタイル
    ├── MenuCategory.css        # MenuCategory専用スタイル
    ├── NotFound.css            # NotFound専用スタイル
    └── index.css               # 全ページCSS一括インポート
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

## コンポーネント専用CSSの使用方法

### 1. 個別インポート（推奨）

各コンポーネントで必要なCSSのみをインポート：

```jsx
// Header.jsx
import React from 'react';
import './Header.css'; // Header専用スタイル

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* コンポーネント内容 */}
      </div>
    </header>
  );
};

export default Header;
```

### 2. 一括インポート

すべてのコンポーネントCSSを一度にインポート：

```css
/* index.css または App.css で */
@import './components/index.css';
@import './pages/index.css';
```

### 3. 選択的インポート

特定のコンポーネントのみインポート：

```css
/* 必要なコンポーネントのみ */
@import './components/Header.css';
@import './components/Hero.css';
@import './components/Footer.css';
```

## CSS命名規則

### BEM記法を採用

```css
/* ブロック */
.header { }

/* エレメント */
.header__container { }
.header__logo { }
.header__nav { }

/* モディファイア */
.header__nav-link--active { }
.button--primary { }
.button--secondary { }
```

## 新しいコンポーネントの追加

1. **コンポーネントファイル作成**: `src/components/NewComponent.jsx`
2. **CSSファイル作成**: `src/components/NewComponent.css`
3. **コンポーネント内でインポート**:
   ```jsx
   import './NewComponent.css';
   ```
4. **必要に応じてインデックスに追加**: `src/components/index.css`

## スタイルの優先度

1. **variables.css** - CSS変数（最高優先度）
2. **globals.css** - 基本HTML要素
3. **layout.css** - レイアウト構造
4. **components.css** - 再利用可能コンポーネント
5. **個別CSS** - コンポーネント専用スタイル
6. **animations.css** - アニメーション（最低優先度）

## パフォーマンス考慮

- **個別インポート推奨**: 不要なCSSの読み込みを避ける
- **CSS変数活用**: テーマ変更時の効率化
- **メディアクエリ統一**: レスポンシブ対応の一貫性

## ベストプラクティス

- CSS変数を積極的に活用
- BEM記法で明確な命名
- レスポンシブファーストで設計
- アクセシビリティを考慮
- コンポーネント単位でのスタイル管理
- 不要なCSSインポートは避ける