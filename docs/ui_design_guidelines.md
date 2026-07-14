# ENJOYTRUCKERS VTC Portal UIデザイン方針（UI Design Guidelines）

本ドキュメントは、ENJOYTRUCKERS VTC Portalの開発において、統一されたモダンなユーザー体験を提供するためのUIデザインの方針と実装ガイドラインを定めます。
`docs/brand color.md` で定義されたブランドカラーに基づき、一貫した美しいデザインを維持してください。

## 1. ブランドカラー (Brand Colors)

システム全体で以下のブランドカラーを基準とします。

### ダークモード (Dark Mode)

- **背景 (Background):** `#1c1c1c`
- **文字 (Text):** `#ffffff`
- **アクセント (Accent):** `#ff1155`

### ライトモード (Light Mode)

- **背景 (Background):** `#ffffff`
- **文字 (Text):** `#000000`
- **アクセント (Accent):** `#ff1155`

## 2. デザインの基本原則 (Design Principles)

### 2.1. モダン・グラスモーフィズム (Glassmorphism)

カードやコンテナ要素には、すりガラスのような半透明の背景とぼかし（backdrop-blur）を活用し、立体的で最新鋭のUIを構築します。

- **実装例 (Tailwind CSS):**
  - ベース背景: `bg-white/80 dark:bg-[#1c1c1c]/60 backdrop-blur-xl`
  - 枠線 (Border): `border border-gray-200/50 dark:border-white/10`

### 2.2. ホバーアニメーションとインタラクション (Interactions & Animations)

ユーザーの操作に対して、直感的で心地よいフィードバックを提供します。

- ボタンやカードにマウスを乗せた際（Hover）は、シャドウを少し強くするか、背景色をわずかに変化させるアニメーション（`transition-all` 等）を付与します。
- **実装例 (Tailwind CSS):**
  - `shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]`
  - `hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all`

### 2.3. ダーク / ライトモードの完全な両立 (Dual Theme Support)

一部のページやコンポーネントがどちらかのモードで視認性が低下しないように、Tailwindの `dark:` モディファイアを活用して、文字色や背景色を明示的に切り替えます。

- **NG例:** `bg-[#1a1a1a] text-white` (ライトモード時に見えなくなる)
- **OK例:** `text-gray-900 dark:text-white` や `bg-white dark:bg-[#1c1c1c]`

## 3. コンポーネント別ガイドライン (Component Guidelines)

### 3.1. ボタン (Buttons)

- **プライマリアクション:** ブランドアクセントカラー（`#ff1155`）を基調とします。ホバー時は明るさやシャドウを調整し、押し心地を感じられるデザインにします。
- **セカンダリアクション:** 背景を薄いグレーや半透明にし、文字色でコントラストを保ちます。

### 3.2. テキスト・タイポグラフィ (Typography)

- 見出し（`h1`, `h2`, `h3`）は `font-bold` を使用し、コンテンツの階層を明確にします。
- 本文テキストや補足情報（Description等）には、真っ黒や真っ白ではなく少し抑えた色（`text-gray-700 dark:text-gray-300` や `text-gray-500 dark:text-gray-400` 等）を使用して、長時間の閲覧でも目が疲れないように配慮します。

### 3.3. 状態のフィードバック (State Feedback)

- **成功 (Success):** `text-green-500` や `bg-green-500/20` 等
- **警告 (Warning):** `text-yellow-500` や `bg-yellow-500/20` 等
- **エラー/危険 (Danger):** `text-red-500` や `bg-red-500/20` 等
- 非活動警告など、ユーザーに注意を促す箇所には適切なアラート色とアイコンを組み合わせて視認性を高めます。

---

*※ 今後、新しいページや機能を追加・改修する際は、必ず本ガイドラインと `brand color.md` を参照し、VTC Portal全体の統一されたモダンUIを維持してください。*
