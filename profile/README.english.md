# Recorder.moe

<p align="center">
  <img src="https://github.com/Recorder-moe/.github/raw/master/page.png" width="70%"/>
</p>

<p align="center">
  <a href="https://github.com/Recorder-moe/.github/blob/master/profile/README.md">Chinese</a> |
  <span>English</span>
</p>


## Sub-projects

### LivestreamRecorderFrontend

【Angular 14】 The frontend Angular web page of this project. Template purchased from themeforest and used under envatomarket Regular License. Due to license restrictions of the template used, the code of this project is closed source.

### [LivestreamRecorderBackend](https://github.com/Recorder-moe/LivestreamRecorderBackend)

【.NET 6 Azure Functions】 The backend API of this project's web page. Uses Azure Functions to reduce backend costs and Azure App Service's built-in EasyAuth for OAuth2.0 identity verification to execute authenticated database transactions.

### [LivestreamRecorderService](https://github.com/Recorder-moe/LivestreamRecorderService)

【.NET 7 Worker Service in Docker】 The monitoring worker service of this project. Monitors all channels and dynamically creates Azure Container Instances for recording during live streaming. Interfaces with Azure Cosmos DB to manage channel, video data and status.

### [AzureFileShares2BlobContainers](https://github.com/Recorder-moe/AzureFileShares2BlobContainers)

【.NET 6 Azure Functions】 Responsible for transferring recorded video files from Azure Files to Azure Blob Storage. This is an Azure Function be called by LivestreamRecorderService. This function and the Azure Storage of this project are deployed in the same Azure region, allowing files to be transmitted within the same region without incurring additional external bandwidth transfer costs.

### [OpenGraphTagBuilder](https://github.com/Recorder-moe/OpenGraphTagBuilder)

【Cloudflare Worker】 Queries data from Azure Cosmos DB according to the URL and dynamically build html open graph meta tags to provide external preview and search engine crawler usage.

## What's the license used of this project?

All the code resource of this project are reserved and may not be sold, used, modified, or redistributed without permission.
