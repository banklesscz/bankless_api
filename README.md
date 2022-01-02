# Bankless Mailchimp API
REST API that register new users to Bankless Czech newsletter.

## Used Technologies
- Node.js
- Typescript
- Express.js

## Development
1. Clone this repo
2. Install dependencies with `yarn install`
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5. If you're using different DB than PostgreSQL run these commands
   ```markdown
   1. Remove @mikro-cli/postgresql package
       - `yarn remove @mikro-cli/postgresql`
   2. Install different DB driver (https://mikro-orm.io/docs/installation/)
       - e.g. `yarn add @mikro-cli/mysql`
   3. Update `DB_TYPE` variable in `.env` file
   ```
6. Run migrations
7. Run project in development mode with `yarn dev`

## Deployment

1. Clone this repo to deployment server
2. Install dependencies `yarn install`
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5. Build app with `yarn build`
6. Create `frontend` folder inside `./dist`
7. Copy built React app into `./dist/frontend` folder


## Commands
All commands are specified inside `package.json` file

### `yarn dev`
Running app in `development` mode (auto-compile & auto-restart after change). 

### `yarn build`
Builds app into `dist` folder

### `yarn start`
Running built app from `dist` folder


## Deployment
1. `$ docker build . -t bankless_mailchimp_api`
2. `$ docker run -p 8000:8000 -d --env-file .env --name bankless_mailchimp_api bankless_mailchimp_api:latest`


## Update on production
1. Connect to production server
2. Run `$ ./deploy.sh`
3. Once in a while do:
   - List all docker images: `$ docker images`
   - Delete old docker images: `$ docker rmi bankless_mailchimp_api:<image_tag>`