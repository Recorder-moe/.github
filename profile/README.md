# Recorder.moe

<p align="center">
  <img src="https://github.com/Recorder-moe/.github/raw/master/page.png" width="70%"/>
</p>

<p align="center">
  <span>Chinese</span> |
  <a href="https://github.com/Recorder-moe/.github/blob/master/profile/README.english.md">English</a>
</p>
<p align="center">
  <b>Recorder.moe</b> 是一個進階的開源自動化錄影系統。
</p>

> **Warning**\
> Recorder.moe 曾經是面向一般使用者的「錄影服務」平台，自 2023/5/14 後轉型為供個人架設的開源錄影解決方案。\
> 若有疑問可至 Discord 伺服器詢問。 <https://discord.gg/2M689Aaq4b>

> **Note**\
> 請在此閱讀完整設定文檔 <https://doc.recorder.moe>

## 系統架構

本系統分為以下幾個大架構

|              | 架構                                              | 說明                                  |
|--------------|---------------------------------------------------|-------------------------------------|
| 網頁前端     | Angular 14                                        | 靜態網頁，可以放在任何網頁伺服器上     |
| 網頁後端     | .NET 6 Azure Functions                            | 網頁的 API，執行需要驗證身份的網頁操作 |
| 資料庫       | Azure Cosmos DB / Apache Couch DB                 | 保存頻道、影片、使用者資料              |
| 儲存體       | Azure Blob Storage / Amazon S3-Compatible Storage | 存放圖片實體檔案、影片實體檔案         |
| 監控服務     | .NET 7 Worker Service                             | 管理及監控頻道、影片的狀態，啟動錄影    |
| 錄影容器平台 | Azure Container Instance / Kubernetes             | 執行錄影容器的平台，由監控服務自動部署 |
| Sitemap & OpenGraph tags 產生器 | Cloudflare Workers            | 即時產生 Sitemap 清單以及網頁預覧    |

## 各個子專案

### [k8s-recorder.moe](https://github.com/Recorder-moe/k8s-recorder.moe)

【Helm charts】 本專案的 Kubernetes Helm chart，用於部署網頁前端、網頁後端、監控服務、Ingress，以及錄影容器的運行環境。

### [LivestreamRecorderFrontend](https://github.com/Recorder-moe/LivestreamRecorderFrontend_dist)

【Angular 14】 本專案的前端 Angular 網頁。Template 購自 themeforest，依照 envatomarket Regular License 使用。由於 template 的 licence 限制，本專案程式碼閉源，僅發佈 dist。

### [LivestreamRecorderBackend](https://github.com/Recorder-moe/LivestreamRecorderBackend)

【.NET 6 Azure Functions】 本專案的網頁後端 API。進行登入帳號驗證，以及執行管理操作。能在 Azure Functions 或是 docker 環境運行。

### [LivestreamRecorderService](https://github.com/Recorder-moe/LivestreamRecorderService)

【.NET 7 Worker Service】 本專案的監控 Worker Service。監控所有的頻道，並在直播開始時動態建立錄影容器。介接資料庫，負責管理頻道、影片的資料狀態。

### [OpenGraphTagBuilder](https://github.com/Recorder-moe/OpenGraphTagBuilder)

【Cloudflare Worker】 依網址查詢資料庫，並動態的調整 html open graph meta tag 和 Sitemap，提供外部預覧和供 search engine crawler 使用。
