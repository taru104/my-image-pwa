# 👉 あんちをツンしよう (my-image-pwa)

![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8?logo=pwa&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)
![Vibe](https://img.shields.io/badge/vibe-🤏%20つんつん-ff69b4)

<img width="296" height="263" alt="スクリーンショット 2026-06-09 020442" src="https://github.com/user-attachments/assets/275dd5fc-9ad7-461b-9ddb-66ade2599bee" />
<img width="281" height="257" alt="スクリーンショット 2026-06-09 020433" src="https://github.com/user-attachments/assets/1c7bebed-49b2-4a48-8fcc-e6eff3f6ff24" />


画面のあんちを **ツンツンして反応を楽しむ**、ちょっとしたお遊びPWAです。
深い意味はありません。疲れたときにツンするためのアプリです。

## 🎮 遊んでみる

ブラウザで開くだけ。スマホで開いて「ホーム画面に追加」すれば、アプリのように起動できます。

**👉 <https://my-image-pwa.vercel.app/>**

<!-- TODO: ツンしている様子のGIFをここに貼ると一番伝わります（静止画より動きが命のアプリなので） -->
<!-- 例: ![demo](./images/demo.gif) -->

## ✨ 機能

- **タップでツン** — 画像をタップ（ツン）すると反応が返ってきます
- **PWA対応** — ホーム画面に追加してアプリとして起動でき、Service Workerによりオフラインでも動作します

<!-- TODO: 実際の挙動に合わせて加筆してください。例:
- ツンする向き・場所によって画像が切り替わる
- ツンした回数をカウントする
- 連打するとリアクションが変化する  など -->

## 🛠 使用技術

| 分類 | 使用技術 |
| --- | --- |
| 言語 | HTML5 / CSS3 / JavaScript (Vanilla) |
| アプリ化 | PWA (Web App Manifest + Service Worker) |
| ホスティング | Vercel |

フレームワークを使わず、画像の差し替えやタップ判定、Service Workerによるオフライン対応を素のJavaScriptで実装しています。小さなアプリですが、PWAの一連の仕組みをひととおり自分の手で組んでいます。

## 💻 ローカルでの動かし方

ビルド工程はありません。Service Workerは `file://` では動かないため、簡易サーバー経由で開いてください。

```bash
git clone https://github.com/taru104/my-image-pwa.git
cd my-image-pwa

# 任意の簡易サーバーで配信（例）
npx serve .
# または
python3 -m http.server 8000
```

表示されたローカルアドレス（例: `http://localhost:8000`）を開いてください。

## 📁 ファイル構成

```
my-image-pwa/
├── index.html          # 画面
├── style.css           # スタイル
├── script.js           # ツン判定・画像切り替えなどのロジック
├── manifest.json       # PWA 設定
├── service-worker.js   # オフライン対応
└── images/             # 表示する画像たち
```

---

*ゆるめの個人開発プロジェクトです。息抜きにどうぞ。*
