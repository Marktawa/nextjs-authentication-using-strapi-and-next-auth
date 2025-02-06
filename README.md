<!--# nextjs-authentication-using-strapi-and-next-auth
Application show how Next.js can be authenticated using Strapi and NextAuth. -->

# User Authentication in Next.js with Strapi

![cover](cover.png)

## Description

This repository contains the source code for the article: [User Authentication in Next.js with Strapi](https://strapi.io/blog/user-authentication-in-next-js-with-strapi), written for [Strapi's Blog](https://strapi.io/blog)

## Prerequisites

To test out the source code you will need the following:
- [Node.js LTS v18 or v20](https://nodejs.org)
- [Google Account](https://google.com)

## Getting Started

Clone the repository.
```bash
git clone https://github.com/Marktawa/nextjs-authentication-using-strapi-and-next-auth.git
```

## Strapi Setup

Install dependencies.
```bash
cd nextjs-authentication-using-strapi-and-next-auth/backend
```

```bash
npm install
```

Set up Environment variables.
```bash
cp .env.example .env
```

Create admin user with email `chef@strapi.io` and password `Gourmet1234`.
```bash
npm run strapi admin:create-user -- --firstname=Kai --lastname=Doe --email=chef@strapi.io --password=Gourmet1234
```

Run Strapi server.
```bash
npm run develop
```

Login to your Strapi admin by visiting [localhost:1337/admin](http://localhost:1337/admin) using the admin email and password you created earlier.

![Strapi Admin Login](https://res.cloudinary.com/craigsims808/image/upload/v1737184283/strapi/strapi-railway/strapi-admin-login_mxcmfn.png)

Clicking on **Login** gives you the Strapi Admin Dashboard Home page:

![Strapi Admin Dashboard Home Page](https://res.cloudinary.com/craigsims808/image/upload/v1738201442/strapi/strapi-next-auth/strapi_admin_ja7t4h.png)

## Next.js Setup

Open up your project folder, `nextjs-authentication-using-strapi-and-next-auth` in a new terminal session.

Install dependencies.
```bash
cd nextjs-authentication-using-strapi-and-next-auth/frontend
```

```bash
npm install
```

Set up Environment variables.
```bash
cp .env.example .env
```

## Google OAuth Setup

[Create a Google OAuth client ID ](https://console.developers.google.com/apis/credentials/oauthclient) by visiting [this link.](https://console.developers.google.com/apis/credentials/oauthclient)

On completion, you should have a Client ID and a Client Secret:

![Google Client ID and Client Secret](https://res.cloudinary.com/craigsims808/image/upload/v1738840871/strapi/strapi-next-auth/google-client-id-secret_aoar9i.png)

Update `.env` in your Next.js folder, `nextjs-authentication-using-strapi-and-next-auth/frontend`,  with your  Client ID: `GOOGLE_CLIENT_ID` and Client secret: `GOOGLE_CLIENT_SECRET`.

## Test out code

Run the following command inside the Next.js folder, `nextjs-authentication-using-strapi-and-next-auth/frontend` to launch the app.
```bash
npm run dev
```

Visit [localhost:3000](http://localhost:3000/) to view the Sign In page.

![Next.js Sign In Page](https://res.cloudinary.com/craigsims808/image/upload/v1738843189/strapi/strapi-next-auth/nextjs-sigin_qibbbq.png)

Log in using your Google account by clicking **Sign In**. Once signed in, you can access the app:

![Next.js Protected Page](https://res.cloudinary.com/craigsims808/image/upload/v1738843189/strapi/strapi-next-auth/nextjs-protected-page_jmvzaa.png)

## Author

Mark Munyaka  
[dev.to/markmunyaka](https://dev.to/markmunyaka)