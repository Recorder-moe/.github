---
id: subprojects
title: 子專案列表
description: ''
date: 2023-08-22T07:06:09.443Z
preview: ''
draft: false
tags: []
categories: []
---

## 主要專案

### [LivestreamRecorderFrontend](https://github.com/Recorder-moe/LivestreamRecorderFrontend_dist)

【Angular 14】

本專案的前端 Angular 網頁。Template 購自 [themeforest](https://themeforest.net/item/apex-angular-4-bootstrap-admin-template/20774875)。依照 [envatomarket Regular License](https://themeforest.net/licenses/terms/regular) ，本專案程式碼閉源，僅發佈 dist。

### [LivestreamRecorderBackend](https://github.com/Recorder-moe/LivestreamRecorderBackend)

【.NET 6 Azure Functions】

本專案的網頁後端 API。進行登入帳號驗證以及管理員操作。能在 Azure Functions 或是 docker 環境運行。

### [LivestreamRecorderService](https://github.com/Recorder-moe/LivestreamRecorderService)

【.NET 7 Worker Service】

本專案的監控 Worker Service。監控所有的頻道，並在直播開始時動態建立錄影容器。負責管理頻道、影片的資料狀態。以 docker image 方式發佈。

### [OpenGraphTagBuilder](https://github.com/Recorder-moe/OpenGraphTagBuilder)

【Cloudflare Worker】

查詢資料庫並動態產生 Open Graph 資訊和 Sitemap，提供外部預覧和搜索引擎爬蟲使用。

### [k8s-recorder.moe](https://github.com/Recorder-moe/k8s-recorder.moe)

【Kubernetes Helm charts】

本專案的 Kubernetes Helm chart，用於部署網頁前端、網頁後端、監控服務、Ingress，以及錄影容器的運行環境。

## 次要專案

### [LivestreamRecorder.DB](https://github.com/Recorder-moe/LivestreamRecorder.DB)

【.NET 6】

Recorder.moe C# 專案的資料庫方案。包含資料庫的 Entity 定義、資料庫操作的 Repository 和 DBContext。介接 Azure Cosmos DB 和 Apache Couch DB。用做 LivestreamRecorderBackend 和 LivestreamRecorderService 的 git submodule。

### [doc](https://github.com/Recorder-moe/doc)

【Docusaurus 2】

Recorder.moe 的說明文件。即本網頁的原始碼。

### [azure-uploader](https://github.com/Recorder-moe/azure-uploader)

【shell script in Docker】

上傳影片到 Azure Blob Storage 的 docker image。由 LivestreamRecorderService 部署。

### [s3-uploader](https://github.com/Recorder-moe/s3-uploader)

【shell script in Docker】

上傳影片到 Amazon S3-Compatible Storage 的 docker image。由 LivestreamRecorderService 部署。

### [AzureFileShares2BlobContainers](https://github.com/Recorder-moe/AzureFileShares2BlobContainers)

:::caution

已棄用，由 azure-uploader 取代。

:::

【.NET 6 Azure Functions】

將 Azure File Share 的檔案複製到 Azure Blob Storage。這個 Azure Function 由 LivestreamRecorderService 呼叫，部署在與此專案 Azure Storage 相同的 Azure 區域中。這可以確保影片檔案在相同區域內傳輸，避免額外的出站數據傳輸成本。

## 外部專案

:::info

以下專案非由 Recorder.moe 開發維護，我們僅搭建 CI/CD docker image 並使用。

:::

### [yt-dlp](https://github.com/Recorder-moe/yt-dlp)

各平台的影片下載工具。

軟體來自 [yt-dlp](https://github.com/yt-dlp/yt-dlp)，由 [jauderho/dockerfiles](https://github.com/jauderho/dockerfiles) 容器化。

### [ytarchive](https://github.com/Recorder-moe/ytarchive)

Youtube 直播下載工具。

軟體來自 [Kethsar/ytarchive](https://github.com/Kethsar/ytarchive)，由 [jim60105/docker-ytarchive](https://github.com/jim60105/docker-ytarchive) 容器化。

### [streamlink](https://github.com/Recorder-moe/streamlink)

Twitch 直播下載工具。

軟體來自 [streamlink](https://github.com/streamlink/streamlink)，由 [rayou/docker-streamlink](https://github.com/rayou/docker-streamlink) 容器化。

### [twitcasting-recorder](https://github.com/Recorder-moe/twitcasting-recorder)

Twitcasting 直播下載工具。

軟體來自 [prinsss/twitcasting-recorder](https://github.com/prinsss/twitcasting-recorder)，由 [jim60105/docker-twitcasting-recorder](https://github.com/jim60105/docker-twitcasting-recorder) 容器化。

### [fc2-live-dl](https://github.com/Recorder-moe/fc2-live-dl)

FC2 直播下載工具。

軟體來自 [HoloArchivists/fc2-live-dl](https://github.com/HoloArchivists/fc2-live-dl)，由 Recorder.moe 容器化。
