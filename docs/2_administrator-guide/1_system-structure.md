---
id: system-structure
title: 系統架構
description: ""
date: 2023-08-22T14:44:59.863Z
preview: ""
draft: false
tags: []
categories: []
---

|                            | 類型                                                                                                                                                                | 說明                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 監控服務                   | .NET 7 Worker Service                                                                                                                                               | 管理及監控頻道、影片的狀態，啟動錄影，上傳影片 |
| 網頁前端                   | Angular 14                                                                                                                                                          | 靜態網頁，可以放在任何網頁伺服器上             |
| 網頁後端                   | .NET 6 [Azure Functions](https://azure.microsoft.com/products/functions)                                                                                            | 網頁的 API，執行需要驗證身份的網頁操作         |
| 資料庫                     | [Azure Cosmos DB](https://azure.microsoft.com/products/cosmos-db) / [Apache Couch DB](https://couchdb.apache.org)                                                   | 保存頻道、影片、使用者資料                     |
| 物件儲存體                 | [Azure Blob Storage](https://azure.microsoft.com/products/storage/blobs) / [Amazon S3-Compatible Storage](https://min.io/product/s3-compatibility)                  | 存放圖片實體檔案、影片實體檔案                 |
| 容器執行平台               | [Azure Container Instance](https://azure.microsoft.com/products/container-instances) / [Kubernetes](https://kubernetes.io)                                          | 執行錄影容器的平台，由監控服務自動部署錄影容器 |
| 共用磁碟區                 | [Azure Files](https://azure.microsoft.com/products/storage/files) / [Kubernetes Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) | 錄影容器之間的共享儲存空間                     |
| Sitemap & OpenGraph 產生器 | [Cloudflare Workers](https://www.cloudflare.com/developer-platform/workers/)                                                                                        | 即時產生 Sitemap 清單以及網頁預覧 (可選)       |
