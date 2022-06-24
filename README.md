<h1 align="center">Budget Basics Strapi</h1>
<h3 align="center">Part of the <a href="https://openbudgetsindia.org/">Open Budgets India</a> Project</h3>

<p align="center">
<br/>
<a href="https://github.com/cbgaindia/budget-basic-next">
<img alt="MIT License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"/>
</a>
</p>Budget Basics aims to demystify concepts and processes of Government budgets in India. 
Built as a documentation platform, it provides the content in easily digestible form. 
This is the back end of the platform built using Strapi CMS. Front end available <a href="https://github.com/cbgaindia/budget-basic-next">here</a>.
<br/>
<p align="center">Visit<a href="https://budgetbasics.openbudgetsindia.org/"> Budget Basics</a></p>

- [Features](#features)
  * [For Developers](#for-developers)
- [Getting Started](#getting-started)
  * [Postgres](#postgres)
  * [Start Strapi](#start-strapi)
- [Meilisearch](#meilisearch)
  * [Meilisearch Instance](#meilisearch-instance)
  * [Meilisearch on Strapi](#meilisearch-on-strapi)
- [Contributing](#contributing)

## Features

- Fully functional Strapi CMS to be used for documentation/blogging site.
- Comes preinstalled with all the required content fields.
- MeiliSearch to make search fast, easy and auto-update using webhooks.
- Using [Enhanced build of CKEditor 5](https://github.com/Roslovets-Inc/strapi-plugin-ckeditor5) as the WYSIWYG editor.

### For Developers

- This project uses PostgreSQL as a database but you have multiple options.
- Front end paradise. Add content fields and create APIs without touching the backend code.
- Exhaustive documentation provided by Strapi for all of their features and use-cases.

## Getting Started

Make sure to have a recent version of Node. You'll need Node 12.x or later. You can find a detailed guide [here](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/cli.html#preparing-the-installation)

Before starting Strapi, you will need to start a PostgreSQL instance.

### Postgres

Start by installing Postgres 

```bash
  sudo apt-get install postgresql 
```

Start Postgres 

```bash
  sudo service postgresql start
  sudo -u postgres -i
  psql postgres
```

Create database

```bash
  CREATE DATABASE strapi;
```

Create user

```bash
  CREATE ROLE strapi_user WITH LOGIN PASSWORD 'strapi_pass' CREATEDB;
```

Grant database access to user

```bash
  GRANT ALL PRIVILEGES ON DATABASE strapi TO strapi_user;
```

### Start Strapi

Clone the project

```bash
  git clone https://github.com/cbgaindia/strapi4-dashboard.git
```

Go to the project directory

```bash
  cd strapi4-dashboard
```

Install dependencies

```bash
  npm install
```

Environmental Variables

```bash
Create .env file and paste:

HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
JWT_SECRET=
```
|💥 Please use secure keys   |
|----------------------------------|

Build and start the server in development

```bash
  npm run build && npm run develop
```

or start production mode

```bash
  npm run build && npm run start
```

This will start the server at `http://localhost:8001` and Strapi dashboard at `http://localhost:8001/dashboard`

## Meilisearch

We are using [Meilisearch](https://github.com/meilisearch/MeiliSearch) to handle search functionality in our project. It is open-source and awesome.

### Meilisearch Instance

There are [lots of ways](https://docs.meilisearch.com/learn/getting_started/installation.html#download-and-launch) to install Meilisearch. I'll go with the fastest one here.

Install MeiliSearch

```bash
  curl -L https://install.meilisearch.com | sh
```

Launch MeiliSearch

```bash
  ./meilisearch --http-addr '127.0.0.1:8000' --master-key="mysuperawesomesearchkey"
```

|💥 Please use more secure keys   |
|----------------------------------|

Now, your Meilisearch instance is running at `127.0.0.1:8000`.

### Meilisearch on Strapi

This repo already contains the Meilisearch plugin installed. All you need to do is set up your `host`, `api key` and select the `content type`.

- Go to the Strapi Dashboard `http://localhost:8001/dashboard` and select Meilisearch under plugins.

- Add `127.0.0.1:8000` as the Host, `mysuperawesomesearchkey` as the API Key.

- Select the `topic` under the list and click "Reload Server" to set up a webhook.

Now if you go to `127.0.0.1:8000`, you will find all the topics (sections) you have created ready to be searched.


## Contributing

For any new feature or fixes, please request it in [issues](https://github.com/cbgaindia/strapi4-dashboard/issues) 
or create a new [pull request](https://github.com/cbgaindia/strapi4-dashboard/pulls). 

  
