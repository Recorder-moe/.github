---
id: before-start
title: 在開始之前
date: 2023-09-01T16:49:13.763Z
draft: false
---

在開始部署之前，請先確認您已經備妥以下資源：

## Azure

Azure 是微軟推出的雲端服務平台，提供了可靠、安全且可擴展的雲端運算服務。它具備完整的雲端產品組合，並可自動調整資源以因應需求變化，讓使用者能以最佳成本運用雲端。

- 若你選擇使用任何一項 Azure 服務，請參考此官方教學註冊 Azure 帳號，並且完成設定 Azure 訂閱。  
  [https://learn.microsoft.com/en-us/training/modules/create-an-azure-account/](https://learn.microsoft.com/en-us/training/modules/create-an-azure-account/)

- 請參考此官方文件創建一個資源群組，將本專案的所有資源部署在這裡。  
  [https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)

## DigitalOcean

DigitalOcean Droplets 是基於 Linux 的虛擬機器，運行在虛擬化硬體之上。DigitalOcean Droplets 是簡單、可擴展的虛擬機器，適用於所有的網站託管和 VPS 託管需求。

**DigitalOcean 的主機價格較 Azure 便宜數倍**，我們推薦你將監控服務部署在 DigitalOcean Droplet。

請至少租用 `1vCPU + 1GB RAM` 的方案 (6 美元/月)，並搭配 `3GB 的 Swap` (0.3 美元/月)。

- 請參考官方文件建立你的虛擬機器。  
  [https://docs.digitalocean.com/products/droplets/how-to/create/](https://docs.digitalocean.com/products/droplets/how-to/create/)

- 請參考官方文件安裝 Docker 和 Docker Compose。  
  [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

:::tip

請使用我們的推廣連結註冊，以取得 60 天內 200 美元的免費試用額度。  
[https://m.do.co/c/ac52b09a7f63](https://m.do.co/c/ac52b09a7f63)

推廣回饋將使用在示範站點 [demo.recorder.moe](https://demo.recorder.moe/) 的維運。

:::

## 資料庫

此專案支援以下兩個資料庫：Azure Cosmos DB 和 Apache CouchDB。我們選擇這兩個資料庫，因為它們都是NoSQL資料庫，並且支援**從前端網站直接查詢資料庫**。通過以這種方式提供公開的數據查詢，可以大大降低後端開發成本和運維成本。

請在雲端部署時選用 Azure Cosmos DB，本地部署時選用 Apache CouchDB。

### Azure Cosmos DB

Azure Cosmos DB 是微軟的多模型、多區域分佈的 NoSQL 資料庫服務，提供高度擴展性和全球性可用性，適用於各種應用程式，包括分佈式應用程式和大數據分析。它支援多種 API，包括 SQL、MongoDB、Gremlin 等，並提供自動備份和低延遲查詢等功能，是現代應用程式開發的理想選擇。

請參閱後續文件(還沒寫!)完成設定。

:::tip

Azure Cosmos DB 免費層包含 1000 RU/s，大約在監控 6 個頻道時不會超過，超過的部份按照用量計價。  
<https://learn.microsoft.com/zh-tw/azure/cosmos-db/free-tier>

:::

### Apache CouchDB

Apache CouchDB 是一個開放原始碼的文件導向 NoSQL 資料庫，使用 JSON 格式儲存資料。它提供簡單的 RESTful API 來存取、管理以及在節點之間複製資料。CouchDB 內建了高效率的雙向同步機制，可以將資料庫同步到多個伺服器和客戶端，以達到高可用性和容錯能力。

Apache CouchDB is an open-source document-oriented NoSQL database that uses JSON to store data. It provides easy-to-use RESTful APIs to access, manage, and replicate data between nodes. CouchDB allows databases to be replicated to multiple servers and clients through its built-in, efficient, bi-directional synchronization mechanism to achieve high availability and fault tolerance.

- 請參考官方文件安裝 Apache CouchDB，並且參考後續文件(還沒寫!)完成設定  
  [https://docs.couchdb.org/en/stable/install/index.html](https://docs.couchdb.org/en/stable/install/index.html)

## 容器執行平台

### Azure Container Instance

### Kubernetes

## 物件儲存體

### Azure Blob Storage

### MinIO (S3 Storage)

## 檔案儲存體

### Azure Files

### Kubernetes PVC
