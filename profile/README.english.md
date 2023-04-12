# Recorder.moe

<p align="center">
  <img src="https://github.com/Recorder-moe/.github/raw/master/page.png" width="70%"/>
</p>

<p align="center">
  <a href="https://github.com/Recorder-moe/.github/blob/master/profile/README.md">Chinese</a> |
  <span>English</span>
</p>
<p align="center">
  <b>Recorder.moe</b> records your favorite <b>Vtuber</b> live streams.<br>
  Capturing every exciting moment so you never miss a beat!<br>
  <b>👉 <a href="https://beta.recorder.moe/" target="_blank">https://beta.recorder.moe</a></b>
</p>

For detailed project description, please see [FAQ page](https://beta.recorder.moe/pages/faq)\
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
