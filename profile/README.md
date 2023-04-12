# Recorder.moe

<p align="center">
  <img src="https://github.com/Recorder-moe/.github/raw/master/page.png" width="70%"/>
</p>

<p align="center">
  <span>Chinese</span> |
  <a href="https://github.com/Recorder-moe/.github/blob/master/profile/README.english.md">English</a>
</p>
<p align="center">
  <b>Recorder.moe</b> 錄影服務接受用戶的委託，為您錄製 <b>Vtuber</b> 直播。<br>
  幫您紀錄下每一次直播內容，不漏失任何一個精彩時刻！<br>
  <b>👉 <a href="https://beta.recorder.moe/" target="_blank">https://beta.recorder.moe</a></b>
</p>

詳細專案說明請見 [FAQ頁面](https://beta.recorder.moe/pages/faq)\
請加入 Discord 伺服器以了解更多: <https://discord.gg/2M689Aaq4b>

> **Note**\
> 此專案難以部署，並不推薦任何人自行架設。\
> 建議改用[其它的開源方案](https://blog.maki0419.com/2020/11/docker-youtube-dl-auto-recording-live-dl.html)。

## 專案的基礎架構介紹

本專案設計是以 Azure 服務為中心架構，以低成本且高 SLA 的服務搭配，以達到高可用性、高可擴展性的目的。

* Azure
  * 使用 Azure Static Web App 託管 Angular 前端網站
  * 使用 Azure Functions 作為後端 API
  * 使用 Azure Container Instance 動態部署錄影容器
  * 使用 Azure Blob Storage 儲存、提供錄影檔案
  * 使用 Azure Cosmos DB 作為資料庫
  * 使用 Azure Pipeline 建立 CI/CD
  * 使用 Azure DevOps 執行專案管理
* DigitalOcean
  * 在 DigitalOcean Droplet 上託管一台 Linux VM，運行監控 Worker Service & Seq log server
* GitHub
  * 在 GitHub 上開源專案
  * 使用 GitHub Container Registry 儲存 Docker Image
  * 使用 GitHub Actions 建立 CI/CD
* Cloudflare
  * 在 Cloudflare 上託管 DNS
  * 使用 Cloudflare Workers 建立網站的 Open Graph 預覧
  * 使用 Cloudflare 提供網頁 caching
* Docker Hub
  * 使用 Docker Hub 做為備援的 Container Registry

## 各個子專案

### LivestreamRecorderFrontend

【Angular 14】 本專案的前端 Angular 網頁。Template 購自 themeforest，依照 envatomarket Regular License 使用。由於 template 的 licence 限制，本專案程式碼閉源。

### [LivestreamRecorderBackend](https://github.com/Recorder-moe/LivestreamRecorderBackend)

【.NET 6 Azure Functions】 本專案的網頁後端 API。 使用 Azure Functions 降低後端成本，搭配 Azure App Service 內建的 EasyAuth 做 OAuth2.0 身份驗證，執行需驗證的資料庫交易。

### [LivestreamRecorderService](https://github.com/Recorder-moe/LivestreamRecorderService)

【.NET 7 Worker Service in Docker】 本專案的監控 Worker Service。監控所有的頻道，並在直播時動態建立 Azure Container Instance 啟動錄影。介接 Azure Cosmos DB，負責管理頻道、影片的資料和狀態。

### [AzureFileShares2BlobContainers](https://github.com/Recorder-moe/AzureFileShares2BlobContainers)

【.NET 6 Azure Functions】 負責把錄完的影片檔案由 Azure Files 傳輸至 Azure Blob Storage。 這是一支 Azure Function，由 LivestreamRecorderService 呼叫。 它和本專案的 Azure Storage 部署在同一個 Azure 區域，讓檔案在同區域內傳輸，不被收取額外的對外頻寬傳輸費用。

### [OpenGraphTagBuilder](https://github.com/Recorder-moe/OpenGraphTagBuilder)

【Cloudflare Worker】 依網址查詢 Azure Cosmos DB 的資料，並動態的調整 html open graph meta tag，提供外部預覧和 search engine crawler 使用。

## 專案的程式碼授權方式

本專案的所有程式碼財產皆保留所有權利，不得任意販售、使用、修改、再發佈。
