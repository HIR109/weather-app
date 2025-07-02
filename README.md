# 天気アプリ（React + TypeScript）

ReactとTypeScriptを使って開発した、都市名を入力すると現在の天気情報（気温・湿度・風速・天気アイコン）を表示するアプリです。WeatherAPIを利用しており、昼夜に応じて背景テーマも自動で切り替わります。学習目的で作成し、コンポーネント分割やAPI連携、環境変数、GitHub Pagesによるデプロイまで一通り実装しています。

## 主な機能

- 都市名での天気検索（Enterキーまたは検索アイコン）
- 天気アイコン、気温、湿度、風速の表示
- 昼夜テーマの自動切り替え（`is_day` を判定）
- コンポーネント分割（`SearchBar`、`WeatherInfo`、`WeatherDetails`）

## 使用技術

- React（v19）
- TypeScript
- Vite（v7）
- WeatherAPI
- GitHub Pages（`gh-pages`）

## デモ

▶ [アプリを開く](https://hir109.github.io/weather-app/)

## セットアップ方法

```bash
git clone https://github.com/HIR109/weather-app.git
cd weather-app
npm install
```

## 環境変数の設定

.env ファイルをプロジェクト直下に作成し、以下を記述してください：

```env
VITE_APP_ID=（WeatherAPIのAPIキー）
※ `.env` ファイルは `.gitignore` によってGit管理から除外されています。APIキーは公開しないようご注意ください。
```

## ローカル起動

```bash
npm run dev
```

## 備考
デザインは最小限ですが、API連携や環境変数の管理、昼夜テーマ切り替え、情報の取得・表示、検索操作などの基本UIをReactとTypeScriptで構築しており、今後はレスポンシブ対応やUI改善も検討中です。

作者：MERA HIROKI（@HIR109）
