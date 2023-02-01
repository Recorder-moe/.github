# Recorder.moe

Recorder.moe 是一個直播錄影服務專案，主要錄影內容為 Vtuber 直播影片。\
本專案是以「錄影服務」為中心，在接受用戶的委託後對指定的頻道錄影，讓用戶不會錯過直播內容。

**本專案目前處於開發階段，_不接受委託和贊助_**，許多功能未完成實作，無SLA保證，請在了解以上前提後試用。\
測試階段預覧網址: <https://alpha.recorder.moe/>

由於 template 的 licence 限制，本專案前端程式碼閉源。\
其餘程式碼開源，但是保留所有權利。

本專案設計是以 Azure 服務為中心架構

- 使用 Azure Static Web App 作為前端網站
- 使用 Azure Functions 作為後端 API
- 使用 Azure Container Instance 作為錄影容器
- 使用 Azure Blob Storage 儲存錄影檔案
- 使用 Azure Cosmos DB 儲存資料庫
- 使用 Azure Devops 作專案管理
- 使用 Azure Pipeline 作 CI/CD
- *唯監控 Service、Seq log server 是託管在 DigitalOcean Droplet*

網站上的 FAQ 頁面未實作，規則設計如下:

```markdown
#    Recorder.moe 網站是「完全註冊制」，目前僅支援 Google 帳號 OAuth2 登入。
>    本專案向 OAuth2 提供者取得姓名、Email、大頭貼等資料僅用做帳戶管理用途。

#    專案設計有兩種代幣: Support Token, Download Token
*    Support Token (ST): 贊助代幣，用來贊助指定頻道的錄影。用戶可以對想錄影的頻道使用贊助代幣，系統將在錄影時依照錄影檔案容量消耗贊助代幣。定價 1 ST 為 NTD $30 (或是 USD $1)。
*    Download Token (DT): 下載代幣，在下載錄影檔時消耗。Download Token 會在對頻道使用 Support Token 時自動獲得。
>    本服務不販售錄影檔案，所以 Download Token 無法直接購買。
     Support Token 用來支撐整個系統的運作成本，包含監控主機租用費用、錄影轉檔運算費用、錄影檔案儲存費用、資料庫交易費用、網頁後端API費用、專案開發維護人力成本。而 Download Token 的設計是為了維持下載和贊助的比例，有贊助錄影者才會有對應的下載額度。

#    所有用戶對頻道使用的贊助代幣都會相加在該頻道上面，類似共同儲值的概念。
*    舉例如下:
     小明對A channel使用 10 ST；對B channel使用 5 ST；獲得 15 DT。
     小華對A channel使用 7 ST；沒有贊助B channel；獲得 7 DT。
     A channel總共被贊助 17 ST，將依錄影後產生的錄影檔容量消耗，並在 17 ST 用盡後停止錄影。
     小明可以將 15 DT 用來下載 A channel 或是 B channel 的錄影檔，他可以自由分配選擇在哪個頻道使用。

#    本系統將「對頻道使用贊助代幣」動作視為發出錄影服務委託。
*    有委託才有錄影，然後才有錄影檔案提供下載。
*    用戶僅能下載「該用戶對該頻道首次贊助的時間點」之後所錄下的檔案。
>    即便該頻道已經由其它人的贊助啟動錄影，用戶也不能下載自己贊助前錄下的錄影檔案 
     本專案是以提供錄影服務為主體，而非販售影片檔案，故以這條規則來維持專案定位。

#    每個錄影檔案皆保留30天。
     錄影檔案的儲存成本已內含在 Support Token 的定價中，檔案一律只保留30天。
```
