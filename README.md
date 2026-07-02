# 沉浸式閱讀書架 · Immersive Reading Bookshelf

一個純靜態的線上書架：首頁是書架，點進每本書都是一個沉浸式閱讀網頁
（封面 / 導讀 / 人物或概念譜 / 時代軸 / 逐章閱讀 / 主題 / 金句 / 札記），
部分書支援中英雙語切換與背景音樂。無後端、無需 build。

## 目錄結構
- `index.html` — 書架首頁（讀 `shelf.data.js` 自動長出書封卡片）
- `shelf.data.js` — 書單清單（新增一本書就在這裡補一個區塊）
- `<書名>/` — 每一本書
  - `index.html`（結構＋CSS）、`engine.js`（互動邏輯）、`book.data.js`（該書全部內容）
  - 可選 `book.mp3`（背景音樂）

## 本機預覽
直接用瀏覽器開 `index.html`；或起一個靜態伺服器：

```bash
python -m http.server 8000
# 然後開 http://localhost:8000
```

## 部署
純靜態網站：**Build command 留空、Output 目錄為根目錄（/）**即可。
每次 `git push` 後自動重新部署。
