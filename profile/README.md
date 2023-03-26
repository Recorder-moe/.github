# Recorder.moe

<img src="https://github.com/Recorder-moe/.github/raw/master/page.png" width="60%"/>

**Recorder.moe** 錄影服務接受用戶的委託，為您錄製 **Vtuber** 直播。\
幫您紀錄下每一次直播內容，不漏失任何一個精彩時刻！

**Recorder.moe** records your favorite **Vtuber** live streams.\
Capturing every exciting moment so you never miss a beat!\
(The English readme file is in the second half.)

詳細專案說明請見 [FAQ頁面](https://alpha.recorder.moe/pages/faq)

**本專案目前在 Discord 內進行 alpha 測試。**
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

### LivestreamRecorderBackend

【.NET 6 Azure Functions】 本專案的網頁後端 API。 使用 Azure Functions 降低後端成本，搭配 Azure App Service 內建的 EasyAuth 做 OAuth2.0 身份驗證，執行需驗證的資料庫交易。

### LivestreamRecorderService

【.NET 7 Worker Service in Docker】 本專案的監控 Worker Service。監控所有的頻道，並在直播時動態建立 Azure Container Instance 啟動錄影。介接 Azure Cosmos DB，負責管理頻道、影片的資料和狀態。

### AzureFileShares2BlobContainers

【.NET 6 Azure Functions】 負責把錄完的影片檔案由 Azure Files 傳輸至 Azure Blob Storage。 這是一支 Azure Function，由 LivestreamRecorderService 呼叫。 它和本專案的 Azure Storage 部署在同一個 Azure 區域，讓檔案在同區域內傳輸，不被收取額外的對外頻寬傳輸費用。

### OpenGraphTagBuilder

【Cloudflare Worker】 依網址查詢 Azure Cosmos DB 的資料，並動態的調整 html open graph meta tag，提供外部預覧和 search engine crawler 使用。

## 專案的程式碼授權方式

本專案的所有程式碼財產皆保留所有權利，不得任意販售、使用、修改、再發佈。

## English readme

For detailed project description, please see [FAQ page](https://alpha.recorder.moe/pages/faq)

**This project is currently undergoing alpha testing in Discord.**
Please join the Discord server for more information: <https://discord.gg/2M689Aaq4b>

> **Note**\
> This project is difficult to deploy and it is not recommended for anyone to set up by themselves.\
> It is recommended to use [other open-source solutions](https://blog.maki0419.com/2020/11/docker-youtube-dl-auto-recording-live-dl.html) instead.

## Project architecture and Infrastructures

This project is designed with Azure services as the central architecture, combining low-cost and high-SLA services to achieve high availability and scalability.

* Azure
  * Use Azure Static Web App to host Angular front-end website
  * Use Azure Functions as the back-end API
  * Use Azure Container Instance to dynamically deploy recording containers
  * Use Azure Blob Storage to store and provide archived files
  * Use Azure Cosmos DB as the database
  * Use Azure Pipeline to establish CI/CD
  * Use Azure DevOps to execute project management
* DigitalOcean
  * Host a Linux VM on DigitalOcean Droplet to run monitoring Worker Service & Seq log server
* GitHub
  * The project repositories are open source on GitHub
  * Use GitHub Container Registry to store Docker Images
  * Use GitHub Actions to establish CI/CD
* Cloudflare
  * DNS is hosted on Cloudflare
  * Use Cloudflare Workers to dynamically create website Open Graph previews
  * Use Cloudflare to provide web page caching
* Docker Hub
  * Use Docker Hub as the fallback container registry

## Sub-projects

### LivestreamRecorderFrontend

【Angular 14】 The frontend Angular web page of this project. Template purchased from themeforest and used under envatomarket Regular License. Due to license restrictions of the template used, the code of this project is closed source.

### LivestreamRecorderBackend

【.NET 6 Azure Functions】 The backend API of this project's web page. Uses Azure Functions to reduce backend costs and Azure App Service's built-in EasyAuth for OAuth2.0 identity verification to execute authenticated database transactions.

### LivestreamRecorderService

【.NET 7 Worker Service in Docker】 The monitoring worker service of this project. Monitors all channels and dynamically creates Azure Container Instances for recording during live streaming. Interfaces with Azure Cosmos DB to manage channel, video data and status.

### AzureFileShares2BlobContainers

【.NET 6 Azure Functions】 Responsible for transferring recorded video files from Azure Files to Azure Blob Storage. This is an Azure Function be called by LivestreamRecorderService. This function and the Azure Storage of this project are deployed in the same Azure region, allowing files to be transmitted within the same region without incurring additional external bandwidth transfer costs.

### OpenGraphTagBuilder

【Cloudflare Worker】 Queries data from Azure Cosmos DB according to the URL and dynamically build html open graph meta tags to provide external preview and search engine crawler usage.

## What's the license used of this project?

All the code resource of this project are reserved and may not be sold, used, modified, or redistributed without permission.
