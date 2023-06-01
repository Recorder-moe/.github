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

> **Warning**
> Recorder.moe 曾經是面向一般使用者的「錄影服務」平台，自 2023/5/14 後轉型為供個人使用的開源錄影解決方案。
> 專案目前尚未完成轉型，一部份設計可能和此文件不相同。
> 若是有疑問，請至 Discord 伺服器詢問。 <https://discord.gg/2M689Aaq4b>

## 系統架構

本系統分為以下幾個大架構

|              | 架構                                              | 說明                                  |
|--------------|---------------------------------------------------|-------------------------------------|
| 網頁前端     | Angular 14                                        | 靜態網頁，可以放在任何網頁伺服器上     |
| 網頁後端     | .NET 6 Azure Functions                            | 網頁的 API，執行需要驗證身份的網頁操作 |
| 資料庫       | Azure Cosmos DB                                   | 保存頻道、影片、使用者資料              |
| 儲存體       | Azure Blob Storage / Amazon S3-Compatible Storage | 存放圖片實體檔案、影片實體檔案         |
| 監控服務     | .NET 7 Worker Service                             | 管理及監控頻道、影片的狀態，啟動錄影    |
| 錄影容器平台 | Azure Container Instance / Kubernetes             | 執行錄影容器的平台，由監控服務自動部署 |

## 基礎設施

|              | 推薦的基礎設施           | 省錢的基礎設施                                  |
|--------------|--------------------------|-------------------------------------------------|
| 網頁前端     | Azure Static Web Apps    | Azure Static Web Apps *                         |
| 網頁後端     | Azure Functions          | Azure Functions **                              |
| 資料庫       | Azure Cosmos DB          | Azure Cosmos DB ***                             |
| 儲存體       | Azure Blob Storage       | DigitalOcean Droplet -> Kubernetes -> MinIO     |
| 監控服務     | Azure Container Instance | DigitalOcean Droplet -> Kubernetes -> Container |
| 錄影容器平台 | Azure Container Instance | DigitalOcean Droplet -> Kubernetes              |

\* Azure Static Web Apps 的免費方案每月有 100 GB 的傳輸量，免費 SSL 憑證，可自訂網域。\
<https://azure.microsoft.com/zh-tw/pricing/details/app-service/static/>
\*\* Azure Functions 免費授權每個月一百萬次請求，400000 GB-s 執行時間，本專案使用量不可能超過此額度。\
<https://azure.microsoft.com/zh-tw/pricing/details/functions/>
\*\*\* Azure Cosmos DB 免費層包含 1000 RU/s，大約在監控 6 個頻道時不會超過，多餘部份按照用量計價。\
<https://learn.microsoft.com/zh-tw/azure/cosmos-db/free-tier>

> **Note**
> 若不考慮可用性和水平擴展性，**最簡單**的基礎設施是在單一台主機上，用一個 Kubernetes 設定檔搞定除了資料庫以外的所有服務。

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
