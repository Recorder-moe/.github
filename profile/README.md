<section align="center">
  <p>
    <img src="/static/img/preview.webp" width="70%" />
  </p>
  <h1>Recorder.moe</h1>
  <p>
    <b>Recorder.moe</b> 是一個進階的自動化串流直播錄影系統。
  </p>
  <p>
    我們使用容器化技術實現水平擴展，可以同時監控和錄製無限數量的頻道。
    <br />
    這個專案的核心設計考慮到雲端和地端運行，在成本、規模和可靠度之間取得平衡。
  </p>
  <p>
    <span>Chinese</span> |
    <a href="https://github.com/Recorder-moe/.github/blob/master/profile/README.english.md">
      English
    </a>
  </p>
</section>

> [!NOTE]\
> 試試我們的示範網站 😎\
> :point_right: [https://demo.recorder.moe](https://demo.recorder.moe)

## Recorder.moe 能做什麼?

- **自動監控**：系統會持續監視頻道，於開始串流直播時自動啟動錄影。
- **自動上傳**：錄影完成後，檔案將自動上傳至物件儲存體，方便你在網頁上觀看和下載影片。
- **自動刪除**：為節省儲存成本，你可以設定在指定的天數後自動刪除錄影檔案。
- **監視來源狀態**：我們會持續監視來源影片的狀態，在來源被刪除時以醒目提示提醒你。

## 為什麼選擇 Recorder.moe

- **開源免費**：本專案大部分程式碼都是開源的，可以免費使用和[參與開發](https://github.com/Recorder-moe)。
- **自動化**：只需設定好頻道，系統就能自動監控、錄影和上傳。
- **友善的使用者介面**：提供網頁界面，可在網頁上管理頻道和影片。
- **支援多平台**: 支援 Youtube、Twitch、Twitcasting、FC2 等多個串流平台。
- **水平擴展**：透過容器技術，系統能同時處理無限數量的錄影，上限取決於你的部署方式和預算。
- **兼容多種基礎設施**：核心設計考慮到雲端和地端部署，在雲端服務中享有高可靠性、高可用性、自動水平擴展；在地端運行可維持低成本和私密性。

## 什麼樣的人適合 Recorder.moe

這是一套較大型的系統，需要具備一些維運知識才能部署。以下是你需要具備的能力：

- 理解基本的網路架構
- 瞭解網頁前後端、資料庫和儲存體的概念
- 至少熟悉 Azure 或 Kubernetes 其一

> [!IMPORTANT]\
> Recorder.moe 曾經是面向一般使用者的付費錄影服務平台，自 2023/5/14 後轉型為供個人架設的錄影系統。\
> 這套系統的門檻相對較高，不建議沒有相關知識的人部署。😉\
>\
> 如果您有任何問題，歡迎到本專案的 Discord 詢問\
> :point_right: [https://discord.gg/2M689Aaq4b](https://discord.gg/2M689Aaq4b)
