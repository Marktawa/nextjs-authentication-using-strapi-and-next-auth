## Create OAuth client ID

To create an OAuth client ID, you must first configure your consent screen. Click on `Configure Consent Screen`.

- Don't use App router
- No Postgres
- Tailwind - yes
- localhost:3000 for Next, 1337-gitpod for strapi

Authorised redirect URIs
For use with requests from a web server
URIs 1 
http://localhost:3000/api/auth/callback/google
URIs 2 
https://1337-craigsims808-samples-hlvhkdzwwkr.ws-eu117.gitpod.io/api/connect/google/callback
Note:

NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecret
GOOGLE_CLIENT_ID=8939459765-7854fy9gfhoifhdfhgv98979.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-9875978n98gr-Ny7094790407jd
